<template>
	<div class="">
		<textarea class="form-control mb-3" v-model="comment">
			
		</textarea>
		<button class="btn btn-primary btn-block d-flex justify-content-center" @click="saveCommnet">
			<span class="mr-1">
				{{ textButton }}
			</span>
			<loader v-bind:style="[styles]" v-show="isLoading"></loader>
		</button>
	</div>	
</template>
<script>
import loader from '../shared/Loader'

export default{
	components:{
		loader
	},
	props:{
		forum:null,
		parent:0,
		enrollment:null
	},
	data: function(){
		return {
			isLoading:false,
			textButton: 'Comentar',
			comment:'',
		}
	},
	methods:{
		saveCommnet: function(){

			this.isLoading = true;
			this.textButton = 'Comentando.. '
			axios.post("/commentStore", {
				forum_id:this.forum.id,
				enrollment_id: this.enrollment,
				comment: this.comment
			})
			.then(resp => {
				this.comment = '';
				this.isLoading = false;
				this.textButton = 'Comentar';

				this.$emit('created');
			})
			.catch(err => {
				this.isLoading = false;
				this.textButton = 'Comentar';
			});
		}
	},
	computed: {
        styles: function() {        
            return {
                'border': '3px solid rgba(243, 243, 243, .4)',
                'border-top': '3px solid #fff',
                width: 20 + 'px',
                height: 20 + 'px'
            };
        }
    }
}
</script>