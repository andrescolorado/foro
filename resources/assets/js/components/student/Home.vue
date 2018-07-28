<template>
	<div class="">
		<navbar-teacher @logged="setUser"></navbar-teacher>
		<div class="container">
			<panel>
				<template slot="tittle">
					<h5 class="float-left">Mis Cursos</h5>
				</template>
				<template slot="body">
					<div class="alert alert-success" role="alert" v-show="enrollment_created">
						<h4 class="alert-heading">Matricula realizada con exito!</h4>
					  	<p>
					  		Ahora tienes que esperar que el docentes acepte tu solicitud de matricula
					  	</p>
					  	<hr>
					  	<p class="mb-0">
					  		Para ver todos los cursos matriculados da click <a href="/student/courses">aqui</a>.
					  	</p>
					</div>
					<input type="text" class="form-control">
					<div class="card-columns mt-3">
						<course 
							v-for="course in courses" 
							:key="course.id" 
							:course="course"
							:buttonEnrollment="true"
							:user="user"
							@enrollmentCreated="enrollmentCreated">
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
		navbarTeacher, panel, course
	},
	data: function(){
		return {
			user:null,
			courses:null,
			enrollment_created:null,
			isLoading:false,
		}
	},
	methods:{
		setUser: function(u){
			this.user = u;
			this.getCourseWithOutEnrollment();
			
		},
		getCourseWithOutEnrollment: function(){
			axios.get("/api/student/"+this.user.id+"/courses", {
				params:{
					type: 'withEnrollment'
				}
			})
			.then(resp => {
				this.courses = resp.data;
			})
			.catch(err => {
				console.log(err.dat);
			})
		},
		enrollmentCreated: function(){
			this.enrollment_created = true;
			this.getCourseWithOutEnrollment();
		}
	}
}
</script>