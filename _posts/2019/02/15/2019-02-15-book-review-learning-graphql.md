---
layout: post
title: "Book Review: Learning GraphQL"
date: "2019-02-15"
categories: ["Books","Development"]
tags: ["graphql"]
published: false
banner_image: /images/banners/welcome2018.jpg
permalink: /2019/02/15/book-review-learning-graphql
---

Over the past week or so I've been spending time learning what I can about GraphQL. I've already attended a few conference
sessions on the topic and had a basic understanding of what it was, but I wanted to really begin cementing my knowledge
of the topic in preparation for some things we're doing at work. Randomly I saw a mention of ["Learning GraphQL"](http://shop.oreilly.com/product/0636920137269.do) via Twitter so I decided to give it a read. The book is a bit below two hundred pages so it can be comfortably read rather quickly, but packs a lot of material. I'll go into detail below but the gist is that I definitely recommend it and I'll be purchasing a hard copy to keep at my desk for the next few months.

As I said, the book clocks in at right below two hundred pages (198) and consists of the following sections:

* "Welcome to GraphQL" provides a great introduction to the "why" of GraphQL. As I said, I already had a good understanding of the why but this section is really well done and could be a great way to convince management of why it should be adopted. Even if you've already sat in a few intro sessions, I'd suggest reading this piece just to cement in the principles.

* "Graph Theory" covers some of the academic aspects behind GraphQL and I have to be honest - I was going to skip this section. I'm really glad I didn't. It provided a great background to the concept of graphs and some fascinating historical background. I appreciated how many of the examples were tied to existing social networks and apps which really helped them make sense. I can't tell you how many times I've object orientation-related books use examples that have no correlation to practical development, so the use of existing samples in the wild really helped it sink in.

* "The GraphQL Query Language" goes really deep into the syntax of GraphQL and even though I've seen a lot of this before, I learned quite a bit and came out even more impressed about the power of GraphQL. As I said, I've sat in presentations on GraphQL before and I totally get that you can only cover so much, but I was really surprised by some of the more advanced aspects of the query language. 

* "Designing a Schema" acts a good flip side to the previous section. It describes how you define the schema that will then work the query language. As with the previous section, I'd seen parts of this before, but seeing how deep you could go was eye opening. Basically this section and the previous one turned me from "Yeah, GraphQL looks neat" to a "I never want to use REST again" kool-aid drinker. 

* "Creating a GraphQL API" walks you through building a real, if simple, application. In general, this section was really well done. I was able to follow along for about 75% of the chapter building the application along with the text. At some point though it became harder to do so. To be clear, there is a GitHub repo with the complete code for every section that you can grab at any time. Also, I don't know if the intent was for the reader to actually build the app while reading. But I'm a big believer in typing in code as a way to help me learn and it feels like the authors could have done just a bit more work to enable that. Despite my issues, I did like the fact that the chapter ended with how to add login and authorization to the app, something I had not seen with GraphQL before. 

Another issue I had with this chapter is that is something that won't necessarily make sense if you don't know GraphQL. 

* "GraphQL Clients" goes into detail on integrating with GraphQL APIs. It covers everything from pure cUrl calls to good Node libraries and front-end utilities. The example here is React-based so I didn't try building it myself, but I plan on looking at Vue support soon.

* "GraphQL in the Real World" covers subscriptions - a way to use websockets to listen to data changes, and then goes into some great topics like file uploads, security, and performance. I had never seen these topics before (again, you only have so much time in a conference presentation) and the book did a great job of introducing them.
















"Learning GraphQL" is written by Alex Banks and Eve Porcello. 
