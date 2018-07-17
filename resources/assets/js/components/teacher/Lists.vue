<template>
	<div class="container">
		<panel>
			<template slot="tittle">
				<h5 class="float-left">Docentes</h5>
			</template>
			<template slot="controls">
				<div class="float-right">
				</div>
			</template>

			<template slot="body">
				<input type="text" class="form-control" v-model="search" @keyup="searchTeacher">
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
							<row-table-teacher v-for="teacher in teachers" :key="teacher.id" :teacher="teacher">
								
							</row-table-teacher>
						</tbody>
					</table>
				</div>
			</template>
		</panel>	
	</div>
</template>

<script>
import panel from '../shared/Panel'
import createTeacher from './create'
import rowTableTeacher from './rowTableTeacher'

export default{
	components: {
		panel, createTeacher, rowTableTeacher
	},
	mounted(){
		this.getTeachers()
	},
	data(){
		return {
			search:'',
			isCreateTeacher: false,
			teachers:{
				type: Array
			},

		}
	},
	methods: {
		getTeachers: function(){
			axios.get('/api/teachers')
			.then(data => {
				console.log(data)
				this.teachers = data.data
			})
			.catch(err => {

			})
		},
		searchTeacher: function(){
			axios.get('/api/user/search', {
				params:{
					type: 'teachers',
					q: this.search
				}
			})
			.then(data => {
				console.log(data)
				this.teachers = data.data
			})
			.catch(err => {

			})
		}
	}
}
</script>