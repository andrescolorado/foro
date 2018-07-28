<template>
	<modal v-if="stateModal" :width="70">
		<template slot="header">
			<h5>Cambiar Contraseña</h5>
		</template>
		<template slot="body"> 
			<form action="" @submit.prevent="">
                <div class="w-100 p-5 m-auto">
                    <div class="form-group">
                        <label class="">Contraseña</label>
                        <input type="password" class="form-control shadow-sm" placeholder="********" v-model="password">
                        <span class="text-danger">{{ error.password }}</span>
                    </div>
                </div>
            </form>
		</template>
		<template slot="footer">
			<div class="flex items-center justify-between">
                <!-- <button class="btn btn-secondary" @click.prevent="$emit('cancel')">
                    Cancelar
                </button> -->
                <button class="btn btn-primary" @click.prevent="changePassword">
                    <span v-show="!isLoading">
                        Guardar
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
		user:false,
	},
	data: function(){
		return {
			isLoading: false,
			password:null,
			error:{
				password:null
			}
		}
	},
	methods: {
		changePassword: function(){
			this.isLoading = true;

			axios.put("/user/"+this.user.id+"/changePassword", {
				password: this.password,
			})
			.then(resp => {
				console.log(resp.data);
				this.isLoading = false;
				this.$emit('passwordChanged');
				this.$emit('cancel')

			})
			.catch(err => {
				this.isLoading = false;
				let errors = err.response

    			if(errors.statusText == 'Unprocessable Entity' || errors.status == 422){
    				let data = errors.data.errors;

                    for(let key in this.error){
                        this.error[key] = [];

                        let errorMessage = data[key];

                        console.log('key '+ key);
                        console.log('msg '+errorMessage);

                        if(errorMessage)
                            this.error[key] = errorMessage[0];
                    }
    			}
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