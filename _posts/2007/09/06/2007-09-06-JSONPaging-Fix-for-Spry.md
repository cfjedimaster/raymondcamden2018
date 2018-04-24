---
layout: post
title: "JSON/Paging Fix for Spry"
date: "2007-09-06T12:09:00+06:00"
categories: JavaScript 
tags: 
---

Use JSON and PagedViews for Spry? Turns out there is a small bug when you use the pathIsObjectOfArrays property, like in the following example:

<code>
&lt;script&gt;
var dsContent = new Spry.Data.JSONDataSet("/index.cfm?event=json.getcontent&dd_nobody=1&dd_class=#class.getID()#",{path:"DATA", pathIsObjectOfArrays: true});
dsContent.setColumnType("DOWNLOADS","number");

var pvContent = new Spry.Data.PagedView(dsContent, { pageSize: 5 });
&lt;/script&gt;
</code>

The bug is in SpryJSONDataSet.js, line 331 which is:

row.ds_RowID = i;

It should be:

row.ds_RowID = j;

Kin Blas of the Spry team found this and has told me it will be in the next release. This bug didn't break paging, but it broke my Page A of B functionality that was in use on a client site.