---
episode: 6
title: 'Episode 6 - The Utah Department of Health (covid-19 and outbreaks)'
date: 2021-11-22
audio: '/audio/Episode 6 - The Utah Department of Health (covid-19 and outbreaks).mp3'
description: 'Greg Bunce and Matt Peters interview Nancy Arbon from the Utah Public Health Laboratory and George McEwan, IT Director at the Utah Department of Health, about technology and GIS during the COVID-19 pandemic. They discuss how human relationships remained critical despite increased reliance on technology, and how the pandemic strengthened collaboration between local and state health departments. The conversation covers data standardization for aggregation, privacy and security concerns when visualizing health data, and how GIS became essential for deploying social services and testing resources across the state.'
guests: ['Nancy Arbon', 'George McEwan']
hosts: ['Greg Bunce', 'Matt Peters']
---

**Greg Bunce:** Welcome to another episode of the Utah Geospatial Podcast. This is Greg Bunce.

**Matt Peters:** And I'm Matt Peters.

**Greg Bunce:** And we're from the Utah Geospatial Resource Center. This podcast will be bringing you Geospatial news from across Utah.

Today we talk to Nancy Arbon at the Utah Public Health Laboratory and George McEwan, the IT Director at the Utah Department of Health. In this interview, we'll hear about the importance of technology during a pandemic and also the human relationships that we built and how they still play a key role.

Also how this pandemic has actually strengthened the relationships between the local and the state health departments.

And then, the importance of standardization as we bring data together and aggregate it, the importance of being on the same page with the data.

We'll also get into how GIS can be super useful in pandemics or other outbreaks, and how when we start to visualize this data, privacy and security is something that we need to be keenly aware of.

And then we'll also get into how GIS is critical when deploying social services and resources. You'll hear how we really can't do this successfully without the GIS component.

So let's jump right in.

**Matt Peters:** We're just trying to raise awareness about GIS and also understand what other agencies are doing. And since Nancy, you've been a familiar face to us for a number of years, and George, since you were the godfather, we just want to get your perspective. It's hard to get a proper perspective when you're deep in it. So by speaking with other people, we tend to have a good conversation and good learning about what others view GIS as and what uses it has in their careers.

**Greg Bunce:** I thought it could be good because I don't know you guys as well and for other folks out there, but if you don't mind doing just a really brief introduction on who you are and what you do. Maybe Nancy, you want to start it off?

**Nancy Arbon:** Sure, I'll start it off. I'm Nancy Arbon. I've worked here at the Utah Public Health Laboratory for the last 10 years. I'm the Client Services Manager, so I travel throughout the state visiting all the hospitals, all the local health departments, all the water utilities, and on and on. Anybody that needs to be tested from birth to death, I interact with it seems like.

**Greg Bunce:** So eventually Matt, you'll be interacting with.

**Nancy Arbon:** So I interacted with Matt initially to help me get a map of all the local health departments and break them apart with their county, and then add all the hospitals onto the map. They did such a great job. I used to do mapping. I used to work at a land survey business and a civil engineering firm down in Southern Arizona. My husband is a land surveyor and he has always been touting how great AGRC is to work with. So I took his advice and I went and I met with Matt and I asked him to make a map and they did a incredible job. So I've been utilizing them for various maps like uranium mines for our biomonitoring projects and what else have I done with you Matt?

**Matt Peters:** Well, recently of course, the COVID testing map with Jake.

**Nancy Arbon:** Yeah, that's the biggest one that I've been working on. I had no idea how huge that would get and how much work that would take. But Matt gave me one of his best people, Jake Adams, and he's been working so hard making sure all that information's on there. I've been just corresponding with him constantly. I think it's the most used map that DTS has, isn't it?

**Matt Peters:** If not, it's got to be very, very close.

**Greg Bunce:** I thought we could get into a little bit of that in a minute, but I wanted to jump over to George real quick and just get a quick introductory and background.

**George McEwan:** Hi, I'm George McEwan. I'm the IT Director at the Department of Health. I've been enjoying the trial and tribulations that come along with learning what your blind spots are during a pandemic with IT systems. It's been an interesting ride over the last 18, 19 months now of our pandemic era that we're in. It's been a pretty amazing time to be in public health IT and to see the struggles and the triumphs we've had.

**Greg Bunce:** Excellent, thanks. So we're providing it seems like the testing sites map. And then there's like the find a vaccine side of what you guys do on a map, and then the monitoring the cases side. I thought it'd be kind of fun to touch on all of those and how GIS is being implemented. It looks like you might be using a little bit of open source for some of the other ones. And then where we seem to be fitting in is the testing site. So maybe we could pick up where you were mentioning that that is one of the highest used maps. And and obviously there is a reason for that.

