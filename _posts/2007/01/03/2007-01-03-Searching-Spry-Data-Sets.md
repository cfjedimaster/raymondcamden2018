---
layout: post
title: "Searching Spry Data Sets"
date: "2007-01-03T16:01:00+06:00"
categories: Misc 
tags: 
---

Need to quickly search through a Spry data set? Sam Mitchell shared this little gem with me: findRowsWithColumnValues. It allows you to search a dataset for a matching set of column, or columns. So for example, to return all boys from a set that has a gender column:

<code>
var boyRows = dsKids.findRowsWithColumnValues({"gender":"male"});
</code>

You can even tell the function to return immediately when it finds a match. This is useful for when you are searching by a primary key. Here is an example:

<code>
var theRow = dsKids.findRowsWithColumnValues({"id":"1"}, true);
</code>

Lastly, you can search by any number of columns:

<code>
var leftyBoyRows = dsKids.findRowsWithColumnValues({"gender":"male", "handiness":"left"});
</code>

A full example may be found <a href="http://labs.adobe.com/technologies/spry/samples/data_region/SetCurrentRowByValueSample.html">here</a>.