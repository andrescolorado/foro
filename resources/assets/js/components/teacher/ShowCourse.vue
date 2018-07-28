<template>
	<div class="">
		<navbar></navbar>
		<div class="container">
			<course 
				:course="course" 
				:controlsForum="true" 
				:controlsSttudents="true"
				:showPanelForum="true"
				:createForum="true">
			</course>
		</div>
	</div>
</template>
<script>
import navbar from './NavbarTeacher'
import course from '../course/Show'

export default{
	components:{
		navbar, course
	},
	props:{
		course:null
	}
}
</script>