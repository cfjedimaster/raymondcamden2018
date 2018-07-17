---
layout: page
title: Stats
---

<style>
[v-cloak] {display: none}
</style>

{% raw %}
<div id="app" v-cloak>
	<table>
		<tr>
			<td width="30%">Total Posts:</td>
			<td width="70%">{{totalPosts}}</td>
		</tr>
		<tr>
		<td>First Post:</td>
		<td>
		<a :href="firstPost.url">{{firstPost.title}}</a> published {{firstPost.age}} on {{firstPost.date}}
		</td>
		</tr>
		<tr>
		<td>Last Post:</td>
		<td>
		<a :href="lastPost.url">{{lastPost.title}}</a> published {{lastPost.age}} on {{lastPost.date}}
		</td>
		</tr>
		<tr>
		<td>Total Words Written:</td>
		<td>{{totalWords}}</td>
		</tr>
		<tr>
		<td>Average Words per Post:</td>
		<td>{{avgWords}}</td>
		</tr>
	</table>
</div>
{% endraw %}

<script src="https://cdn.jsdelivr.net/npm/moment@2.22.2/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
new Vue({
	el:'#app',
	data:{
		totalPosts:0,
		firstPost:{
			title:"",
			date:"",
			url:""
		},
		lastPost:{
			title:"",
			date:"",
			url:""
		},
		totalWords:0,
		avgWords:0
	},
	created:function() {
		fetch('/stats.json')
		.then(res => res.json())
		.then(res => {
			console.log(res);
			this.totalPosts = res.totalPosts;
			
			this.firstPost = {
				title:res.firstPost.title,
				date:res.firstPost.published,
				url:res.firstPost.url,
				age:moment(res.firstPost.published).fromNow()
			};

			this.lastPost = {
				title:res.lastPost.title,
				date:res.lastPost.published,
				url:res.lastPost.url,
				age:moment(res.lastPost.published).fromNow()
			};

			this.totalWords = res.totalWords;
			this.avgWords = res.averageWordsPerPost;

		});
	}
});
</script>