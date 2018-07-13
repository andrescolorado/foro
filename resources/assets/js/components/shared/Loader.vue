<template>
	<!-- Loading animation container -->
	<div class="loader"></div>
</template>
<script>
	export default{

	}
</script>

<style lang="scss">
	.loader {
	    border-radius: 50%;
	    animation: spin 2s linear infinite;
	}

	@keyframes spin {
	    0% { transform: rotate(0deg); }
	    100% { transform: rotate(360deg); }
	}
</style>
