<template>
	<div class="comment d-flex mb-3 w-100">
		<a href="" class="comment_avatar d-inline mr-2">
			<img src="http://via.placeholder.com/75x75" alt="" class="forum_picture_last_comment rounded-circle shadow-sm" width="40" height="40">
		</a>
		<div class="bg-white rounded border shadow-sm flex-grow-1">
			<div class="bg-light p-2 d-flex justify-content-between">
				<h6 class="font-weight-bold">{{ getUserName() }}</h6>
				<span class="text-muted">Creado {{getDate()}}</span>
			</div>
			<div class="p-2">
				<p>
					{{ getComment() }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		comment:null
	},
	methods:{
		getDate: function(){
			return moment(this.comment.pivot.created_at).fromNow();
		},
		getComment: function(){
			return this.comment.pivot.comment;
		},
		getUserName: function(){

			if(typeof this.comment.student.user != 'undefined'){

				let name = this.comment.student.user.name;
				let last_name = this.comment.student.user.last_name;

				return name+" "+last_name;
			}

			return '';
		}
	},
	computed: {
		userName: function(){

		}
	}
}
</script>