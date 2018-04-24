---
layout: post
title: "Yet one more YQL demo - Term extraction from CFBloggers"
date: "2010-08-11T16:08:00+06:00"
categories: ColdFusion 
tags: 
---

I continue to be amazed at just how kick ass YQL (<a href="http://developer.yahoo.com/yql/">Yahoo Query Language</a>) is for building mashups. I think it is one of the most innovative things I've seen on the Net in years. Earlier this week I was directed to the <a href="http://isithackday.com/rockyourdata/">Rock Your Data</a> YQL demos. Each shows a pretty darn cool example of what can be done with the technology.
<!--more-->
<p>

In my mind, the best example was the <a href="http://isithackday.com/rockyourdata/index.php?id=2">term extraction</a> example. At some point YQL added support for retrieving important terms from filtered data. Consider the author's example:

<p>

<code>
select * from search.termextract where context in (select content from html where url="http://cnn.com" and xpath="//a") | unique(field="Result")
</code>

<p>

That's about as simple as you can make it. I decided to quickly test this against <a href="http://www.cfbloggers.org">CFBloggers</a>. I modified the URL to point directly to the content and to pass along a request setting to get 100 items:

<p>

<code>
select * from search.termextract where context in (select content from html where url="http://coldfusionbloggers.org/content.cfm?perpage=50" and xpath="//a[starts-with(@href,'click.cfm')]")  | unique(field="Result")
</code>

<p>

Once I had that, I then simply wrote a quick parser. I decided to go full bore and turn the results into a tag cloud. (This <a href="http://twitter.com/donohoe/status/20898948304">tweet</a> was my inspiration.) Pete Freitag has a good blog post on this: <a href="http://www.petefreitag.com/item/396.cfm">How to make a tag cloud</a>. The final result can be found below. Before dumping all the code, here is the result:

<p>

<img src="https://static.raymondcamden.com/images/shot1.PNG" />

<p>

<i>Quick Note - I added some spaces to the URL in the first line so that it would wrap better on my blog. Remove before using.</i>

<p>

<code>
&lt;cfset yql = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20search.termextract%20 where%20context%20in%20(select%20content%20from%20html%20 where%20url%3D%22http%3A%2F%2Fcoldfusionbloggers.org%2Fcontent.cfm%3Fperpage%3D100%22%20and%20xpath%3D%22%2F%2Fa%5Bstarts-with (%40href%2C'click.cfm')%5D%22)%20%20%7C%20unique(field%3D%22Result%22)& diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"&gt;
&lt;cfhttp url="#yql#" result="yqlhttp"&gt;
&lt;cfset data = xmlParse(yqlhttp.filecontent)&gt;

&lt;cfset termData = queryNew("word,count")&gt;
&lt;cfloop index="result" array="#data.query.results.result#"&gt;
	&lt;cfset word = result.xmltext&gt;
	&lt;cfset count = result['yahoo:repeatcount'].xmlText&gt;
	&lt;cfset queryAddRow(termData)&gt;
	&lt;cfset querySetCell(termData, "word", word)&gt;
	&lt;cfset querySetCell(termData, "count", count)&gt;		
&lt;/cfloop&gt;

&lt;cfset tagValueArray = ListToArray(ValueList(termData.count))&gt;
&lt;cfset max = ArrayMax(tagValueArray)&gt;
&lt;cfset min = ArrayMin(tagValueArray)&gt;
&lt;cfset diff = max - min&gt;
&lt;cfset distribution = diff / 3&gt;

&lt;style&gt;
.smallestTag { font-size: xx-small; }
.smallTag { font-size: small; }
.mediumTag { font-size: medium; }
.largeTag { font-size: large; }
.largestTag { font-size: xx-large; } 
&lt;/style&gt;
&lt;cfoutput query="termData"&gt;
	&lt;cfif count EQ min&gt;
		&lt;cfset class="smallestTag"&gt;
	&lt;cfelseif count EQ max&gt;
		&lt;cfset class="largestTag"&gt;
	&lt;cfelseif count GT (min + (distribution*2))&gt;
		&lt;cfset class="largeTag"&gt;
	&lt;cfelseif count GT (min + distribution)&gt;
		&lt;cfset class="mediumTag"&gt;
	&lt;cfelse&gt;
		&lt;cfset class="smallTag"&gt;
	&lt;/cfif&gt;
	&lt;b class="#class#"&gt;#word#&lt;/b&gt;
&lt;/cfoutput&gt;
</code>