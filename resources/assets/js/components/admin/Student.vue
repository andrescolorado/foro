<template>
	<div class="">
		<navbar></navbar>
		<students></students>
	</div>
</template>

<script>
import navbar from './NavbarAdmin'
import students from '../student/Lists.vue'

export default{
	components: {
		navbar, students
	},
	
}
</script>