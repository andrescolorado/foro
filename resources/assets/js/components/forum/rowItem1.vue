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
				<div class="d-inline forum_content_controls position-absolute" v-if="controls">
					<transition-group name="fade">
						<button 
							class="btn btn-sm btn-primary mr-1" 
							v-show="theControlAreVisible"
							key="edit"
							 @click.prevent="edit">
							<font-awesome-icon icon="edit"></font-awesome-icon>
						</button>
						<button 
							class="btn btn-sm btn-danger" 
							v-show="theControlAreVisible"
							key="delete"
							@click.prevent="deleteForum">
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
			<h4>{{ countComments() }}</h4>
			<span>Comentarios</span>
		</div>
		<div class="forum_last_comment text-center d-flex m-auto">
			<img src="http://via.placeholder.com/75x75" v-show="countComments() > 0" alt="" class="forum_picture_last_comment rounded-circle" width="50" height="50">
			<div class="text-left ml-3" v-show="countComments() > 0">
				<span class="forum_last_comment_date d-block">{{ lastComment.date }}</span>
				<span class="forum_last_comment_user d-block">{{ lastComment.user }}</span>
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
	components:{
		
	},
	mounted: function(){
		this.getUserLastComment();
	},
	props:{
		forum:null,
		role:'',
		controls:false
	},
	data: function(){
		return {
			theControlAreVisible:false,
			lastComment: {
				user:null,
				date:null
			}
		}
	},
	methods:{
		getDate: function(date){
			return moment(date).fromNow();
		},
		countComments: function(){
			return (this.forum.comments == null) ? 0 :this.forum.comments.length;
		},
		getUserLastComment: function(){
			let total = this.countComments();
			let lComment = (total == 0) ? null : this.forum.comments[total - 1];
			let user = (typeof lComment == 'undefined' || lComment == null) ? null : lComment.student.user;
			let name = (user == null) ? '': user.name;
			let last_name = (user == null) ? '': user.last_name;

			this.lastComment.user = name+" "+last_name;
			this.lastComment.date = (typeof lComment == 'undefined' || lComment == null) ? null : this.getDate(lComment.pivot.created_at);
		},
		showControls: function(){
			this.theControlAreVisible = true
		},
		hideControls: function(){
			this.theControlAreVisible = false
		},
		edit: function(){
			this.$emit('editForum', this.forum)
		},
		deleteForum: function(){
			this.$emit('deleteForum', this.forum)	
		}
	},
	computed:{
		link: function(){
			return "/"+this.role+"/course/"+this.forum.course_id+"/forum/"+this.forum.id;
		}
	}
}
</script>