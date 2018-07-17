<template> 
<transition name="modal">
 <div class="modal modal-mask" style="display: block">
	<div class="modal-dialog" role="document" :style="style">
		<div class="modal-content">
			<div class="modal-header">
				<slot name="header"></slot>
			</div>
			
			<div class="modal-body">
				<slot name="body"></slot>
			</div>
			
			<div class="modal-footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</div>
</transition> 
</template>

<script>
	export default {
		props:{
			width: {
				type: Number,
				required:true
			}
		},
		computed: {
	      style () {
	        return 'width: ' + this.width+'%;max-width: none;';
	      }
	    }
	}	
</script>

<style scoped>
	
	.modal{
	    display: block !important;
	}

	/* Important part */
	.modal-dialog{
	    overflow-y: initial !important
	}
	.modal-body{
	    height: 450px;
	    overflow-y: auto;
	}

	.modal-mask {
	  position: fixed;
	  z-index: 9998;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background-color: rgba(0, 0, 0, .5);
	  display: table;
	  transition: opacity .3s ease;
	}
</style>