**Nancy Arbon:** It's just been such a useful tool for the citizens of Utah. Do you want me to talk about how it started?

**Greg Bunce:** Sure. Well I guess one of the things I'm curious is where does this data come from? And I guess how is the State Department of Health interacting with the local Departments of Health? And how does all that data that gets into these maps, how does that all get rolled up? Because when I look at the site, you guys have a lot of stuff on there and it's impressive. And it has to be pretty entangled on the back end and complex. So just curious how does all that roll up?

**Nancy Arbon:** It started from just all the partners that I've been visiting for 10 years when the pandemic began. Just working with our head officials, our leadership, contacting all of the various potential testing partners, asking them if they'd like to start testing and if they could be put on the map. What their hours of operation will be, what's their phone number, what's the link they need. And so it was just a matter of making constant Zoom call after Zoom call with all these various partners around the state and collecting all of that information. I run the courier services too here at the lab and so I have a lot of those contacts already. And so it was just a matter of getting everybody, setting them up with meetings and talking to them about whether or not they could start testing and getting them the supplies they needed and then listing them as a test site.

**Greg Bunce:** And is the data fairly standardized that you guys get or do you kind of have to massage it into a unified format to fit into the applications that you're showing?

**Nancy Arbon:** Yeah, so initially it wasn't. And then we quickly figured out that we needed a Google form for people to fill out and then hit all those information points that we needed that were required to be on the test site so that the public would have all the information they needed.

**Matt Peters:** You know Nancy, I don't want to jump from that too quick, but I am curious. So now that folks in your area have been exposed to kind of putting data on a map, has there been any thoughts or or chatter about, "Well, okay, we did testing sites, so what are other things that would help to have a visual representation of?" Is there any talk about those types of things?

**Nancy Arbon:** Oh gosh, yeah Matt. We had our zoonotic disease folks here and I showed them the healthcare facilities map that you guys made and they were talking about rabies and ticks and seeing where cases have occurred and mapping them out and using them in presentations. So yeah, people, when they see my map they always have questions and they want to utilize it somehow. So yeah, there's a lot of chatter.

**Matt Peters:** I guess George, that is kind of my question to you is, is each every few months it seems we get another contact at Health. And a lot of the folks of course are epidemiologists. I think we do things with the All Payers database and just a variety of geocoding going on, finding a latitude longitude for addresses. And from your perspective as the IT Director, do you feel like GIS is gaining a bigger foothold? Or it just seems like there's all these pockets, all these pockets of GIS and I feel like one day it's just going to become one giant backpack of GIS, just some explosion out of all the pockets and we're going to get a more widespread adoption. Am I just dreaming George or do you see anything of that sort?

**George McEwan:** No Matt, I agree with you. I can picture you with your GIS backpack and lederhosen ready to go. I think that there's been there's a lot of things that we learned over the pandemic that were needs and wants. And of course we've been using the API to correct the data in our managed Medicaid environment for a while, hitting that for lat-long and for Utah addresses to kind of clean up our databases. So that's been very useful but that's behind the scenes and not too visible. The visualization components of GIS are really coming into their own.

The struggle we have, and this is where sitting where I do in the Department of Health, I've really got a different set of regulations. I have state regulations and federal regulations related to the way that we use data and they are different. And that's one of our challenges in GIS in the future is making sure that as we create visualizations that have a good useful purpose inside the Department of Health, that we make sure that we're maintaining the privacy and security of the individuals that we're attempting to create these maps about. So that from the 50,000 foot GIS level, we want to be able to see like an outbreak cluster or where disparity in health care is taking place or where testing sites are lacking. There's a bunch of these items that are really useful for people going forward.

And what we're doing now is we're starting to get involved in the dialogue of, well how do you make that happen without violating any of these privacy rights and how do you take this up to a metadata level if you will so that you can meet Safe Harbor requirements and still let the department do what it needs to do. So as much as there has been an awakening to GIS and to the absolute power that it has to help us see things and correlations that we will not see just staring at a spreadsheet or a database query, we need to make sure that we continue the education process with those individuals who want to do the visualization so that they don't accidentally step over the line and put us in jeopardy either on a federal compliance level with something like HIPAA or a state level compliance with communicable disease regulations.

So if we continue to march forward, if we keep those hand in hand, I think there's going to be some more time that we need to spend with our legislators and helping them understand why these visualizations are useful and maybe get a couple more carve outs so that GIS can operate a little bit more freely inside the environment without people like me or the security officers going, "Whoa, whoa, whoa, hold on, you can't do that because now you're violating X Y and Z in state code." So if we can get some of those solved, I think we're going to have some standard dashboard GIS visualizations that are going to go on for a very long time into the future.

