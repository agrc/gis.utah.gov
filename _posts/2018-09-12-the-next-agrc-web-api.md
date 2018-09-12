---
title: 'The Next AGRC WebAPI'
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
date: 2018-09-12 00:12:00
categories:
  - Featured
  - Developer
tags:
  - webapi
---

The current [WebAPI](https://api.mapserv.utah.gov) has been in production serving the public for many years. It receives many million requests for spatial information every month and has been free to use with a simple to create API key. While it has received constant [enhancements](https://github.com/agrc/api.mapserv.utah.gov/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed+label%3Aenhancement) and [bug fixes](https://github.com/agrc/api.mapserv.utah.gov/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed+label%3Abug) during those years, there have been no breaking changes to the API nor have there been any major architectural updates; That is about to change with a major update currently in the works.

While the WebAPI GitHub repository has tracked our ideas for breaking changes that would be necessary improve the API, those discussions have not been backed by concrete efforts until now. Implementing our ideas is possible because key technologies have made amazing advancements while others have matured. AGRC is ready to combine our ideas with new technologies to make the WebAPI even better.

Work has already started on what will most likely be [version 2](https://github.com/agrc/api.mapserv.utah.gov/tree/development) of the WebAPI. We hope to replace version 1 with the same architecture without interruption.

## The History

The original WebAPI proof of concept was built using [ASP.NET WCF](https://docs.microsoft.com/en-us/dotnet/framework/wcf/whats-wcf). After getting internal positive feedback (_and being used in production of course_), we wrote version 1 of the WebAPI using ASP.NET WebAPI 3. The ASP.NET WebAPI then merged with ASP.NET MVC and we are currently running our API code on ASP.NET MVC 5. [RavenDB](https://ravendb.net/) stores user and key data while [Redis](https://redis.io) is being used for analytics and reporting. Redis and RavenDB are both running as Windows Services while the WebAPI and Developer websites are hosted as separate sites in IIS. Supplemental data is cached from storage in Google Sheets, which allows for easy modifications to that data.

As you read this, you might think it is hard to replicate or upgrade the entire WebAPI system and you are very [correct](https://github.com/agrc/api.mapserv.utah.gov/wiki). The list of installation instructions and documentation for the version 1 WebAPI system are as frustrating as they are long.

## The Future

The new framework we plan to use, [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-2.1), is a ground up redesign of ASP.NET 4 with important design goals of being cross platform, lean, and modular. From our experience, this framework is [fast](https://www.techempower.com/benchmarks/#section=data-r16&hw=ph&test=plaintext)! The WebAPI, in development, is running on ASP.NET Core 2.2 preview 1 and from our testing, can handle much more throughput than the current system. The key benefits of this framework are that developers at the AGRC can run or develop this code using [Visual Studio Code](https://code.visualstudio.com/) and [Visual Studio IDE](https://visualstudio.microsoft.com/) on Windows, Mac, and Linux. This creates a great developer experience in terms of environment and IDE freedom and the cross platform abilities enables this project to enter the world of [Docker](https://www.docker.com/) and [Kubernetes](https://kubernetes.io/).

## Containers

Version 2 of the WebAPI is built for containers. It will run without containers, but building the correct runtime environment is much simpler with them. ASP.NET Core runs very well in a container. We chose to replace RavenDB with Postgres as the user and key store. This was a great change because PostgreSQL runs amazing in a Docker container for development, but more work is needed to make it durable for production. Since the major cloud providers offer cloud SQL equivalents to Postgres, the WebAPI can easily migrate to a managed cloud database. Redis is still our choice for in-memory caching and it also runs very well in a container. Using [docker compose](https://docs.docker.com/compose/) the entire WebAPI can be up and running with **one command**. Using Docker, anyone can play with the system without having to install _any_ additional software.

## Orchestration

 Our version 2 WebAPI will run many containers at the same time and managing how those containers work together is what Kubernetes was designed to do. It allows AGRC to scale the WebAPI automatically or easily using a [CLI tool](https://kubernetes.io/docs/tasks/tools/install-kubectl/). Kubernetes will update our containers when AGRC makes changes to the code and can do so without any downtime. It can also monitor and manage the health of our containers to maintain our SLA.

To recap, AGRC is writing code and organizing it into separate containers. The containers are being managed by Kubernetes, but they still need compute infrastructure to run on, so why stop there! We have taken it one step further with [Terraform](https://www.terraform.io/). Terraform allows AGRC to template and script the infrastructure that Kubernetes and the containers run on. To build on the magic of running the WebAPI with one command, with Terraform, we can have the WebAPI running in Google Cloud Platform with **one command** -- all of the nodes, networks, etc. We are very excited for this level of predictability and declarative configuration to run this highly important AGRC system.

 ## The Minutia

 There are a few notable changes to the WebAPI source code that happened during this transition that only a software developer would appreciate. One major improvement is the replacement of our loose [Command pattern](http://www.blackwasp.co.uk/Command.aspx) implementation for the [Mediator pattern](http://www.blackwasp.co.uk/Mediator.aspx). I have been thouroughly enjoying [Jimmy Bogard](https://github.com/jbogard)'s [MediatR](https://github.com/jbogard/MediatR) project as it forces you to write better code with clean separation. Like the command pattern, testing your handlers is very easy because of that clean separation. Another hightlight of MediatR are its' behaviors, where handlers can be chained together to create a pipeline where they operate on the input or result of another handler. This allows for simple extensibility without modifying the original code. Registering the behavior with your dependency injection container will make sure it is used.

 Given the WebAPI's history, we were very happy to take advantage of some new language features, like replacing all of the C# 5.0 [TPL](https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-parallel-library-tpl) Task continuations with async and await. We are also moving away from config files for our application secrets in favor of environment variables and the [Options pattern](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-2.1). This allows for a seemless experience when running locally (with or without docker) and in Kubernetes.

 Google Sheets is playing a lynchpin role in the version 1 of the WebAPI as required reference data is loaded from a handful of sheets on application startup. If the Google Sheets API is unavailable, the WebAPI will be in an unhealthy state. In new version 2, we imported a current snapshot of the Sheets data into Postgres and are creating a microservice to keep the data synchronized. This way the application will always start in a healthy state, and the semistatic reference data can be updated when it changes either on a schedule or when notified of changes via web hooks. This will be a major improvement over the version 1 WebAPI.

 Version 1 of the WebAPI contains a canary endpoint to make sure the required services are available. ASP.NET Core makes these [health checks](https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/implement-resilient-applications/monitor-app-health) a first class feature. We can now write health checks that not only let Kubernetes know that we are in a healthy state but when things go wrong, we will know exactly what dependency is not functioning properly.

 It is a great time to be a software engineer. There are so many services and software to improve our effectiveness, make us more efficient and help us deliver a better overall experience to our users. If you have not tried any of these softwares, you should strongly consider it. It has been a fun and exciting experience developing the next version of the WebAPI. After all, if the work you are doing isn't enticing and fun, maybe it's time to make a change.
