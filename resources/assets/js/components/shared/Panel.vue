<template>
	<div class="shadow-sm card mb-3">
		<div class="card-header bg-white clearfix">
			<div class="float-left">
				<slot name="tittle"></slot>
			</div>
			<div class="float-right">
				<slot name="controls"></slot>
			</div>
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