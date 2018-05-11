---
layout: post
title: "Soundings ColdFusion Survey Update"
date: "2005-12-19T12:12:00+06:00"
categories: ColdFusion 
tags: 
banner_image: 
permalink: /2005/12/19/Soundings-ColdFusion-Survey-Update
---

I have a very minor bug fix for <a href="http://ray.camdenfamily.com/projects/soundings">Soundings</a>, my ColdFusion survery application. The MySQL file used an unsigned int for the answes.rank property. For Matrix support, I was using negative numbers, and obviously these became positive in MySQL. I'd like to blame the NSA for this bug. And Microsoft.