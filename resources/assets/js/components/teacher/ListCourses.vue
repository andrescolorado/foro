<template>
	<div class="">
		<navbar-teacher @logged="setUser"></navbar-teacher>
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
						<course-card 
							v-for="course in courses" 
							:key="course.id" 
							:course="course" 
							@deleted="getCourses(teacher.id)"
							:controlsCrud="true">
							</course-card>
					</div>
				</template>
			</panel>	
		</div>
		<create-course 
			:stateModal="openModal" 
			:teacher="teacher" 
			@cancel="changeStateModal" 
			@created="getCourses()">
		</create-course>
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
			setUser: function(user){
				this.teacher = user;

				this.getCourses();
			},
			getCourses: function(){
				this.isLoading = true;

				axios.get("/api/teacher/"+this.teacher.id+"/courses")
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