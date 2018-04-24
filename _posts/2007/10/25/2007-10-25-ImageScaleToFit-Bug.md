---
layout: post
title: "ImageScaleToFit Bug"
date: "2007-10-25T11:10:00+06:00"
categories: ColdFusion 
tags: 
---

I just ran into an interesting imageScaleToFit bug. I was writing some code to handle scaling an uploaded image when I got this error:

<blockquote>
For gray scale images the interpolation argument must be one of: NEAREST | BILINEAR | BICUBIC | HIGHESTQUALITY | HIGHQUALITY | MEDIUMQUALITY | HIGHESTPERFORMANCE | HIGHPERFORMANCE | MEDIUMPERFORMANCE
</blockquote>

According to the <a href="http://www.cfquickdocs.com/cf8/?getDoc=ImageScaleToFit">docs</a>, the default interpolation is highestQuality so I don't quite get what CF is thinking I'm using. Specifying the interpolation made the error go away of course and then works just fine for grayscale or non-grayscale images. (I filed a bug report for this already.)