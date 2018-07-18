<template>
	<div class="">
		<input type="text" class="form-control" v-model="search" @keyup="searchForum">
		<div class="">
			<forum v-for="forum in forums" :key="forum.id" :forum="forum"></forum>
		</div>
	</div>
</template>

<script>
import forum from '../forum/rowItem1'

	export default{
		components:{
			forum
		},
		props:{
			course:null
		},
		mounted: function(){
			this.getForums()

			eventBus.$on('forumCreated', () => {
				this.getForums()
			})
		},
		data: function(){
			return {
				search: null,
				forums: null
			}
		},
		methods:{
			getForums: function(){
				axios.get("/api/course/"+this.course.id+"/forums")
				.then(resp => {
					this.forums = resp.data
				})
				.catch(err => {
					console.log(err)
				});
			},
			searchForum: function(){

			}
		}
	}
</script>