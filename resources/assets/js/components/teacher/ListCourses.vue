<template>
	<div class="">
		<navbar-teacher></navbar-teacher>
		<div class="container">
			<panel>
				<template slot="tittle">
					<h5 class="float-left">Cursos</h5>
				</template>
				<template slot="controls">
					<div class="float-right">
						<button class="btn btn-sm btn-primary" @click.prevent="changeStateModal">Nuevo curso</button>
					</div>
				</template>

				<template slot="body">
					<input type="text" class="form-control">
					<div class="card-columns mt-3">
						<course-card v-for="course in courses" :key="course.id" :course="course" @deleted="getCourses(teacher.id)"></course-card>
					</div>
				</template>
			</panel>	
		</div>
		<create-course :stateModal="openModal" :teacher="teacher" @cancel="changeStateModal" @created="getCourses(teacher.id)"></create-course>
	</div>
</template>

<script>
import NavbarTeacher from './NavbarTeacher'
import panel from '../shared/Panel'
import courseCard from '../course/CourseCard'
import createCourse from '../course/create'

	export default{
		components: {
			panel, NavbarTeacher, courseCard, createCourse
		},
		mounted: function(){
			this.getUserLogged()
		},
		data: function(){
			return {
				isLoading:false,
				openModal:false,
				teacher: {
					type: Object
				},
				courses:{
					type:Array
				}
			}
		},
		methods:{
			getUserLogged: function(){
				axios.get("/userLogged")
				.then(resp =>{
					this.teacher = resp.data
					this.getCourses(this.teacher.id)
				})
				.catch(err =>{
					console.log(err)
				});
			},
			getCourses: function(teacher){
				this.isLoading = true;

				axios.get("/api/teacher/"+teacher+"/courses")
				.then(resp => {
					this.isLoading = false;
					this.courses = resp.data;
				})
				.catch(err => {
					this.isLoading = false;
				});
			},
			changeStateModal: function(){
				this.openModal = !this.openModal;
			}
		}
	}
</script>