**Matt Peters:** Yes, I feel like that's a real key and I'm not sure what the answer is 100%, but it's to say you can use GIS, but we need a good governance structure for privacy. So people realize that this is sensitive and it cannot just be flashed out to the world. But I feel like there's got to be some guardrails that can be put in place so internally the Department of Health can gain from the visualization but not have it released.

**George McEwan:** Exactly. And I think that's going to be true of a lot of departments. As we enter this new era with the citizen portal coming online and this concept that you as the citizen are the owner of your data and you're basically lending it to us for government purposes, that there's going to be a lot more of I think citizen awareness of what we're doing with data. So yeah, governance structures are definitely going to be a big thing into the future as to how we use this data.

But you look at a term that a lot of people are hearing a lot more about disparities in health care or social determinants of health. The easiest way to see a social determinant of health is to start plotting that data on a map. And you can start to pick out neighborhoods, you can start to pick out cities, and you can drill down really quickly and see where you should be strategically deploying your resources and what communities are under vaccinated. There's just a ton of things that can be done very easily from a GIS perspective. So I'm excited about it. I really am. I think it's got the potential to help us in any future pandemic or for that matter other activities where we're working with limited state resources. It will help us quickly deploy those resources where they need to go because literally it's on the map, it's right in front of our faces.

**Matt Peters:** Yeah, the idea when you talk about social determinants of health, I'm just almost, what would you say, I'm shaken by that to think that my life is definitely affected by where I live, where I work, the people I know, the environment around me, trees in the neighborhood, all those things. It's just alarming to me to think about all the things that are beyond a person's control that really affect their lives.

**Greg Bunce:** Yeah and piggybacking on that, I'm happy to hear the way you're talking with looking at future pandemics and maybe using GIS for predictive analysis or monitoring waves or bringing it in a different angle. It seems as though this time around maybe it was used to display things, where we're at currently and where you can go and get things. But I love hearing the fact that it could potentially move to the next level. Is there any talk of that yet or are we just still just trying to get through this pandemic?

**George McEwan:** I think there's some talk of it. There obviously as a state right now we have a lot of moving parts with data center moves and moves to the cloud. So and we're dismissing a lot of technical debt that's existed inside the Department of Health and Human Services for that matter for a long time. So our plates are a bit full, but we always want to look down the road to the next thing. And as we've seen from some of the data that we've been able to plot, the social determinants are a real thing. People used to make that old adage, "Oh, depends on whether you live on the right side of the tracks or not." Well, that's not a joke. That's a truism. And it does have a long lasting impact.

So whether it's a pandemic or not, when we talk about any kind of social services that are being provided by the government, there is I think a real case for using GIS to help figure out where the problem spots are and where people need help. Because we all anecdotedly look at news and we synthesize our own viewpoint of the world. And in some cases that viewpoint when challenged with the actual data, what you thought you knew and what is actually true is completely different. And so I think as we have a fiduciary responsibility to the taxpayers to deploy social services resources correctly, I don't know that we can do it successfully without a good GIS component in there. I think that's going to be critical going forward.

**Matt Peters:** Yeah and I think that kind of brings me back to Nancy. And with you being the Public Health Lab, if in the future if we're mapping some of your various clusters of outbreaks of various things or existence of various things, if that will help better in a response or looking at what do they say, other factors that influence what you're seeing. I don't know how what your abilities are Nancy now for kind of multivariate analysis.

**Nancy Arbon:** Yeah, I'm sure it will be helpful in the future. The lab plays an interesting role because we depend heavily on the epidemiologists to kind of give us that information and figure out where to test and then we do the testing part. So we have to do it with all of the health department. We're not separate from them. We rely on them quite a bit for that data.

**Greg Bunce:** Kind of going back to your idea with the relationships. It sounds like over time you've built relationships even with the local health departments and I would imagine in this type of a situation you have benefited greatly for having those. In addition to that is, what is that relationship like with the state and the local health departments? And kind of how do you define the different roles between the two?

**Nancy Arbon:** I feel like our relationship as a lab has been really really positive because they're looking to us to do a test. So we're not requiring that they do the test. It's more the State Health Department. And the locals, they have more interactions that are different than the lab. It seems like our relationships are really positive throughout the state because we're there for them whenever they need a test done. So I'm not sure with the State Health Department and the locals what that relationship is like, but I've in my traveling it's always seemed really positive and there's a lot of turnover and stuff so it changes and modifies through the years, but it's been pretty positive.

**Matt Peters:** I think like you, GIS in the state of Utah is very much driven or enabled by personal relationships and by us as the Utah Geospatial Resource Center staff getting out and visiting people or contacting them on the phone during the pandemic. But definitely it's all about relationships.

**Nancy Arbon:** Agreed. There's some test sites that have told me they don't talk to anyone in Salt Lake except for me. So there's just a lot of old relationships that I engaged with to get people to test and to get those samples sent and it was really important, really crucial in Utah.
