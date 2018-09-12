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

The current [WebAPI](https://api.mapserv.utah.gov) has been in production serving the public for many years. While it has received constant [enhancements](https://github.com/agrc/api.mapserv.utah.gov/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed+label%3Aenhancement) and [bug fixes](https://github.com/agrc/api.mapserv.utah.gov/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed+label%3Abug) during those years, there have been no breaking changes to the API nor have there been any major architectural updates; That is about to change.

While the GitHub repository has been keeping track of some of the [breaking changes](https://github.com/agrc/api.mapserv.utah.gov/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Av2.0.0) that will improve the API, the discussions about improving the architecture have all been wild empty ideas. Now that some key technologies have matured and made amazing advancements, AGRC is ready improve the WebAPI.

Work has already started on what will most likey be [version 2](https://github.com/agrc/api.mapserv.utah.gov/tree/development) of the WebAPI. We hope to replace version 1 with the same architecture without interruption.

## The History

The WebAPI proof of concept was build using [ASP.NET WCF](https://docs.microsoft.com/en-us/dotnet/framework/wcf/whats-wcf). After getting internal positive feedback (_and being use in production of course_), we wrote the version 1 software using ASP.NET WebAPI 3. ASP.NET WebAPI merged with ASP.NET MVC and we are currently running on ASP.NET MVC 5. [RavenDB](https://ravendb.net/) is the user and key store while [Redis](https://redis.io) is being used for analytics and reporting. Redis and RavenDB are both running as Windows Services while the WebAPI and Developer websites are hosted as separate sites in IIS. Supplimentary data is cached from Google Sheets to allow for easy modifications.

As you read that you might think it is hard to replicate or upgrade the system. You are very [correct](https://github.com/agrc/api.mapserv.utah.gov/wiki) and the list of instructions to follow are as frustrating as they are long.

## The Future

[ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-2.1) is a ground up redesign of ASP.NET 4 with the important design goals of being cross platform, lean, and modular. From our experience, this framework is [fast](https://www.techempower.com/benchmarks/#section=data-r16&hw=ph&test=plaintext)! The WebAPI, in development, is running on ASP.NET Core 2.2 preview 1 and from our testing, can handle much more throughput than the current system. The key benefits of this framework are that developers at AGRC can run or develop this code using [Visual Studio Code](https://code.visualstudio.com/) and [Visual Studio IDE](https://visualstudio.microsoft.com/) on Windows, Mac, and Linux. This creates a great developer experience in terms of environment and IDE freedom and the cross platform abilities enables this project to enter the world of [Docker](https://www.docker.com/) and [Kubernetes](https://kubernetes.io/).

## Containers

Version 2 of the WebAPI is built for containers. It will run without them, but it is much simpler with them. ASP.NET Core runs very well in a container. PostgreSQL runs amazing in a Docker container. We chose to replace RavenDB with Postgres as the user and key store. Since the major cloud providers offer cloud SQL equivalents to Postgres, the WebAPI can easily migrate to a cloud database. Redis is still our choice for in-memory caching and also runs very well in a container. Using [docker compose](https://docs.docker.com/compose/) the entire WebAPI can be up and running with **one command**. Anyone can play with the system without having to install _any_ additional software.

## Orchestration

 Managing Docker containers is what Kubernetes was designed to do. It allows AGRC to scale the WebAPI automatically or easily using a [CLI tool](https://kubernetes.io/docs/tasks/tools/install-kubectl/). Kubernetes will update our containers when AGRC makes changes to the code and can do so without any downtime. It can monitor and manage the health of our containers to maintain our SLA.

 So far, AGRC is writing code and organizing it into containers. The containers are being managed by Kubernetes. We have taken it one step further with [Terraform](https://www.terraform.io/). Terraform allows AGRC to script the infrastructure that Kubernetes and the containers run on. To build on the magic of running the WebAPI with one command, with Terraform, we can have the WebAPI running in the Google Cloud with **one command** -- all of the nodes, networks, etc. We are very excited for this level of predictability and declarative configuration to run this highly important AGRC service.

 ## The Minutia

 There are a few notable changes to the WebAPI souce code during this transition. A major one being the replacement of our loose [Command pattern](http://www.blackwasp.co.uk/Command.aspx) implementation for a [Mediator pattern](http://www.blackwasp.co.uk/Mediator.aspx) implimentation. I have been thouroughly enjoying [Jimmy Bogard](https://github.com/jbogard)'s [MediatR](https://github.com/jbogard/MediatR) project.
