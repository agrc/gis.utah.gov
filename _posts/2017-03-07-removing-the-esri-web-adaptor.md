---
author:
  display_name: Steve Gourley
  email: SGourley@utah.gov
tags: []
date: 2017-03-07 05:10:58
title: Removing and Replacing the Esri Web Adaptor
categories:
  - Developer
---

The [Esri web adaptor](https://server.arcgis.com/en/server/latest/install/windows/about-the-arcgis-web-adaptor.htm) is a small load balancer/reverse proxy bundled into the ArcGIS Server install but do you know if you need it?

> The esri Web Adaptor is an application that runs in your existing website and forwards requests to your ArcGIS Server machines.

ArcGIS Server runs an http server exposed over the private port 6080. The web adaptor can then accept public requests on port 80 or 443 and choose to forward those requests to the ArcGIS Servers in your site or block the request all together. This scenario is a best practice for public facing ArcGIS Servers. This architecture secures the admin endpoints of ArcGIS Server as well as [many other benefits](https://server.arcgis.com/en/server/latest/install/windows/about-the-arcgis-web-adaptor.htm). The web adaptor is not required though.

### When to install the web adaptor
{: .text-left }

![Web adaptor flow chart]({% link images/web-adaptor-flow.png %})

As you can tell from this decision chart, you are _required_ to install and use the web adaptor when you need web tier authentication with ArcGIS Server. Otherwise, you _should_ skip the install and use something more tuned for the job.

> When you prepare to expose your ArcGIS Server site to an external audience, you should install the Web Adaptor or **implement comparable request forwarding and security technology.**

If your organization has _comparable request forwarding and security technology_ use it - Big IP F5, Squid, HAProxy, etc.

As a developer, it is beneficial to mimic your deployment scenario to avoid the "Works on my machine" problem. Although, it is not always possible to match identically. I chose to use IIS's **Application Request Routing** and **URL Rewrite** to remove the dependency of the web adaptor on my development machines.

### Replacing the web adaptor
{: .text-left }

To replace the web adaptor on an IIS machine it is first necessary to install the [Web Platform Installer](http://www.microsoft.com/web/downloads/platform.aspx). Using the web platform installer, search and install the **Application Request Routing** and **URL Rewrite** modules for IIS.

Open IIS, select your instance, and find the new `Application Request Routing` module. Find the `Server Proxy Settings` and enabled the proxy.

![Application Request Routing Proxy]({% link images/web-adaptor-arr.png %})

Now that IIS can act as a proxy, Url Rewrite can be configured to forward public requests to the private ArcGIS port. Select the website and find the `URL Rewrite` module and create a new `Inbound Rule`. Url Rewrite will modify requests to `http://localhost/arcgis/rest/*` and rewrite the url so that ArcGIS Server can respond. The pattern to match requests to ArcGIS endpoints is `(arcgis/rest.+)`. The rewrite url is `http://localhost:6080/{R:0}`. The regular expression capture group is placed in the `{R:0}` location after modifying the url to point to your local IIS instance with the new port.

![Url Rewrite Rule]({% link images/web-adaptor-rewrite.png %})

Now requests to ArcGIS Server endpoints over public ports in IIS will be routed to the private port. You can remove the web adaptor and requests to ArcGIS Server will still be successful and the 6080 port will no longer be required in the url.
