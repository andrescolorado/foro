<template>
	<div class="container">
		<panel>
			<template slot="tittle">
				<h5 class="float-left">Estudiantes</h5>
			</template>
			<template slot="controls">
				<div class="float-right">
				</div>
			</template>

			<template slot="body">
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
							<row-table-student v-for="student in students" :key="student.id" :student="student">
								
							</row-table-student>
						</tbody>
					</table>
				</div>
			</template>
		</panel>	
	</div>
</template>

<script>
import panel from '../shared/Panel'
import rowTableStudent from './rowTablestudent'

export default{
	components: {
		panel, rowTableStudent
	},
	mounted(){
		this.getstudents()
	},
	data(){
		return {
			search:'',
			isCreatestudent: false,
			students:{
				type: Array
			},

		}
	},
	methods: {
		getstudents: function(){
			axios.get('/api/students')
			.then(data => {
				console.log(data)
				this.students = data.data
			})
			.catch(err => {

			})
		},
		searchStudent: function(){
			axios.get('/api/user/search', {
				params:{
					type: 'students',
					q: this.search
				}
			})
			.then(data => {
				console.log(data)
				this.students = data.data
			})
			.catch(err => {

			})
		}
	}
}
</script>