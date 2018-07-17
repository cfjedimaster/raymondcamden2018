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
			<td>Total Posts:</td>
			<td>{{totalPosts}}</td>
		</tr>
		<tr>
		<td>First Post:</td>
		<td>
		<a :href="firstPost.url">{{firstPost.title}}</a> published on {{firstPost.date}}
		</td>
		</tr>
		<tr>
		<td>Last Post:</td>
		<td>
		<a :href="lastPost.url">{{lastPost.title}}</a> published on {{lastPost.date}}
		</td>
		</tr>
	</table>
</div>
{% endraw %}

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
		}
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
				url:res.firstPost.url
			};

			this.lastPost = {
				title:res.lastPost.title,
				date:res.lastPost.published,
				url:res.lastPost.url
			};

		});
	}
});
</script>