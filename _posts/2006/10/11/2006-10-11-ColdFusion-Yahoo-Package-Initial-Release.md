---
layout: post
title: "ColdFusion Yahoo Package - Initial Release"
date: "2006-10-11T11:10:00+06:00"
categories: ColdFusion 
tags: 
---

Ok, "ColdFusion Yahoo Package" is kind of a dumb name, but I'm sharing my initial release of the API I've built for Yahoo's various web services. Right now I only support Search and Answers. Here is an example of using the Search API:

<code>
&lt;cfset searchAPI = createObject("component", "org.camden.yahoo.search")&gt;

&lt;cfinvoke component="#searchAPI#" method="search" returnVariable="result"&gt;
	&lt;cfinvokeargument name="query" value="coldfusion blog"&gt;
&lt;/cfinvoke&gt;

&lt;cfdump var="#result#" label="Search for 'coldfusion blog'"&gt;
</code>

And here is an example that searches for resolved questions about ColdFusion:

<code>
&lt;cfset answerAPI = createObject("component", "org.camden.yahoo.answers")&gt;

&lt;cfinvoke component="#answerAPI#" method="questionSearch" returnVariable="result"&gt;
	&lt;cfinvokeargument name="query" value="coldfusion"&gt;
	&lt;cfinvokeargument name="type" value="resolved"&gt;
&lt;/cfinvoke&gt;

&lt;cfdump var="#result#" label="Question search for 'coldfusion', type=resolved"&gt;
</code>

This code is <b>not</b> heavily tested, nor did I include a license just yet (it will be the same license as the rest of my code). The idea though is to create a very simple API for your ColdFusion applications to work with Yahoo. Feedback is appreciated.<p><a href='enclosures/D%3A%5Cwebsites%5Cdev%2Ecamdenfamily%2Ecom%5Cenclosures%2Fyahoo%2Ezip'>Download attached file.</a></p>