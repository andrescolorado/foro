<template>
	<modal v-if="stateModal" :width="50">
		<template slot="header">
			<h5>Crear curso</h5>
		</template>
		<template slot="body"> 
			<form action="" @submit.prevent="login">
                <div class="w-100 p-5 m-auto">
                    <div class="form-group">
                        <label class="">Nombre</label>
                        <input type="text" class="form-control shadow-sm" placeholder="Nombre del curso" v-model="course.name">
                    </div>
                    <div class="form-group">
                        <label class="">Descripción (opcional)</label>
                        <textarea class="form-control" v-model="course.description"></textarea>
                    </div>
                </div>
            </form>
		</template>
		<template slot="footer">
			<div class="flex items-center justify-between">
                <button class="btn btn-secondary" @click.prevent="$emit('cancel')">
                    Cancelar
                </button>
                <button class="btn btn-primary" @click.prevent="saveCourse">
                    <span v-show="!isLoading">
                        Crear Curso
                    </span>
                    <loader v-bind:style="[styles]" v-show="isLoading"></loader>
                </button>
            </div>
		</template>
	</modal>
</template>

<script>
import modal from '../shared/modal'
import loader from '../shared/Loader'
export default{
	components:{
		modal, loader
	},
	props:{
		stateModal:false,
		teacher:null
	},
	data: function(){
		return {
			isLoading: false,
			course:{
				name:null,
				description:null
			}
		}
	},
	methods: {
		saveCourse: function(){
			this.isLoading = true;

			axios.post("/course", {
				name: this.course.name,
				description: this.course.description,
				user_id:this.teacher.id
			})
			.then(resp => {
				this.isLoading = false;
				this.$emit('created', resp.data)
				this.$emit('cancel')
			})
			.catch(err => {
				this.isLoading = false;
				console.log(err)
			})
		},
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