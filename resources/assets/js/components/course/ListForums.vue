<template>
	<div class="">
		<input type="text" class="form-control" v-model="search" @keyup="searchForum">
		<div class="">
			<forum 
				v-for="forum in forums" 
				:key="forum.id" 
				:forum="forum"
				:controls="controlsForum"
				:role="getCurrentRole"
				@editForum="showForEdit"></forum>
		</div>
		<edit-forum :forum="forumSelected" :stateModal="isOpenModalEditForum" @cancel="cancelEdit"></edit-forum>
	</div>
</template>

<script>
import forum from '../forum/rowItem1'
import editForum from '../forum/Edit'

export default{
	components:{
		forum, editForum
	},
	props:{
		course:null,
		controlsForum:false,
	},
	mounted: function(){
		this.getForums()
		this.getRoleUserLogged()

		eventBus.$on('forumCreated', () => {
			this.getForums()
		});

		eventBus.$on('forumUpdated', () => {
			this.getForums()
		});
	},
	data: function(){
		return {
			search: null,

			forums: null,
			forumSelected:null,
			
			isOpenModalEditForum:false,
			isOpenModalDeleteForum:false,

			userLoggedRole:null
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
		getRoleUserLogged: function(){

			axios.get("/userRole")
			.then(resp => {
				this.userLoggedRole = resp.data;
			})
			.catch(err => {

			})
		},	
		searchForum: function(){

		},
		showForEdit: function(forum){
			this.isOpenModalEditForum = true;
			this.forumSelected = forum;
		},
		cancelEdit: function(){
			this.isOpenModalEditForum = false;
		}
	},
	computed:{
		getCurrentRole: function(){
			return this.userLoggedRole;
		}
	}
}
</script>