
Why cursors are cursed
    row[x] vs field names
        hui/davis2020.py/L215
        jake_scripts/slco_parcel_downloader.py/L250
    double/nested cursors
        broadband-updates/update_provider.py/L180
    speed?

Benefits of Pandas
    Field Names
    Powerful filtering
    Easy joins
    Quick column renaming/reordering]
    No chain of scratch or in_memory feature classes
    Many geometry operations available right in the dataframe

Intro to pandas
    2d dataframe ~= table/spreadsheet
    indexes of rows and columns
    accessing data
        df[]
            masks, booleans, and conditionals
        df.loc[]
        df.iloc[]

Example: Updating a feature class with a csv
    Read both in
    merge
    column cleaning/renaming
    overwrite featureclass

Example: Updating a hosted feature service
    same as above but with hosted feature service?

Example: Custom dissolve example from housing inventory?
