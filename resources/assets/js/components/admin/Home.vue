<template>
	<div class="">
		<navbar></navbar>
	</div>
</template>

<script>
import navbar from './NavbarAdmin'

export default{
	components: {
		navbar
	},
	data: function(){
		return {
			user:null
		}
	},
	methods:{
		setUser: function(u){
			this.user = u;
		}
	}
}
</script>