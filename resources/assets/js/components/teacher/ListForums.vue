<template>
	<div class="">
		<navbar></navbar>
		<div class="container">
			<panel>
				<template slot="tittle">
					<h5>Foros</h5>
				</template>
				<template slot="controls">
					<!-- <button class="btn btn-sm btn-primary" @click.prevent="showForCreate">Nuevo Foro</button> -->
				</template>
				<template slot="body">
					<div class="aaa">
						<forum 
							v-for="forum in forums" 
							:key="forum.id" 
							:forum="forum"
							:controls="true" 
							@editForum="showForEdit"
							:role="getRole()">
							</forum>
					</div>
				</template>
			</panel>
		</div>
		<edit-forum 
			:forum="forumSelected" 
			:stateModal="isOpenModalEditForum" 
			@cancel="cancelEdit">		
		</edit-forum>
		<!-- <create-forum 
			:stateModal="isOpenModalCreateForum" 
			@cancel="cancelCreate">
		</create-forum> -->
	</div>
</template>
<script>
import navbar from './NavbarTeacher'
import panel from '../shared/Panel'
import forum from '../forum/rowItem1'
import createForum from '../forum/Create'
import editForum from '../forum/Edit'

export default{
	components:{
		navbar, panel, forum, createForum, editForum
	},
	props:{
		
	},
	mounted: function(){
		this.getUserLogged();

		eventBus.$on('forumCreated', () => {
			this.getForums()
		});

		eventBus.$on('forumUpdated', () => {
			this.getForums()
		});
	},
	data: function(){
		return {
			userLogged:null,

			forums:null,
			forumSelected:null,

			isOpenModalEditForum:false,
			isOpenModalCreateForum:false,
			isOpenModalDeleteForum:false
		}
	},
	methods:{
		getUserLogged: function(){
			axios.get("/userLogged")
			.then(resp =>{
				this.userLogged = resp.data;
				this.getForums();
			})
			.catch(err =>{
				console.log(err)
			});
		},
		getForums: function(id){
			axios.get("/api/teacher/"+this.userLogged.id+"/forums")
			.then(resp => {
				console.log(resp);
				this.forums = resp.data
			})
			.catch(err => {
				console.log(err)
			});
		},
		searchForum: function(){

		},
		showForCreate: function(forum){
			this.isOpenModalCreateForum = true;
			this.forumSelected = forum;
		},
		showForEdit: function(forum){
			this.isOpenModalEditForum = true;
			this.forumSelected = forum;
		},
		cancelEdit: function(){
			this.isOpenModalEditForum = false;
		},
		cancelCreate: function(){
			this.isOpenModalCreateForum = false;
		},
		getRole: function(){
			return 'teacher';
		}
	}
}
</script>