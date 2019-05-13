---
layout: post
title: "Building a Plex Server Duration Search with Vue.js"
date: "2019-05-11"
categories: ["JavaScript"]
tags: ["vuejs"]
banner_image: /images/banners/welcome2018.jpg
permalink: /2019/05/11/building-a-plex-server-duration-search-with-vuejs
description: Using the Plex API and a Vue.js front-end to search movies by duration
published: false
---

A few days ago a good friend asked me a question about [Plex](https://www.plex.tv/). If you've never heard of it, Plex is an *awesome* media server that creates an easy to use UI for media (videos, music files, pictures, etc.). It's very popular and you can use it via the web, mobile devices, and smart TVs. It's relatively easy to use and you can share your (legally acquired of course) content with friends. My friend mentioned that it would be cool if Plex had a way to find a movie of a particular length. In this case, dinner was in an hour or so and it would be neat to find something of that particular length. Plex lets you sort by duration but you can't filter to a particular length (or range of lengths).

So of course I took this simple request and spent numerous hours building a demo that was *way* overengineered but fun to build. It also gave me an opportunity to play with a "proper" Vue.js application. If you've read this blog you'll note that 99% of what I build with Vue.js is on the simpler side, just a script tag and some basic code. I rarely actually play with full Vue.js apps and I really wanted the chance to. I also wanted to use [CodeSandbox](https://codesandbox.io/) more, and that worked *incredibly* well for this project. When I finished, I clicked a button, and my site was published to [Netlify](https://www.netlify.com/) in about two minutes. 

Let me begin by showing the final result. I don't plan on sharing the URL, but you can view the repository here: <https://github.com/cfjedimaster/plex-movie-duration-search/tree/master/>

The application begins with a simple signin form:

<img src="https://static.raymondcamden.com/images/2019/05/plex1.png" class="imgborder imgcenter" alt="Login screen for application">

After a successful login, you then enter your server address.

<img src="https://static.raymondcamden.com/images/2019/05/plex2.png" class="imgborder imgcenter" alt="Entering server information.">

At this point, the application will hit your server, load information on *all* your movies, and present them with a UI control on top to allow filtering to a range of movies.

<img src="https://static.raymondcamden.com/images/2019/05/plex3.png" class="imgborder imgcenter" alt="Initial list of movies">

It isn't terribly obvious because the movie posters are big, but that's a scrollable list of all the movies available on the server. If you filter, the list automatically updates.

<img src="https://static.raymondcamden.com/images/2019/05/plex4.png" class="imgborder imgcenter" alt="Movies shown are now filtered to a specific duration.">

Alright, so let's talk about how I built this.

### The Plex "API"

So this was a bit interesting. Plex does have an API documented here: [Plex Media Server URL Commands](https://support.plex.tv/articles/201638786-plex-media-server-url-commands/). Notice they call this "URL Commands" and not an API. It begins by documenting how to get an authentication token. This is a simple POST hit to the main Plex server that returns a large set of user data where the only thing you'll need to care about is the `authentication_token`. 

After that, the remaining API calls go against your own server. API calls allow for getting your libraries, listing library content, and getting specifics for an item. You can also request Plex to scan and refresh a library. 