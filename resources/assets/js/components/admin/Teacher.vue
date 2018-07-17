<template>
	<div class="">
		<navbar></navbar>
		<teachers></teachers>
	</div>
</template>

<script>
import navbar from './NavbarAdmin'
import teachers from '../teacher/Lists.vue'

export default{
	components: {
		navbar, teachers
	},
	
}
</script>