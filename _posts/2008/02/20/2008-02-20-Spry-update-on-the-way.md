---
layout: post
title: "Spry update on the way"
date: "2008-02-20T15:02:00+06:00"
categories: Misc 
tags: 
---

A little birdie just let me know that a <i>very</i> cool Spry update is on the way. It includes a feature I've been asking about for a while now - custom display functions. What do I mean? Consider the following example (thanks Donald Booth for the code):

<code>
&lt;script type="text/javascript"&gt;

function FormattedPrice(region, lookupFunc)
{
  return "$" + parseInt(lookupFunc("{dsProducts::price}")).toFixed(2);
}
&lt;/script&gt;

...

&lt;div spry:region="dsProducts"&gt;
  &lt;ul spry:repeatchildren="dsProducts"&gt;
    &lt;li&gt;{name} - {function::FormattedPrice} &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</code>

Spry will now recognize function:: as a custom JavaScript function. In this example, it formats a price to include a dollar sign and 2 decimal places.

You can even use functions in conditions. Consider:

<code>
&lt;script&gt;

function checkName(rgn, doIt)
    {
     return doIt('{name}') == 'Adobe Studio 8';
    }

&lt;/script&gt;

&lt;div spry:if="function::checkName"&gt;
</code>

This could really simplify complex display code. When will this be released? Soon...