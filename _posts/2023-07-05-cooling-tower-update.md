---
title: 'Results Update: Detecting Cooling Towers with Computer Vision Tools'
author:
  display_name: Erik Neemann
  email: eneemann@slco.org
date: 2023-06-30 09:00:00
categories:
  - Featured
tags:
  - computer vision
  - dhhs
  - cooling towers
  - legionella
---

If you were at the 2023 Utah Geographic Information Council (UGIC) Conference in May, you **might** remember that I presented on [Generating Useful Data with Computer Vision Tools](https://agrc.github.io/Presentations/UGIC/2023/ComputerVision.pdf).  But my second use case, detecting cooling towers in aerial imagery for the Utah Department of Health and Human Services (DHHS), was still a work in progress with results yet to be determined.  I promised to provide an update via blog post, and now I’m (finally) fulfilling that promise.

> *SIDE NOTE: Shortly after UGIC, I accepted a new position as the GIS Manager in the Salt Lake County Surveyor’s Office.  Although I’m no longer at UGRC, we were able to complete the data processing and validation before my transition to Salt Lake County.*

## Background

Knowing the location of cooling towers in the state is important to DHHS, because it can significantly streamline investigations into Legionella outbreaks.  Legionella is a bacteria that can cause a serious type of pneumonia called Legionnaires' disease.  The bacteria can grow/spread in large building water systems, including water tanks, HVAC components, large/complex plumbing systems, and cooling towers. Cooling towers are particularly concerning because they can release aerosolized water into the atmosphere. If Legionella is present, the aerosolized water can spread the bacteria over miles ([Controlling Legionella in Cooling Towers](https://www.cdc.gov/legionella/wmp/control-toolkit/cooling-towers.html)).

Cooling towers can cause outbreaks of Legionnaires’ disease when they are not adequately maintained. They are often investigated and located using aerial imagery during Legionnaires' outbreaks and have distinctive features that make them identifiable ([CDC Procedures for Identifying Cooling Towers](https://www.cdc.gov/legionella/health-depts/environmental-inv-resources/id-cooling-towers.html)).  The combination of distinctive features and high resolution of aerial imagery make detecting cooling towers a good candidate for computer vision tools. In fact, researchers and the CDC have already begun to use object-detection models like [TowerScout](https://github.com/TowerScout/TowerScout) to identify potential cooling towers in aerial imagery.  TowerScout is based on the [YOLOv5 model](https://github.com/ultralytics/yolov5) within the [PyTorch](https://pytorch.org/) framework. For this project, we’ve employed a pre-trained version of the TowerScout model to scan aerial imagery in Utah.

## Methodology

The rest of this blog post will largely focus on the project results, because the methodology of the project was covered in detail in the [UGIC presentation](https://agrc.github.io/Presentations/UGIC/2023/ComputerVision.pdf) (slides 33-43).  A brief summary is listed below:

1. Build imagery index & processing footprint
   - Build tile index at highest zoom level (20)
   - Generate processing footprint by buffering census places and large buildings (>5k sq ft) by 800 meters
   - Select tile indices within processing footprint
1. Download images from UGRC Discover service
   - Download images that fall within footprint
   - Combine adjacent images into 2x2 mosaic (512x512 pixels)
1. Detect & locate towers in each image
   - Run TowerScot PyTorch model on each mosaic
   - Calculate X/Y coordinates of detected tower centroids
   - Save results in Cloud SQL database table
   - Export CSV from database and build spatial data from coordinates (feature class)
1. Post-process results
   - Manually review detections with confidence > 0.5 to ensure validity
   - Enrich data with additional attributes
1. Build web map with other relevant layers

![Cooling Tower Project Overview]({% link images/dhhs_process.png %} "Cooling Tower Project Overview"){: .flex .flex--center}

## Results

Much like the parcel detection project for the Utah Department of Transportation (UDOT), the cooling towers project was greatly enabled by cloud computing and the scaling it provides.  By processing the imagery in the Google Cloud Platform, we were able to complete 225 days (5,400 hours) worth of wall-clock computing time in 9 days.  And we could have done it faster, but we were processing image tiles from our production imagery server, so we intentionally spread out the workload to avoid overtaxing the system.

In the PyTorch model, we took the approach of maximizing cooling tower detections by lowering the model's confidence threshold.  That way, we could prioritize data validation on the high-confidence detections, but keep the low-confidence detections available, in case some of them were good or we wanted to review additional detections at a later time.  (In testing, some detections with confidence scores as low as 0.01 ended up being valid).

In the end, the TowerScout model detected 6,324 potential towers with a confidence score > 0.5.  These relatively high-confidence detections were manually reviewed, and 1,561 tower locations were validated.

![Map of cooling towers with confidence > 0.5]({% link images/cooling_tower_map.png %} "Map of cooling towers with confidence > 0.5"){: .flex .flex--center}

## Next Steps

The final steps in the project will include enriching the geospatial data with additional attributes and building a web map for DHHS to use in Legionella outbreak investigations.  The additional attributes will include things like the nearest address, county, municipality (if applicable), zip code, small health statistical area, health department, etc., for a given cooling tower.
