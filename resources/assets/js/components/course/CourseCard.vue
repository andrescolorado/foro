<template>
	<!-- <div class=""> -->
		<div class="card text-center">
			<div class="card-body">
				<h5 v-show="!isEditing"><a href="">{{ course.name }}</a></h5>
				<div v-show="isEditing">
					<div class="d-flex">
						<input type="text" ref="courseName" v-model="course.name" class="form-control w-75 mr-1" style="font-size: 1.125rem;">
						<button class="btn btn-sm btn-primary w-25 text-center" @click.prevent="update">
							<font-awesome-icon icon="save" v-show="!isLoading"></font-awesome-icon>
							<loader v-bind:style="[styles]" v-show="isLoading"></loader>
						</button>
					</div>
				</div>
			</div>
			<div class="p-2 clearfix">
				<p class="card-text float-left">
					<small class="text-muted">{{ course.created_at }}</small>
				</p>
				<div class="float-right">
					<button 
						class="btn bg-white p-1 dropdown-toggle text-muted"
						type="button" 
						:id="course.id" 
						data-toggle="dropdown" 
						aria-expanded="false">
					    <font-awesome-icon icon="ellipsis-h"></font-awesome-icon>
					</button>
					<div class="dropdown-menu" :aria-labelledby="course.id">
					    <a class="dropdown-item" href="#" @click.prevent="edit">Editar</a>
					    <a class="dropdown-item" href="#" @click.prevent="deleteCourse">Eliminar</a>
					</div>
					
				</div>
			</div>
		</div>
	<!-- </div> -->
</template>
<script>
import loader from '../shared/Loader'

export default{
	components:{
		loader
	},
	mounted: function(){

	},
	props: {
		course:null
	},
	data: function(){
		return {
			isEditing: false,
			isLoading: false
		}
	},
	methods: {
		edit: function(){
			this.isEditing = true;
			console.log("vamos a editar")
		},
		update: function(){
			this.isLoading = true;

			axios.put("/course/"+this.course.id, {
				name: this.course.name
			})
			.then(resp => {
				this.isLoading = false
				this.isEditing = false;
				console.log(resp)
			})
			.catch(err => {
				this.isLoading = false
				this.isEditing = false;
				console.log(err)
			});
		},
		deleteCourse: function(){
			axios.delete("/course/"+this.course.id)
			.then(resp => {
				this.$emit('deleted')
				console.log(resp)
			})
			.catch(err => {
				console.log(err)
			})
		}
	},
	computed: {
		name: function(){
			return this.course.name
		},
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