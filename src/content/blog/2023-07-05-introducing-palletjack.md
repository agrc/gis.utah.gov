---
title: "Introducing palletjack: Updating AGOL feature services from external sources"
author:
  display_name: Jake Adams
  email: jdadams@utah.gov
date: 2023-07-05T15:00:00.000Z
tags:
  - python
category: Developer
---

_From the I Love Being Lazy department_
{: .text-center}

Do you hate writing the same bits of code over and over again? Do you hate fixing the same thing again and again? Do you think "there's got to be a way to do that, but I don't have time to figure it out?"

Me too!

I'm excited to introduce `palletjack`, a python data pipeline library for updating feature services that are hosted in ArcGIS Online. palletjack is a toolbox of classes and their methods to help you in each part of the Extract, Transform, and Load steps of your own ETL scripts, instead of being a stand-alone application that you feed your data into.

palletjack can speed up your ETL script development time by handling all the drudgery of extracting data from external sources and loading your transformed data into AGOL hosted feature layers, freeing you to focus on the transformations specific to your unique project.

![palletjack does lots of the repetitive work for you]({% link images/palletjack_overview.png %})
{: .flex .flex--center}

palletjack uses [spatially-enabled DataFrames](https://developers.arcgis.com/python/guide/introduction-to-the-spatially-enabled-dataframe/) as the common data format between many different external data formats and hosted feature services in AGOL. They allow you to simply and quickly transform your data as desired: adding or renaming attributes, calculating new attributes, or merging multiple datasets into one.

Once you've got your new DataFrame ready, palletjack has prebuilt tools for updating an existing hosted feature service—basically, any layer you've got hosted in ArcGIS Online. It's great for organizations that haven't made the leap to ArcGIS Enterprise and a federated Portal installation.

Because the ArcGIS API for Python (the library that hooks us into hosted feature services and provides the spatially-enabled DataFrames) can be installed from PyPI without needing ArcGIS Pro or Enterprise, palletjack can be used in scripts anywhere—on your work computer, on a department server, or in the cloud.

Don't want to read? Watch the recording of the palletjack presentation at UGIC's 2023 conference instead!

{% include embedded_video.html embed_url="https://player.vimeo.com/video/830256482" %}

## Step One: Extract Data from External Sources

{: .text-left}

A common task in modern GIS is taking tabular data from a non-spatial source and either georeferencing it using data in the table (such as addresses or lat/long pairs) or joining it to some pre-existing spatial dataset.

We're facing this task more and more in the work we do for other agencies. We built a webmap for the recently-closed Utah Rent Relief program to show the amounts of emergency rental assistance payments each zipcode was receiving. This needed to be updated every week with new data from a csv file that would overwrite the existing data in the AGOL hosted feature layer.

Sometimes a distributed spreadsheet (with all its provisos) provides all the functionality needed to transfer data from one organization to another. The Division of Waste Management and Radiation Control's [Statewide Recycling Data Initiative](https://deq.utah.gov/waste-management-and-radiation-control/statewide-recycling-data-initiative) tracks recycling efforts throughout the state. We built a script that grabs data from their Google sheet on a monthly basis and updates their Facility Locator map, ensuring the public always has up-to-date information.

The [`palletjack.extract`](https://agrc.github.io/palletjack/palletjack/extract.html) module contains different classes for different sources of data. Each class handles the authentication and extraction details, returning a pandas DataFrame ready for the next ETL step.

## Step Two: Transform the Data

{: .text-left}

Unfortunately, external data is rarely plug and play. We often have to massage it into form, like joining the rental assistance data to the zip code geometries or adding the proper county to the recycling data.

Every project is going to have it's own specific data transformations—some simple, some complex. This is where you should be spending all your coding time and energy. You'll take the DataFrame produced by the extract step and modify it to your heart's content.

While palletjack can't magically figure out your transformations for you, it does have some helper methods in the [`palletjack.transform`](https://agrc.github.io/palletjack/palletjack/transform.html) module to simplify some already-solved problems, like geocoding addresses with the [UGRC Web API Geocoder](https://gis.utah.gov/data/address-geocoders-locators/#WebAPI). It also includes some methods for cleaning up your DataFrame after you've finished your project-specific transformations, preparing your data for loading into an ArcGIS Online Hosted Feature Service.

## Step Three: Load the Data into an Existing Hosted Feature Service

{: .text-left}

Now that our new DataFrame looks the way we want it to, it's time to update our live data. The [`palletjack.load.FeatureServiceUpdater`](https://agrc.github.io/palletjack/palletjack/load.html#palletjack.load.FeatureServiceUpdater) class provides four methods for each possible updating scenario: adding new features, updating existing features, removing features we don't need any longer, and finally truncating the entire service and loading completely new data. It's your job to figure out which one (or more) methods to use. They each take a DataFrame of new/updated info to push up to the feature service (or a list of ObjectIDs to delete).

Before palletjack, I had to reinvent the wheel every time we needed to update a feature service. I'd often go copy/paste code from a different project—and then spend hours troubleshooting when it wouldn't work with this particular dataset. Later, when I'd update the uploading code in the first project, I'd never remember to update the second.

palletjack fixes this by doing all the heavy lifting for you. You only have to call the right methods in your script. We've spent lots of development time identifying and fixing odd corner cases—datetimes, weird data types, handling null values, and a lot more—so that you can spend less time troubleshooting and more time solving the problems that really matter. If there is something wrong with your data that will prevent it from uploading properly, the palletjack methods will return a helpful error message with hints on how to fix it. Unless it's a problem we've not seen before. Then ~~you're on your own~~ please [log an issue](https://github.com/agrc/palletjack/issues/new) so we can fix it!

## Sign Me Up

{: .text-left}

"Ok," I can hear you saying, "I'm convinced! palletjack will completely change my life, restore my thinning hair, and magically plop a Lamborghini in my driveway. [How do I get that goodness in me?](https://www.youtube.com/watch?v=_xOsqQM8jFU)"

Installing palletjack is easy: set up your python environment using your preferred tools (conda, `venv`, etc) and then run `pip install ugrc-palletjack`. palletjack 3.x currently targets python 3.9, but will be updated to follow the ArcGIS API for Python's preferred python version.

## Tell Me More

{: .text-left}

I've tried to make the [palletjack documentation](https://agrc.github.io/palletjack/palletjack/) as helpful and useful as possible. In addition, palletjack tries to add more info to common errors to help you track down what went wrong or what you need to change in your data. The [source repo](https://github.com/agrc/palletjack/) has an [example script](https://github.com/agrc/palletjack/blob/main/docs/examples.py) with some simplified examples.

Finally, you're free to crib from our scripts that use palletjack (which we call "skids")—just search our GitHub organization for ["skid"](https://github.com/agrc?q=skid&type=all&language=&sort=). Be warned, though, these have a lot of extra code meant to facilitate running the script as a Google Cloud Function. However, you should be able to see where palletjack is used to extract, clean, and load the data.

## Um, A Little Help Here?

{: .text-left}

If you run into problems using palletjack, please reach out! You can contact {% include contact.html subject=page.title contact=site.data.contacts.palletjack text=' ' hide-punctuation=true %} if you need help. If you find a bug, or want to keep track of updates, you can watch the palletjack [GitHub repo](https://github.com/agrc/palletjack).
