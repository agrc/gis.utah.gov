---
episode: 2
title: 'Episode 2 - Buck Ehler at the Utah Department of Natural Resources'
date: 2021-04-30
audio: '/audio/Episode 2 -  Buck Ehler at the Utah Department of Natural Resources.mp3'
description: "Greg Bunce and Matt Peters interview Buck Ehler, GIS Manager at Utah's Division of Wildlife Resources, who shares his journey from learning GIS on ArcInfo Workstation at Utah State to managing geospatial operations across a 500+ person organization. Buck introduces the Wildlife Migration Initiative, tracking 26-27 million location points from collared animals across dozens of species using satellite networks and Google Cloud Platform. The program uses BigQuery and Wildlife Tracker 2.0 to help biologists visualize and analyze animal movement patterns in real-time."
guests: ['Buck Ehler']
hosts: ['Greg Bunce', 'Matt Peters']
---

**Greg Bunce:** Welcome to another episode of the Utah Geospatial Podcast. This is Greg Bunce.

**Matt Peters:** And I'm Matt Peters.

**Greg Bunce:** And we're from the Utah Geospatial Resource Center. This podcast will be bringing you Geospatial news from across Utah.

**Matt Peters:** I hope you're enjoying the podcast. This is our second podcast and we're going to separate things out a bit. We're going to have what we term a Survey Corner that's going to be in, we haven't decided how many podcasts in a row. We also have guests. We're going to be doing interviews. And in fact today we have an interview with one of our colleagues, Buck Ehler.

So Buck, part of our focus was just in all the knowledge that there is in Utah about geospatial and about all the people that have been involved for many, many years at many, many levels. So that's why we wanted to get you on today was to learn more about what you know.

Buck, I know we want to have you do a little introduction, but also tell us about how you got into GIS.

**Buck Ehler:** Cool. I will. Thank you very much for having me on the show. It's an honor. I am blessed to have GIS as part of my life and my career. I'm a Utah native from the great land of Emery County. Grew up in the small town of Elmo where I got to do a lot of outdoors stuff. Got a love for outdoors and when I went to school I started off in electrical engineering and electronics and it really I hated it. I was really struggling and a friend said, "You know Buck, there's this thing called GIS and Geography." And I didn't even know it existed. He told me about it and I don't remember how long it was, but I was in the Geography Department's advisor's office changing my major to Geography and GIS.

It changed my life, my grades did a 180. I was getting straight A's. I just loved the work. I loved the concept. I loved the tie between outdoors, nature, the environment, and data, technology, electronics. It was really powerful for me and it was one of the best things that happened to me in my life.

**Greg Bunce:** Around what year was this? Was this at the University of Utah?

**Buck Ehler:** This was at Utah State. I think it was probably 2000, 2001. I've been around for a while.

**Greg Bunce:** So like ArcView going to ArcGIS Desktop?

**Buck Ehler:** Yeah. I learned in ArcInfo Workstation on the Unix boxes and ArcView 3 and all of that. I remember going to the labs in the Geology Department and opening up ArcMap and I'm like, "I don't even know what it was." Nobody had told me before. So I kind of had to learn that after learning the old school stuff.

**Greg Bunce:** I remember when desktop first came out. Trying to move from ArcView 3.2 into that. Sounds like you came in a little earlier than me, essentially in that transition time.

**Buck Ehler:** It was different. I was looking for the command line and I could not find it. Took me a while.

**Greg Bunce:** So from there did you get straight into DWR? Or how did that all play out?

