---
title: 'The Next AGRC WebAPI'
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
date: 2018-09-13 00:12:00
categories:
  - Featured
  - Developer
tags:
  - webapi
  - cloud
---

The current [WebAPI](https://api.mapserv.utah.gov) has been in production serving the public for multiple years. It handles millions of requests for spatial information every month and is free to use with a simple to create [API key](https://developer.mapserv.utah.gov/StartupGuide). While it receives constant [enhancements](https://github.com/agrc/api.mapserv.utah.gov/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed+label%3Aenhancement) and [bug fixes](https://github.com/agrc/api.mapserv.utah.gov/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed+label%3Abug), there have been no breaking changes to the API, nor have there been any major architectural updates. That is about to change with a major update currently in the works.

The interesting and often wild office discussions about how to improve the WebAPI have not been backed by concrete efforts until now. Implementing these ideas is now possible since key technologies have made amazing advancements while others have matured. AGRC is ready to combine our ideas with new technologies to make the WebAPI even better. Work has already started on what will most likely be [version 2](https://github.com/agrc/api.mapserv.utah.gov/tree/development) of the WebAPI. And we hope to bring the same improvements to version 1 without interruption.

## <i class="fas fa-history"></i> The History <i class="fas fa-history fa-flip-horizontal"></i>

The WebAPI proof of concept was built using [ASP.NET WCF](https://docs.microsoft.com/en-us/dotnet/framework/wcf/whats-wcf). After getting positive internal feedback (_and usage in production, of course_), we wrote version 1 of the WebAPI using ASP.NET WebAPI 3. The ASP.NET WebAPI then merged with ASP.NET MVC, and we are currently running on ASP.NET MVC 5.

[RavenDB](https://ravendb.net/) is the user and key store and [Redis](https://redis.io) is being used for analytics and reporting. Redis and RavenDB are both running as Windows services and the WebAPI and developer website are hosted as separate sites in IIS. Supplementary data is cached from Google Sheets to allow for easy modifications.

Reading that last paragraph may have made you think that it would be hard to replicate or upgrade the entire WebAPI system. If that's the case--you are  [correct](https://github.com/agrc/api.mapserv.utah.gov/wiki). The list of installation instructions and documentation for the version 1 WebAPI system are as frustrating as they are long. A design goal of version 2 is to eliminate that friction as much as possible.

## <i class="fas fa-rocket"></i> The Future <i class="fas fa-rocket fa-flip-horizontal"></i>

The new framework we plan to use, [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-2.1), is a ground-up redesign of ASP.NET 4 with the important design goals of being cross platform, lean, and modular. From our experience, this framework is [fast](https://www.techempower.com/benchmarks/#section=data-r16&hw=ph&test=plaintext)! The WebAPI in development is running on ASP.NET Core 2.2 preview 2. From our testing, it can handle much more throughput than the current system. A huge benefit of this framework is that developers at the AGRC can run or develop this code using [Visual Studio Code](https://code.visualstudio.com/) and [Visual Studio IDE](https://visualstudio.microsoft.com/) on Windows, Mac, and Linux. This creates a great developer experience by allowing any and all development environments. The cross platform abilities enables this project to enter the world of [Docker](https://www.docker.com/) and [Kubernetes](https://kubernetes.io/).

## <i class="fab fa-docker"></i> Containers <i class="fab fa-docker fa-flip-horizontal"></i>

Version 2 of the WebAPI is being built for containers. It will run without them, but building the correct runtime environment is much simpler using them. The system is currently comprises  four containers that will likely expand to six or more.

1. The ASP.NET Core WebAPI service
2. The ASP.NET Core developer website
3. The PostgreSQL database
4. The Redis database
5. The API Explorer website *
6. The Google sheet synchronization service *
7. The logging/reporting service (Kibana) *

_*not yet built_

ASP.NET Core runs very well in a container and will drive the WebAPI and developer websites. We chose to replace RavenDB with Postgres as the user and key store. This change is because PostgreSQL runs amazing in a Docker container for development. It isn't quite durable enough for production, but since the major cloud providers offer cloud SQL equivalents to Postgres, the WebAPI can use a managed cloud database for production.

Redis remains our choice for in-memory caching and also runs very well in a container. The main goal of using containers is that [docker compose](https://docs.docker.com/compose/) can start the entire system with **one command**. Using Docker, _anyone_ can play with the system without having to install additional software.

## <i class="fas fa-stamp"></i> Orchestration <i class="fas fa-stamp fa-flip-horizontal"></i>

Our version 2 WebAPI will run many containers at the same time, and managing how those containers work together is what Kubernetes was designed to do. Kubernetes allows AGRC to scale the WebAPI automatically or using a [CLI tool](https://kubernetes.io/docs/tasks/tools/install-kubectl/). Kubernetes will update our containers when AGRC makes changes to the code and can do so without any downtime. It can also monitor and manage the health of our containers to maintain our SLA.

To recap, AGRC is writing code and organizing it into separate containers. The containers are being managed by Kubernetes, but they still need compute infrastructure to run on, so why stop there?

We have taken it one step further with [Terraform](https://www.terraform.io/). Terraform allows AGRC to template and script the infrastructure that Kubernetes and the containers run on. To build on the magic of running the WebAPI with one command, with Terraform, we can have the WebAPI running in the Google Cloud Platform with **one command**--all of the nodes, networks, etc. We are very excited for this level of predictability and declarative configuration to run this important AGRC system.

## <i class="fas fa-search-minus"></i> The Minutia <i class="fas fa-search-minus fa-flip-horizontal"></i>

There are a few notable changes to the WebAPI source code that happened during this transition that only a software developer would appreciate.

One major improvement is the replacement of our loose [Command pattern](http://www.blackwasp.co.uk/Command.aspx) implementation for the [Mediator pattern](http://www.blackwasp.co.uk/Mediator.aspx). I have been thoroughly enjoying [Jimmy Bogard](https://github.com/jbogard)'s [MediatR](https://github.com/jbogard/MediatR) implementation since it forces you to write better code with clean separation.

Like the command pattern, testing your handlers is straightforward because of that clean separation. Another highlight of MediatR are its behaviors. Behaviors allow handlers to be be chained together to create a pipeline where they operate on the input and output of other handlers. This allows for simple extensibility without modifying the original code. Registering the behavior with your dependency injection container will make sure it is used. Read more about the mediator pattern and its benefits on this [great blog](https://www.cuttingedge.it/blogs/steven/pivot/entry.php?id=91).

Given the WebAPI's history, we were very happy to take advantage of new language features, like replacing all of the C# 5.0 [TPL](https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-parallel-library-tpl) Task continuations with async and await. We are moving away from config files for our application secrets in favor of environment variables and the [Options pattern](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-2.1). This allows for a seamless experience when running locally (with or without docker) and in Kubernetes.

Google Sheets is a lynchpin in the version 1 of the WebAPI since required data is loaded from a handful of sheets on application startup. If the Google Sheets API is unavailable, the WebAPI will be in an unhealthy state.

In new version 2, we imported a current snapshot of the sheets data into Postgres and are creating a microservice to keep the data synchronized. This way the application is guaranteed to start in a healthy state, and the semi-static reference data can be updated when it changes--either on a schedule or when notified via web hooks. This will be a major improvement over the version 1 WebAPI.

Version 1 of the WebAPI contains a canary endpoint to make sure the required services are available. ASP.NET Core makes these [health checks](https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/implement-resilient-applications/monitor-app-health) a first class feature. We can now write health checks that not only let Kubernetes and other monitoring systems know that we are in a healthy state but when things go wrong, we will know exactly what dependency is not functioning properly.

It is a great time to be a software engineer. There are so many services and software to improve our effectiveness, make us more efficient, and help us deliver a better overall experience to our users. If you have not tried any of these softwares, you should strongly consider it.

It has been a fun and exciting experience developing the next version of the WebAPI. After all, if the work you are doing isn't enticing and fun, maybe it's time to make a change.
