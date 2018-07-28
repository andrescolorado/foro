<template>
    <div class="mt-5">
        <div class="w-50 m-auto shadow-sm bg-white">
            <h1 class="pt-5 text-center">Foro UNAP</h1>
            <form action="" @submit.prevent="registerUser">
	            <div class="w-100 px-5 m-auto">
                    <div class="form-row">
    	                <div class="col form-group">
    	                    <label class="">Nombres</label>
    	                    <input type="text" class="form-control shadow" placeholder="Pepito" v-model="user.name">
    	                    <p class="text-danger text-xs italic" v-show="errors.name.state">{{ errors.name.message }}</p>
    	                </div>
    	                
    	                <div class="col form-group">
    	                    <label class="">Apellidos</label>
    	                    <input type="text" class="form-control shadow" placeholder="Perez" v-model="user.last_name">
    	                    <p class="text-danger text-xs italic" v-show="errors.last_name.state">{{ errors.last_name.message }}</p>
    	                </div>
                    </div>
	                
                    <div class="form-row">
    	                <div class="col form-group">
    	                    <label class="">Usuario</label>
    	                    <input type="text" class="form-control shadow" placeholder="pepito123" v-model="user.username">
    	                    <p class="text-danger text-xs italic" v-show="errors.username.state">{{ errors.username.message }}</p>
    	                </div>

    	                <div class="col form-group">
    	                    <label class="">Tipo de usuario</label>
    	                    <select class="form-control shadow" v-model="user.typeuser">
    	                    	<!-- <option value="administrator">Administrador</option> -->
                                <option value="student">Estudiante</option>
    	                    	<option value="teacher">Docente</option>
    	                    </select>
    	                    <p class="text-danger text-xs italic" v-show="errors.typeuser.state">{{ errors.typeuser.message }}</p>
    	                </div>
                    </div>
	                
	                <div class="form-group">
	                    <label class="">Correo electronico</label>
	                    <input type="text" class="form-control shadow" placeholder="pepito@ejemplo.com" v-model="user.email">
	                    <p class="text-danger text-xs italic" v-show="errors.email.state">{{ errors.email.message }}</p>
	                </div>
                    
                    <div class="form-row">
    	                <div class="col form-group">
    	                    <label class="">Contraseña</label>
    	                    <input type="password" class="form-control shadow" placeholder="*********" v-model="user.password">
    	                    <p class="text-danger text-xs italic" v-show="errors.password.state">{{ errors.password.message }}</p>
    	                </div>
    	                
    	                <div class="col form-group">
    	                    <label class="">Confirmar contraseña</label>
    	                    <input type="password" class="form-control shadow" placeholder="*********" v-model="user.password_confirmation">
    	                    <p class="text-danger text-xs italic" v-show="errors.password_confirmation.state">{{ errors.password_confirmation.message }}</p>
    	                </div>
                    </div>

	                <div class="pb-3">
	                    <button class="btn btn-primary btn-block d-flex justify-content-center shadow-sm mb-1">
	                        <span class="mr-1">
	                        	{{ textRegister }}
	                        </span>
	                        <loader v-bind:style="[styles]" v-show="isLoading"></loader>
	                    </button>
                        <div class="text-center">
                            <p class="text-grey-dark text-sm">Ya tengo una cuenta? <a href="/login" class="no-underline text-blue font-bold">Iniciar sesión</a>.</p>
                        </div>
	                </div>  
	            </div>
            </form>
            
        </div>
    </div>
</template>

<script>
import Loader from '../shared/Loader.vue';

export default {
    components: {
        'loader': Loader
    },
    mounted() {
        console.log('Component mounted.')
    },
    data(){
    	return {
    		isLoading: false,
    		isError: false,
            textRegister: 'Registarse',
    		user: {
    			name:'',
    			last_name:'',
    			typeuser:'',
    			username:'',
    			email:'',
    			password:'',
    			password_confirmation:'',
    		},
    		errors: {
    			name: {
					state: false, message:''
    			},
    			last_name: {
					state: false, message:''
    			},
    			username: {
					state: false, message:''
    			},
    			typeuser: {
					state: false, message:''
    			},
    			email: {
					state: false, message:''
    			},
    			password: {
					state: false, message:''
    			},
    			password_confirmation: {
    				state: false, message:''
    			}
    		}
    	}
    },
    methods: {
    	clearData: function(){
    		this.errors.name.state = false;
    		this.errors.name.message = '';

    		this.errors.last_name.state = false;
    		this.errors.last_name.message = '';

    		this.errors.username.state = false;
    		this.errors.username.message = '';

    		this.errors.typeuser.state = false;
    		this.errors.typeuser.message = '';

    		this.errors.email.state = false;
    		this.errors.email.message = '';

    		this.errors.password.state = false;
    		this.errors.password.message = '';

    		this.errors.password_confirmation.state = false;
    		this.errors.password_confirmation.message = '';
    	},
    	registerUser: function(){
    		this.clearData()
    		this.isLoading = true;
            this.textRegister = 'Registrando';
    		
    		axios.post('/register', {
    			name: this.user.name,
    			last_name: this.user.last_name,
    			typeuser: this.user.typeuser,
    			username: this.user.username,
    			email: this.user.email,
    			password: this.user.password,
    			password_confirmation: this.user.password_confirmation
    		}).then(data => {
    			this.isLoading = false;
                window.location.href = data.data.redirect;
                this.textRegister = 'Un momento por favor';
    		}).catch(err => {
    			this.isLoading = false;
                this.textRegister = 'Registarse';

    			let errors = err.response

    			if(errors.statusText == 'Unprocessable Entity' || errors.status == 422){
    				if(errors.data){
    					if(errors.data.errors.name){
    						this.errors.name.state = true
    						this.errors.name.message = _.isArray(errors.data.errors.name) ? errors.data.errors.name[0] : errors.data.name
    					}
    					if(errors.data.errors.last_name){
    						this.errors.last_name.state = true
    						this.errors.last_name.message = _.isArray(errors.data.errors.last_name) ? errors.data.errors.last_name[0] : errors.data.last_name
    					}
    					if(errors.data.errors.username){
    						this.errors.username.state = true
    						this.errors.username.message = _.isArray(errors.data.errors.username) ? errors.data.errors.username[0] : errors.data.username
    					}
    					if(errors.data.errors.typeuser){
    						this.errors.typeuser.state = true
    						this.errors.typeuser.message = _.isArray(errors.data.errors.typeuser) ? errors.data.errors.typeuser[0] : errors.data.typeuser
    					}
    					if(errors.data.errors.email){
    						this.errors.email.state = true
    						this.errors.email.message = _.isArray(errors.data.errors.email) ? errors.data.errors.email[0] : errors.data.email
    					}
    					if(errors.data.errors.password){
    						this.errors.password.state = true
    						this.errors.password.message = _.isArray(errors.data.errors.password) ? errors.data.errors.password[0] : errors.data.password
    					}
    					if(errors.data.errors.password_confirmation){
    						this.errors.password_confirmation.state = true
    						this.errors.password_confirmation.message = _.isArray(errors.data.errors.password_confirmation) ? errors.data.errors.password_confirmation[0] : errors.data.password_confirmation
    					}
    				}
    			}
    		});
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
