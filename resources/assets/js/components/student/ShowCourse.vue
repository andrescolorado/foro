<template>
	<div class="">
		<navbar-student @logged="setUser"></navbar-student>
		<div class="container">
			<course 
				:course="course" 
				:controlsForum="false" 
				:controlsSttudents="false"
				:showPanelForum = "showPanel"
				:createForum="false"
				></course>
		</div>
	</div>
</template>

<script>
import navbarStudent from './navbar'
import course from '../course/Show'

export default{
	components:{
		navbarStudent, course
	},
	props:{
		course:null
	},
	data: function(){
		return {
			user:null,
			enrollment:null,
		}
	},
	methods:{
		setUser: function(user){
			this.user = user
			this.getEnrollment();
		},
		getEnrollment: function(){
			axios.get('/api/student/'+this.user.id+'/enrollment/'+this.course.id)
			.then(resp => {
				this.enrollment = resp.data.pivot;
			})
			.catch(err => {
				console.log(err.data);
			});
		}
	},
	computed: {
		showPanel: function(){
			return (this.enrollment == null) ? false : this.enrollment.state;
		}
	}
}
</script>