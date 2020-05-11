---
title: 'Thoughts from Teaching Google and Amazon New Skills'
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
date: 2019-05-30 10:05:51
categories:
  - Developer
tags: []
---

Developing software for digital assistants is fun and a refreshing change from typical GIS projects. Over the past few months, AGRC was lucky enough to spend some time developing equivalent skills for Google Assistant and the Amazon Alexa. Using both platforms allowed us to see their differences very clearly. We are excited to share our opinions on the strengths of each platform. To browse the code, visit [agrc/digital-assistant-skills](https://github.com/agrc/digital-assisant-skills) on GitHub and browse the `alexa-skill` and `google-skill` branches.

## Background
{: .text-left }

In 2018 AGRC submitted a [proposal](https://github.com/agrc/digital-assisant-skills/blob/alexa-skill/docs/proposal.md) for funds from the State of Utah Technology Innovation Program (i.e., Innovation Fund) and was [awarded](https://github.com/agrc/digital-assisant-skills/blob/alexa-skill/docs/award.md) funding to experiment with digital assistants. Using GIS with digital assistants was the niche to explore, and we learned a lot more along the way.

## Getting Started
{: .text-left }

We started with the Alexa skill since we had prior [personal](https://github.com/steveoh/alexa-utah-avy-skill) [experience](https://github.com/stdavis/utah-air-quality-alexa-skill) with the ecosystem and we had a few [promotional devices](https://developer.amazon.com/en-US/alexa/alexa-skills-kit/alexa-developer-skill-promotion) that we could test with.

Getting started with Amazon was time consuming because of the enterprise and government. At that time, the partnership between the State of Utah and Amazon was very young and authentication and security systems needed to be put in place before we could begin our work. AWS and Alexa are two separate entities that cannot share credentials, so the State could not use the same account for Alexa and AWS. Restricting all of the IAM permissions for State developers to successfully deploy and debug while in an enterprise environment took some trial and error. While we waited for all of the pieces to fall into place, I used my personal Amazon account. All of the account permissions were straightforward and development progressed smoothly.

Utah is a Google Drive Enterprise customer and has been for many years. Therefore, getting started with Google Assistant was very simple. Every State employee has a Google account. All we needed was an "enterprise" project to start development so the billing was accurate. There were no delays or major hoops to jump through.

## Development
{: .text-left }
### Debug Cycle

Having a quick debug test loop is paramount to developer productivity. When developing in the cloud, this is often hindered by the time taken for deployments and the lack of access to the developer tooling we are familiar with on our machines. I chose to use Python and [Flask](http://flask.pocoo.org/) for the Alexa skill to keep a fast loop. Flask let us handle Alexa requests locally, which eliminated the need to deploy to lambda, and, thus, saved us time. This was a _huge_ productivity boost as we were able to use the Python debugger and all of the debugging tools we are familiar with. And it is pleasing to take a break from callbacks and promises once in a while.

It was a relatively simple process to make Alexa send her requests to my [local flask server](https://github.com/agrc/digital-assisant-skills#development-ceremony), which was acting as a lambda function. Using [ngrok](https://dashboard.ngrok.com/get-started) to expose my laptop as a temporary public https url that I could set on Alexa was a key piece of the puzzle. Switching between lambda and my laptop required a change to two lines of code. I created a small [CLI](https://github.com/agrc/digital-assisant-skills/tree/alexa-skill/cli) tool to make that _even_ easier.

Google Assistant leads you to Firebase functions for request fulfillment. Firebase only supports JavaScript for a node environment---so callbacks and promises it was! Thank goodness for async/await!

I never did set up a local server for Google Assistant. While the Firebase CLI is awesome and can start a local server, debugging what is going on inside that local server is **not** simple. I _could_ have set up an [Express](https://expressjs.com/) server, roughly a JS equivalent to Flask, but I chose to avoid the complexity. In hindsight, I would recommend the Express approach since (to my great frustration) I ended up `console.log` debugging in the Firebase logs.

When you sign up for Firebase functions, you are placed on the free Spark plan. If making http requests to external resources is something your skill will do, and most do, you will need to upgrade to a paid tier. You will get unhelpful `ENOTFOUND` or `Error: getaddrinfo EAI_AGAIN` JavaScript errors if you [attempt this](https://stackoverflow.com/a/50007666/352432). It is **not** straightforward. We upgraded to the Blaze plan to make requests to the [AGRC WebAPI](https://api.mapserv.utah.gov).

### Skills as Code

I think it is important to have a skills training and model details stored alongside the implementation. Alexa knocks this out of the park with its [skill.json](https://github.com/agrc/digital-assisant-skills/blob/alexa-skill/skill.template.json) and [models](https://github.com/agrc/digital-assisant-skills/blob/alexa-skill/models/en-US.json). Everything lives as text in source control. Changes to the skill and model from multiple developers are handled in a familiar fashion with tools like Git. Developers can make changes without having to visit a website and deal with UI and UX. The ASK CLI from Amazon is awesome and lets you do this and much more. You can deploy your function, update your skill and model, and test your skill from a terminal. Adding a new question and training the model is as simple as editing a json file. Sharing a demo or some code? Everything is documented as text and it's fast!

[Dialogflow](https://dialogflow.com/) is Google's machine learning natural language processing Alexa equivalent. Currently there is an API for Dialogflow but no supported clients. Everything you want to do has to go through the Dialogflow web console. The models and training are shared as zip files that you have to export and import. The content within the zip files is complicated and risky to edit by hand. I did not like having to import a zip file to look at how demo code was implemented.

### Training the Model

To train Alexa to understand what to do when questions are asked was a bit cumbersome compared to Dialogflow. We created a [website](https://agrc.github.io/digital-assisant-skills/) to generate Alexa utterances since she doesn't seem to infer a user's intent as well as Dialogflow. The website uses a special [grammar](https://github.com/agrc/digital-assisant-skills/blob/alexa-skill/cli/model.mjs) to generate all of the ways a user could phrase a question. Dialogflow required less training and gave similar results. It certainly did not require a website to generate phrases. Google is winning the natural language processing, in our opinion, and was much easier to train.

### Beyond Voice

Digital assistants without screens existed for barely one year. Skills can now play videos, show images, and present content in basic HTML-like components to complement the voice responses. Alexa has a presentation language [APL](https://developer.amazon.com/en-US/docs/alexa/alexa-presentation-language/understand-apl.html) to design for this but is _kind of_ complicated. The Google Actions SDK for nodejs contains cards, buttons, tables, images, etc. all built in to the SDK. For Google it was simple and fun to add the visual components while developing. The simulator really helped us choose the right components by rendering the markup. It would be really nice to have a sample page of how the components draw without having to "Try it and see." This was a feature the Alexa skill never received because of the APL complexity, but the Alexa simulator is also capable of displaying the visual components.

## Testing
{: .text-left }

I really enjoyed the way the ASK CLI allows you to test a skill. Talking to your skill over and over again is bad™, and typing it over and over is **worse**. The ASK CLI supports playing generated [text file recordings](https://github.com/agrc/digital-assisant-skills/blob/alexa-skill/recordings/all.template) that direct the conversation in the test. The CLI outputs the Alexa responses and you can visually approve the conversation. I could not find an equivalent in the Google Assistant simulator or actions CLI. The Google nodejs SKD does have a component called `Suggestions` that displays a suggestion chip that users can click instead of typing, and although that was an improvement, it was still not as pleasant as the recordings.

### Location

The Google Assistant and Alexa simulators are very laborsaving. They give you screens to test your conversations, view the presentation markup output, and many other features. One feature that the Alexa simulator is missing is spoofing location. You **cannot** set a location for the simulator to use. Google makes this very simple and a first-class feature on the main UI. The major difference between the two assistants, in terms of locations, is that addresses are assigned to devices in Amazon. Amazon is thinking, "Where do we ship all of your packages?" while the Google Assistant is on every Android phone and their roots are in mapping and navigation, so location is "Where are you now?"

## Resources
{: .text-left }

### Documentation

There are so many pages of documentation written for both Google Assistant and Amazon Alexa. It is a _massive_ undertaking for these companies to create and maintain the heaps of content they have produced. There are multiple versions of the same documentation for each SDK language and version and then the underlying request/response contracts if you decide to roll your own implementation. With that said, I found Alexa's documentation and demos to be more efficiently organized and current. The Alexa ecosystem seemed to be treated as one item, while Google seemed to be offering different products that worked together, so the documentation did not seem as cohesive. A lot of the demo code was on outdated versions of their SDKs.

### Real-Time Collaboration

Both digital assistants have slack channels.

- [amazonalexa.slack.com](https://amazonalexa.slack.com/)
- [googleathome.slack.com](https://googleathome.slack.com/)

The Alexa slack channel is **awesome**. There are a lot of knowledgeable people chatting about building skills. Alexa even has employees participating in the conversation. The Google channel is the opposite. A lot of questions, unfortunately, go unanswered.

Alexa also runs "[office hours](https://www.twitch.tv/amazonalexa)" on twitch. If you have never used twitch, it is becoming a valuable developer relations outreach tool. _It is not only for gaming_. Alexa developers host an hour "show" where they demonstrate new features, live code samples, and answer questions submitted by watchers. If a watcher stumps the host with a question, the developers get back to the watcher later. This is as good as it gets without pair programming with an Amazon Alexa employee.

## Wrap-Up
{: .text-left }

Developing software for digital assistants is fun. I very much enjoyed the developer experience for Alexa, but Google's natural language processing from Dialogflow required less training. I would expect the features from each company to be eventually consistent. One may have it first, but the competition will catch up and surpass. But Google Assistant and Amazon Alexa are both great tools, and I enjoyed my experience working with them.

*[AWS]: Amazon Web Services
*[IAM]: AWS Identity and Access Management
*[ASK CLI]: Alexa Skills Kit Command Line Interface
*[APL]: Alexa Presentation Language
