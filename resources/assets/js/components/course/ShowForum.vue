<template>
	<div class="">
		<div class="container">
			<div class="topic_main shaddow bg-white border">
				<div class="topic p-3">
					<div class="topic_header border-bottom py-2" >
						<a href="" class="topic_header_avatar d-inline">
							<img src="http://via.placeholder.com/75x75" alt="" class="forum_picture_last_comment rounded-circle" width="70" height="70">
						</a>
						<h2 class="topic_header_title d-inline">{{ forum.name }}</h2>

					</div>
					<div class="topic_body mt-2">
						<p>
							{{ forum.description }}
						</p>
					</div>
				</div>
				<div class="topic_compose_comment p-3" v-if="canCompose && forum.state">
					<compose :forum="forum" :enrollment="enrollment" @created="getComments"></compose>
				</div>
				<div class="topic_comments bg-light p-3">
					<comment 
						v-for="comment in comments"
						:key="getKey(comment)"
						:comment="comment">
					</comment>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
import navbarTeacher from '../teacher/NavbarTeacher'
import panel from '../shared/Panel'
import compose from '../comment/Compose'
import comment from '../comment/Show'

export default{
	components:{
		panel, navbarTeacher, compose, comment
	},
	props:{
		forum:null,
		course:null,
		canCompose:false,
		enrollment:null
	},
	mounted: function(){
		this.getComments();
	},
	data: function(){
		return {
			comments: {
				type: Array
			}
		}
	},
	methods:{
		getComments: function(){

			axios.get("/api/forum/"+this.forum.id+"/comments")
			.then(resp => {
				this.comments = resp.data;
			})
			.catch(err => {
				console.log(err);
			});
		},
		getKey: function(comment){
			let pivot = (comment == null) ? null : comment.pivot;
			let key = (pivot == null) ? null : pivot.id;

			return key;
		}
	},
	computed: {
		
	}
}
</script>