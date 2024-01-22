---
title: 'SGID breaking changes from SITLA'
author:
  display_name: steve gourley
  email: sgourley@utah.gov
date: 2023-11-08 21:43:59
categories:
  - Featured
tags:
  - sgid
---

If you depend on any of the geospatial services from The School and Institutional Trust Lands Administration (SITLA), you might have noticed that the services started having issues on the 5th of October. SITLA worked with Esri to try to resolve the issue but were unable to do so. Fortunately for SITLA, they had a cloud environment available to fill the gap. We were told that this cloud migration was scheduled for next year but when the on-prem solution failed, they had to fast track the migration. There are some notable differences between the on-prem and cloud systems that require user action to migrate from one system to the other. Here is what you need to know.

### Issue 1

{: .text-left }

The first issue to be aware of is that the URL to access any of the services is slightly different.

If the URL you are using from SITLA has `/server/` in it, you will need to migrate.
{: .pop }

#### The on-prem system

`https://gis.trustlands.utah.gov/server/rest/services/`

#### The cloud system

`https://gis.trustlands.utah.gov/mapping/rest/services/`

The difference may be difficult to spot, but the on-prem system used `server` while the cloud system uses `mapping`.

### Issue 2

{: .text-left }

The second issue is the on-prem system organized services in folders and the cloud system has all of the services in the root directory. This affects the URL to access any SITLA service that was not already hosted in the root directory.

If the URL you are using from SITLA has `/rest/services/*`, where `*` is anything other than the service name, you will need to migrate.
{: .pop }

#### The on-prem system

`/rest/services/Ownership/*`

#### The cloud system

`/rest/services/*`

For example, the Land Ownership framework dataset from SITLA was hosted in `/rest/services/Ownership/`. Now the `/Ownership/` category folder is removed.

### Issue 3

{: .text-left }

The third issue is the naming convention for the services has changed.

If the service you are using from SITLA has `UT_SITLA_*`, where `*` is a category, you will need to migrate.
{: .pop }

#### The on-prem system

`UT_SITLA_Ownership_LandOwnership_WM`

#### The cloud system

`Land_Ownership_WM`

Using the Land Ownership dataset as an example again, the service name was `UT_SITLA_Ownership_LandOwnership_WM`. The convention was to use the two letter state abbreviation, the agency name, the category, the layer name, and finally an optional `WM` if the layer was in the web mercator projection. The new convention removes the `UT_SITLA_*` prefix, where `*` is the category.

All of the new services and names can be found in SITLA's cloud system [services directory](https://gis.trustlands.utah.gov/mapping/rest/services).

### Issue 4

{: .text-left }

The final issue we were able to discover has to do with feature attribute names. The cloud system has all lowercase attribute names.

If you are symbolizing or querying a SITLA service by a field name with capitol letters, you may need to migrate.
{: .pop }

#### The on-prem system

`OWNER, AGENCY, ADMIN, DESIG`

#### The cloud system

`owner, agency, admin, desig`

Using Land Ownership as an example again, the `OWNER` field is now `owner`. This change originates from a PostgreSQL database convention.

## Temporary Partial Mitigation

{: .text-left }

On the first of November the SITLA team were able to set up a rewrite rule for the Land Ownership layer to restore the connection to clients using the old URL. This stopgap appears to only be effective for the Land Ownership layer and is a temporary solution. **We are told it will be removed by the end of the year**. This means that you may not be experiencing any issues now but it will stop working at the end of the year if you do not migrate when the rewrite rule is removed.

The School and Institutional Trust Lands Administration realizes that this has caused broken links when trying to access the previous URLs and apologizes for any inconvenience this may cause.
