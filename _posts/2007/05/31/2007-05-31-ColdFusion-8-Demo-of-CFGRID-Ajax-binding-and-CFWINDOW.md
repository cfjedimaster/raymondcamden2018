---
layout: post
title: "ColdFusion 8: Demo of CFGRID, Ajax binding, and CFWINDOW"
date: "2007-05-31T11:05:00+06:00"
categories: ColdFusion 
tags: 
---

<img src="http://ray.camdenfamily.com/images/traffic_thumb.jpg" align="left" hspace="10"> 
So I plan to spend time later on talking more about the Ajax work in ColdFusion 8, but I thought I'd share a demo I whipped up for Ben a few weeks back. This demo integrates with Yahoo's Traffic service using my <a href="http://cfyahoo.riaforge.org">CFYahoo</a> library. Simply enter a zip, hit Go, and the grid will populate with traffic data. When you select a row, I then use a map to show you information about the traffic hot spot. 

All of the "magic" can be seen in one line:

<code>
&lt;cfinput type="text" name="zip" /&gt;

&lt;cfgrid name="reportsGrid" format="html" pageSize="5" stripeRows="true" 			bind="cfc:yahooProxy.getTraffic({cfgridpage},{cfgridpagesize},{cfgridsortcolumn},{cfgridsortdirection},{zip})"&gt;
</code>

The bind attribute tells ColdFusion to speak to my CFC and use the results for the data. 


The code is available below. To run this, be sure to download  the CFYahoo package first. And yes - I <b>was</b> trying to be artsy with my design here. Normally I'm not allowed to design anything. ;)

And yes - I hope to have everything up and running on CF8 here soon.<p><a href='enclosures/D%3A%5Cwebsites%5Cdev%2Ecamdenfamily%2Ecom%5Cenclosures%2Ftraffic1%2Ezip'>Download attached file.</a></p>