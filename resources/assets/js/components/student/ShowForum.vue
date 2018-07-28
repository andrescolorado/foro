<template>
	<div class="">
		<navbar-teacher @logged="setStudent"></navbar-teacher>
		<div class="container">
			<forum-show 
				:course="course" 
				:forum="forum"
				:canCompose="true"
				:enrollment="enrollment" >
			</forum-show>
		</div>
	</div>
</template>

<script>
import forumShow from '../course/ShowForum'
import navbarTeacher from './navbar'

export default{
	components:{
		forumShow, navbarTeacher
	},
	props:{
		course:null,
		forum:null
	},
	mounted: function(){
		// this.getEnrollment();
	},
	data: function(){
		return {
			enrollment:null,
			student:null
		}
	},
	methods:{
		getEnrollment: function(){
			axios.get("/api/student/"+this.student.id+"/enrollment/"+this.course.id)
			.then(resp => {
				this.enrollment = resp.data.pivot.id;
			})
			.catch(err => {

			});
		},
		setStudent: function(user){
			this.student = user;
			this.getEnrollment();
		}
	},
	computed:{
		enrollmentPivot: function(){
			console.log(this.enrollment)
		}
	}
}
</script>