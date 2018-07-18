<template>
	<div class="">
		<navbar></navbar>
		<div class="container">
			<course :course="course"></course>
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