<template>
	<div class="">
		<panel>
			<template slot="tittle">
				<h5>Información del curso</h5>
			</template>
			<template slot="body">
				<div class="course">
					<div class="course_title d-flex">
						<h5 class="mr-1">{{ course.name}}</h5>
						<a href="#" class="text-muted">Editar</a>		
					</div>
					<div class="course_description">
						<p class="text-muted">
							{{ course.description}}
						</p>
					</div>
				</div>
			</template>
		</panel>
		<panel>
			<template slot="tittle">
				<h5>Estudiantes</h5>
			</template>
			<template slot="body">
				<students :course="course" :controls="controlsSttudents"></students>
			</template>
		</panel>
		<panel v-if="showPanelForum">
			<template slot="tittle">
				<h5>Foros</h5>
			</template>
			<template slot="controls" v-if="createForum">
				<button class="btn btn-sm btn-primary" @click.prevent="changeStateModalCreateForum">Nuevo Foro</button>
			</template>
			<template slot="body">
				<forums 
					:course="course" 
					:controlsForum="controlsForum">
				</forums>
			</template>
		</panel>
		<create-forum :stateModal="isOpenModal" :course="course" @cancel="changeStateModalCreateForum"></create-forum>
	</div>
</template>

<script>
import panel from '../shared/Panel'
import students from './ListStudent'
import forums from './ListForums'
import createForum from '../forum/Create'

export default{
	components:{
		panel, students, createForum, forums
	},
	props:{
		course:null,
		controlsForum:false,
		controlsSttudents:false,
		showPanelForum:false,
		createForum:false	
	},
	data: function(){
		return {
			isOpenModal:false,
		}
	},
	methods: {
		changeStateModalCreateForum: function(){
			this.isOpenModal = !this.isOpenModal;
		}
	}
}
</script>