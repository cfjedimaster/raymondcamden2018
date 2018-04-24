---
layout: post
title: "Flex 4.5 List control springing to top?"
date: "2011-05-26T15:05:00+06:00"
categories: Flex Mobile 
tags: 
---

When I first began playing with Flex 4.5 mobile controls, I noticed something odd with the Spark List control. If the amount of data was bigger than the screen, it would "spring" back when your finger left the control. You could scroll down - sure - but the second you let go of the control it scrolled back to the top. I have no idea why this fixes it, but if you simply add height="100%" to your list, it corrects the issue. It doesn't seem to do anything visually to the output at all, but it corrects it immediately. Here is a simple example. First, my top level file will define a list that two sub views will use:
<!--more-->
<p>

<code>

&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;s:TabbedViewNavigatorApplication xmlns:fx="http://ns.adobe.com/mxml/2009" 
								  xmlns:s="library://ns.adobe.com/flex/spark"&gt;
	
	&lt;fx:Script&gt;
	&lt;![CDATA[
	import mx.collections.ArrayCollection;

	[Bindable]
	public var demo:ArrayCollection = new ArrayCollection([
		"Apple",
		"Banana",
		"Beer",
		"Garbage",
		"Wine",
		"Ray",
		"Jeanne",
		"Zoid",
		"CFSilence",
		"Adrok",
		"dfgrump",
		"Rinaldi",
		"Greg",
		"Phones",
		"Are",
		"Little",
		"Miniature",
		"Spy",
		"Camera"]);
		
	]]&gt;
	&lt;/fx:Script&gt;

	&lt;s:ViewNavigator label="Broken" width="100%" height="100%" firstView="views.BrokenView"/&gt;
	&lt;s:ViewNavigator label="Fixed" width="100%" height="100%" firstView="views.FixedView"/&gt;
	&lt;fx:Declarations&gt;
		&lt;!-- Place non-visual elements (e.g., services, value objects) here --&gt;
	&lt;/fx:Declarations&gt;
	
	
&lt;/s:TabbedViewNavigatorApplication&gt;
</code>

<p>

Here is the broken view - it will exhibit the behavior I described above:

<p>

<code>
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;s:View xmlns:fx="http://ns.adobe.com/mxml/2009" 
		xmlns:s="library://ns.adobe.com/flex/spark" title="Broken"&gt;

	&lt;fx:Script&gt;
		&lt;![CDATA[
			import mx.core.FlexGlobals;
			
		]]&gt;
	&lt;/fx:Script&gt;
	
	&lt;s:List dataProvider="{FlexGlobals.topLevelApplication.demo}" width="100%"  /&gt;

&lt;/s:View&gt;
</code>

<p>

And here is the good version. The <i>only</i> difference is the addition of the height.

<p>

<code>
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;s:View xmlns:fx="http://ns.adobe.com/mxml/2009" 
		xmlns:s="library://ns.adobe.com/flex/spark" title="Fixed"&gt;
	
	&lt;fx:Script&gt;
	&lt;![CDATA[
	import mx.core.FlexGlobals;

	]]&gt;
	&lt;/fx:Script&gt;

	&lt;s:List dataProvider="{FlexGlobals.topLevelApplication.demo}" width="100%" height="100%"  /&gt;
	
&lt;/s:View&gt;
</code>

<p>

I've attached the FXP if you want to play with this yourself.<p><a href='enclosures/C%3A%5Chosts%5C2009%2Ecoldfusionjedi%2Ecom%5Cenclosures%2FListSpringIssue%2Efxp'>Download attached file.</a></p>