<template>
	<modal v-if="stateModal" :width="70">
		<template slot="header">
			<h5>Crear Foro</h5>
		</template>
		<template slot="body"> 
			<form action="" @submit.prevent="login">
                <div class="w-100 p-5 m-auto">
                    <div class="form-group">
                        <label class="">Nombre</label>
                        <input type="text" class="form-control shadow-sm" placeholder="Nombre del foro" v-model="forum.name">
                    </div>
                    <div class="form-group">
                        <label class="">Estado</label>
                        <select name="" id="" class="form-control" v-model="forum.state">
                        	<option value="1">Abierto</option>
                        	<option value="0">Cerrado</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="">Descripción (opcional)</label>
                        <textarea class="form-control" v-model="forum.description"></textarea>
                    </div>
                </div>
            </form>
		</template>
		<template slot="footer">
			<div class="flex items-center justify-between">
                <button class="btn btn-secondary" @click.prevent="$emit('cancel')">
                    Cancelar
                </button>
                <button class="btn btn-primary" @click.prevent="saveForum">
                    <span v-show="!isLoading">
                        Crear Foro
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
		course:null
	},
	data: function(){
		return {
			isLoading: false,
			forum:{
				name:null,
				description:null,
				state:null
			}
		}
	},
	methods: {
		saveForum: function(){
			this.isLoading = true;

			axios.post("/forum", {
				name: this.forum.name,
				description: this.forum.description,
				state: this.forum.state,
				course_id:this.course.id
			})
			.then(resp => {
				this.isLoading = false;
				eventBus.$emit('forumCreated');
				
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