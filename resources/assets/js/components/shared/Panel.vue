<template>
	<div class="shadow card">
		<div class="card-header bg-white">
			<slot name="tittle"></slot>
			<slot name="controls"></slot>
		</div>
		<div class="card-body">
			<slot name="body"></slot>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>