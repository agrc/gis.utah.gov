# Title

Ditch the Cursor: Editing with Spatially-Enabled DataFrames
Editing Attribute Tables with Spatially-Enabled DataFrames
Attribute Edits with Spatially-Enabled DataFrames

## Abstract

What do you do when you need to regularly update the attributes of a feature class or feature service? Maybe you get weekly updates about a series of points as an automated CSV dump, or your coworker sends you an excel sheet every month. Or, how do you do a series of attribute calculations and column cleaning/renaming as part of a larger script?

While all this can be done with arcpy tools, pandas DataFrames provide a native, table-based data model that makes working with tabular data easy and simple. No more opening multiple cursors and trying to remember which row index applies to a particular field. No more coming back to your code six months later and trying to remember what "row[3] = row[7] + row[4]" means, but only if "row[0] > row[2]".

Esri's ArcGIS API for Python provides an extension to normal DataFrames that handles reading and writing spatial data, provides a spatial data type for DataFrames, and includes a number of spatial operations. With these Spatially-Enabled DataFrames, you can update attribute values based on whatever equation or logic you can think of, rename and rearrange fields, perform data and spatial joins with other tables, and otherwise munge to your heart's content.
