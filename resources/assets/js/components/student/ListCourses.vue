<template>
	<div class="">
		<navbar-teacher @logged="setStudent"></navbar-teacher>
		<div class="container">
			<panel>
				<template slot="tittle">
					<h5 class="float-left">Mis Cursos</h5>
				</template>
				<template slot="body">
					<input type="text" class="form-control">
					<div class="card-columns mt-3">
						<course 
							v-for="course in courses" 
							:key="course.id" 
							:course="course">
						</course>
					</div>
				</template>
			</panel>
		</div>
	</div>
</template>

<script>
import navbarTeacher from './navbar'
import panel from '../shared/Panel'
import course from '../course/CourseCard'

export default{
	components:{
		navbarTeacher, course, panel
	},
	data: function(){
		return {
			student:null,
			courses: {
				type: Array
			}
		}
	},
	methods:{
		setStudent: function(user){
			this.student = user;
			this.myCourses();
			console.log(this.student);
		},
		myCourses: function(){
			axios.get("/api/student/"+this.student.id+"/courses", {
				params:{
					type: 'enrollments'
				}
			})
			.then(resp => {
				this.courses = resp.data
			})
			.catch(err => {

			});
		}
	}
}
</script>