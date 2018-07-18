<template>
	<div class="forum w-100 d-flex border-bottom py-4">
		<div class="forum_icon text-center m-auto">
			<font-awesome-icon icon="comment" size="2x"></font-awesome-icon>
		</div>
		<div class="forum_content text-left p-3" @mouseleave="hideControls" @mouseover="showControls" :class="{shadow:theControlAreVisible}">
			<a :href="link" class="forum_content_link">
				<h5 class="forum_title d-inline text-dark">{{ forum.name}}</h5>
				<span
					class="badge d-inline mx-3" 
					:class="(forum.state) ? 'badge-success' : 'badge-danger'">
					{{ (forum.state) ? 'Abierto' : 'Cerrado' }}
				</span>
				<div class="d-inline forum_content_controls position-absolute">
					<transition-group name="fade">
						<button 
							class="btn btn-sm btn-primary mr-1" 
							v-show="theControlAreVisible"
							key="edit">
							<font-awesome-icon icon="edit"></font-awesome-icon>
						</button>
						<button 
							class="btn btn-sm btn-danger" 
							v-show="theControlAreVisible"
							key="delete">
							<font-awesome-icon icon="trash"></font-awesome-icon>
						</button>
					</transition-group>
				</div>
				<p class="forum_description text-secondary">
					{{forum.description}}
				</p>
				<div class="forum_dates">
					<span class="text-muted">{{ getDate(forum.created_at) }}</span>
				</div>
			</a>
		</div>
		<div class="forum_count_comments text-center m-auto">
			<h4>6</h4>
			<span>Comentarios</span>
		</div>
		<div class="forum_last_comment text-center d-flex m-auto">
			<img src="http://via.placeholder.com/75x75" alt="" class="forum_picture_last_comment rounded-circle" width="50" height="50">
			<div class="text-left ml-3">
				<span class="forum_last_comment_date d-block">17 jun 2018</span>
				<span class="forum_last_comment_user d-block">user12</span>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.forum_icon{
		width: 10%;
		vertical-align: middle;
	}

	.forum_content{
		width: 55%;
	}
	
	.forum_content a {
		text-decoration: none;
	}

	.forum_count_comments{
		width: 15%;
	}

	.forum_last_comment{
		width: 20%;
	}
</style>
<script>
export default{	
	props:{
		forum:null,
	},
	data: function(){
		return {
			theControlAreVisible:false,
		}
	},
	methods:{
		getDate: function(date){
			return moment(date).fromNow();
		},
		showControls: function(){
			this.theControlAreVisible = true
		},
		hideControls: function(){
			this.theControlAreVisible = false
		}
	},
	computed:{
		link: function(){
			return "../course/"+this.forum.course_id+"/forum/"+this.forum.id;
		}
	}
}
</script>