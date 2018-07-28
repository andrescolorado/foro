<template>
	<div class="">
		<input type="text" class="form-control" v-model="search" @keyup="searchStudent">
		<div class="">
			<table class="table">
				<thead>
					<tr>
						<th>Nombres</th>
						<th>Apellidos</th>
						<th>Usuario</th>
						<th>Correo electronico</th>
						<th>Estado</th>
						<th>Acción</th>
					</tr>
				</thead>
				<tbody>
					<row-table-student v-for="student in students" :key="student.id" :student="student" :course="course" :controls="controls">
						
					</row-table-student>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import rowTableStudent from '../student/rowTableCourse'
export default{
	components:{
		rowTableStudent
	},
	props:{
		course:null,
		controls:false,
	},
	mounted: function(){
		this.getStudents()
	},
	data: function(){
		return {
			students:null,
			search:null
		}
	},
	methods:{
		getStudents: function(){
			axios.get("/api/course/"+this.course.id+"/students")
			.then(resp => {
				this.students = resp.data;
			})
			.catch(err => {

			})
		},
		searchStudent: function(){
			axios.get("/api/course/"+this.course.id+"/searchStudent", {
				params:{
					q: this.search
				}
			})
			.then(resp => {
				this.students = resp.data
			})
			.catch(err => {
				console.log(err)
			})
		}
	}
}
</script>