---
title: "Python Shorts: Loading an Open SGID Layer into pandas"
author:
  display_name: Jake Adams and Scott Davis
  email: jdadams@utah.gov
date: 2022-12-22 11:00:00
categories:
  - Featured
  - Developer
tags:
  - python
---

There are a [myriad of ways]({% link sgid/open-sgid/index.md %}) you can access data from the Open SGID. However, these all require some form of desktop client application. What if you want programmatic access to our spatial data? Because the Open SGID uses the open-source PostGIS extension to Postgres, you can use any libraries that can load Postgres tables and process the geometry data (or just ignore that if all you want is the tabular data).

In the python world, pandas DataFrames are a common and powerful structure for evaluating data. Our developer team has put together this code snippet for loading an SGID layer into either a geopandas geodataframe or an Esri spatially-enabled dataframe.

Now that you've got the SGID layer loaded into a dataframe, you can integrate it into the rest of your application. Our colleague Erik Neemann has written a pretty in-depth [blog post]({% link _posts/2020-05-28-exploring-the-open-sgid-with-open-source-python-tools.md %}) on harnessing the power of geopandas for GUI-less GIS analysis.

## Requirements
{: .text-left}

This code requires three additional libraries besides pandas (or four if you want a spatially-enabled dataframe). These are all pip-installable from [PyPi](https://pypi.org), so they can be used in the vast majority of python environments.

- `psycopg2`: Postgres database access
- `sqlalchemy`: Generalized access to SQL databases
- `geopandas`: Open source geographic dataframes
- `arcgis` (optional): ArcGIS API for Python with access to Esri's spatially-enabled dataframes

## The Code
{: .text-left}

```python
import geopandas as gpd
import pandas as pd
import psycopg2
from sqlalchemy import create_engine

def load_open_sgid_table(table_name, as_esri=False):
    """Load an Open SGID layer into either a geodataframe or a spatially-enabled dataframe.

    Args:
        table_name (str): The name of the Open SGID table. ex: boundaries.county_boundaries
        as_esri (bool): Return a spatially-enabled dataframe instead. Defaults to false.

    Raises:
        RuntimeError: If the arcgis library is not installed.
    """

    #: Create the Open SGID connection and load the data as a geodataframe
    engine = create_engine('postgresql+psycopg2://agrc:agrc@opensgid.agrc.utah.gov:5432/opensgid')
    with engine.connect() as connection:
        gdf = gpd.GeoDataFrame.from_postgis(f'select * from {table_name}', connection, geom_col='shape')
    
    #: By default, return the geodataframe
    if not as_esri:
        return gdf
    
    #: Otherwise, convert it to a spatially-enabled dataframe
    try:
        from arcgis import GeoAccessor, GeoSeriesAccessor
    except ImportError as error:
        raise RuntimeError('Can\'t load arcgis library') from error
        
    sdf = pd.DataFrame.spatial.from_geodataframe(gdf, column_name='shape')
    #: Rename the shape column to match other spatially-enabled dataframes created through the ArcGIS API for Python
    sdf.rename(columns={'shape': 'SHAPE'}, inplace=True)
    sdf.spatial.set_geometry('SHAPE')
    return sdf
```

You can then call this function with the table name for a layer:

```python
state_boundary_df = load_open_sgid_table('boundaries.state_boundary', as_esri=True)
print(state_boundary_df)
```

Which gives us

```output
   xid state                                              SHAPE
0    1  Mask  {"rings": [[[5686876.59, 8859297.030000001], [...
1    2  Utah  {"rings": [[[295008.5599999996, 4651995.720000...
```

You've now got a spatial dataframe that you can explore and manipulate and integrate to your heart's content.