**Buck Ehler:** I took a geomorphology class and I really fell in love with geology after I fell in love with geography. Ended up doing some undergraduate research in the Geology Department and learned a lot more GIS there. Then as after I graduated I had some good connections and my professor helped connect me to a part-time opportunity at the Utah Geological Survey. I actually ended up being more of a geologist for my first three months. Then that temporary opportunity, the field season was over, so I was done with the field work and they wanted to keep me around. I helped build geologic maps. And that eventually turned into my full-time job where I helped build geologic maps at the Utah Geological Survey for eight years. That was an awesome job. I really really enjoyed that and I got to be really creative in building those maps and the data behind them. Got to also learn a lot of geology and learn the geology across the state. Even though I'm not a true geologist, I really got to learn a lot about it by building the maps through GIS. Learned a lot about topology and the way you can make maps look better through detailed cartography and building databases with them. It was a really cool job and I wish I could do it still but I moved on.

**Greg Bunce:** Interesting that you say maps and cartography with the UGS because I still, when I think of UGS or geologic maps, I think of a printed product or cartography still. And UGS is also under DNR right?

**Buck Ehler:** Yes.

**Matt Peters:** You know Greg, one thing you may not know, the tidbit I believe that we're speaking with Buck, the Iron Cartographer.

**Buck Ehler:** Yep. I've been in a few Iron Cartographer competitions. Brandon Plewe and I, it was his idea but we were the first competition. And I've done it a few other times at UGIC and it's always always fun.

**Greg Bunce:** It's a UGIC tradition, right? To do this each conference?

**Buck Ehler:** Yep.

**Greg Bunce:** Maybe you can explain the seven or whatever divisions of DNR. Are they divisions? How does that work out?

**Buck Ehler:** Yeah, they're seven divisions in DNR. I always the way I remember is the Seven Dwarves, just cause it's the same number. But there's Wildlife, Parks... Well you know what? We're a little like you guys and we're in flux right now. Our Parks and Recreation Division was split, kind of like your name was changed this year. Parks has split and Recreation became separate divisions. So maybe now it's eight.

I'm in Wildlife Resources. We have Oil, Gas and Mining, Utah Geological Survey, Forestry, Fire and State Lands, Water Rights, and Water Resources. And I said Parks and Recreation. I think that covers them all. I usually go through the building spatially and think of where they all are and check them off.

**Matt Peters:** That's what GIS does to you. Ruins your mind. So, speaking of DWR, you're now your spot. What are the big challenges there? Or what how have you overcome some of those challenges? Or have you got some unique solutions? Or what's up over there?

**Buck Ehler:** We're doing some cool things. I've actually only been at DWR for a little over a year. I started in January 2020. I worked at Forestry, Fire and State Lands between UGS and DWR as the GIS and IT manager there. But at DWR, it's really been a cool transition for me. One of the biggest things that has been a challenge for me is just the sheer size of the organization and our stretch across the entire state of Utah. We've got offices from Logan down to Washington County, all over the place. My other divisions, UGS and Forestry, were 100-ish or so, maybe less maybe more, but we're over 500 staff. And so there's a lot going on. It's a much bigger organization and there are a lot of opportunities that we just can't jump on. We can't capitalize on. So that that's one of the challenges I think is just the missed opportunities that are out there. There's so much we can do with wildlife but we can only focus on so many things at a time. We only have so much capacity. And I'm trying to help us build more capacity, do things more efficiently so we can stay with the same staffing levels we have or not have to add as much or whatever, but still be able to take advantage of the cool opportunities that are out there.

**Greg Bunce:** With GIS staff, is there a decent amount of GIS staff there?

**Buck Ehler:** We have seven full-time GIS staff and a lot of people that do it for part of their job is a biologist. Some that are doing it quite a bit and some that maybe pick it up once a year, once in a while. And so there's just so many levels of skill sets and needs and kind of coordinating that and figuring out what's best and helping. If one person goes builds an app for their region but it could be used for the whole state, we don't want to lose that work that they did or we don't want one region building one app to collect information and another region build the same app and duplicate efforts. So there's lots of things like that that I worry about, but there is just a lot of opportunities.

**Greg Bunce:** And I think I always think of your guys' world over there as you have some folks out in the field as well. Is that true?

**Buck Ehler:** Not so much on the GIS side but I mean, I don't know, but a lot of our staff are out almost every day. Our biologists are out in the field all the time, sometimes weeks at a time.

**Greg Bunce:** Well it sounds like an interesting spot to be in. It's kind of nice hearing your perspective on the diversity over there of folks using it here and there, some folks using it all the time, GIS. So thanks for filling us in on a lot of that.

**Buck Ehler:** Yeah. There is some really cool stuff we're doing with our Wildlife Migration Initiative that I wanted to highlight. That is a really cool program and I'm really lucky to be coming into the division at the time I came in. It's a newer initiative at DWR to document, preserve, and enhance wildlife movement for all the species throughout Utah using tracking and data management technologies. So if you see a collar on a mule deer or a bison or a moose or an elk out there, that's one of our collars and it's sending its location up to a satellite and back to a database every two to four hours, whatever frequency we set it at. And that is bringing us in a wealth of biological information that we've never had before. We actually can know where animals are going, see what they're doing, and gain insights into their movement. And it's really opened up our world of big data.

**Greg Bunce:** Yeah, that's pretty cool. Do you know what satellites you guys are using? Or how does that work?

**Buck Ehler:** We're using a couple. One that comes to mind is the Iridium network. And it's not always satellites, sometimes it's local telemetry or cell networks. But the thing I really want to highlight is is that we have at this point we have about 26, 27 million locations of animals across Utah. And we can we've been using we've just moved into the Google Cloud Platform world and the BigQuery. And we did a big project that we call Wildlife Tracker 2.0 where we can take those 27 million data points and query those. Any of our biologists can do this. And then see the hotspots of where those queried animals are. We probably have at least a dozen species. Playback their movements. Look at trends. Look at times. Bring in lots of different reference layers. And we're moving into that big data world and looking to use more BigQuery tools and Google Cloud Platform tools to meet some of our needs that have been really challenging with traditional infrastructure. So that is something that I'm really excited about and moving more of our GIS in that direction is going to allow us to visualize our data a lot better, share it easier, and gain more value and insights from this tremendously valuable data that we've collected.

**Greg Bunce:** Yeah, so much more so many more options in the cloud. Is the data available for folks to check out publicly? Or is this just internal stuff? Or what's publicly facing that folks can check out?

**Buck Ehler:** If they go to wildlifemigration.utah.gov, they can see how many animals we have tracked, how many locations we're tracking. They can look at some of the stories that we're able to tell. There's some YouTube videos on there, some story maps. And learn more about the migration initiative. But that data is protected and we typically need a data sharing agreement or they need to work with DWR to access it because it puts the species at risk.

**Greg Bunce:** But maybe some of the story maps are publicly available.

**Buck Ehler:** Yeah, everything on the Wildlife Migration Initiative site is publicly available.

**Greg Bunce:** And I'll put a link to that in the show notes. Anything else you want to share?

**Buck Ehler:** You know I really wanted to highlight that migration initiative. That was a big thing. We touched on a few of the challenges and solutions, but those are just a few. There's a lot of things going on at DWR that that we're working through. And I see most challenges as opportunities, but where we're missing opportunities that's definitely a challenge.

**Greg Bunce:** Yeah, it's a good way to look at it. Well again, definitely want to thank you for taking the time to chat with us. And again just hearing from folks around the state, much like yourself, I think there's a lot of value in that. So thank you.

**Buck Ehler:** Thank you. It's good to be here.

**Matt Peters:** Yep. Thanks a bunch for your time.

**Buck Ehler:** Yeah, you guys have a great day.

**Matt Peters:** So today was great to hear from Buck. You know, longtime user of GIS. And we look forward to other people in the near future. We hope to reach out to some of you, put you on the spot. Kate Staley, get your notes ready. We're coming after you. And there's a variety of other people in Air Quality. Just there's so many folks in Utah to speak with. It's just amazing. And I think that's what makes it so fun here is when we all get together at the UGIC conference. So many people to talk with, so many good conversations. So glad we had Buck on and look forward to others in the future. Thanks for your time.
