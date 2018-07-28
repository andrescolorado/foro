<template>
    <div class="mt-5">
        <div class="w-50 m-auto shadow-sm bg-white">
            <h1 class="pt-5 text-center">Foro UNAP</h1>
            <div class="w-75 m-auto">
                <div class="alert alert-danger" role="alert" v-show="isError">
                    {{ msgErrorLogin }}
                </div>
            </div>
            <form action="" @submit.prevent="login">
                <div class="w-75 px-3 m-auto">
                    <div class="form-group">
                        <label class="">Usuario</label>
                        <input type="text" class="form-control shadow" placeholder="pepito@ejemplo.com" v-model="user.username">
                    </div>

                    <div class="form-group">
                        <label class="">Contraseña</label>
                        <input type="password" class="form-control shadow" placeholder="*********" v-model="user.password">
                    </div>

                    <div class="flex items-center justify-between pb-3">
                        <button class="btn btn-primary btn-block d-flex justify-content-center shadow-sm mb-1">
                            <span class="mr-1">
                                {{ textButtonLogin }}
                            </span>
                            <loader v-bind:style="[styles]" v-show="isLoading"></loader>
                        </button>

                        <!-- <a class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right" href="#">
                            Forgot Password?
                        </a> -->
                        <div class="text-center">
                            <p class="text-grey-dark text-sm">No tienes cuenta? <a href="/register" class="no-underline text-blue font-bold">Crea una cuenta</a>.</p>
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
            msgErrorLogin:'',
            textButtonLogin: 'Iniciar Sesión',
            user:{
                username:'',
                password:''
            },
            errors:{
                username:{
                    state:false,
                    message:''
                },
                password:{
                    state:false,
                    message:''
                }
            }
        }
    },
    methods: {
        login: function(){

            this.isLoading = true;
            this.textButtonLogin = 'Iniciando..';

            axios.post('/login', {
                username: this.user.username,
                password: this.user.password
            }).then(data => {
                this.isLoading = false;
                window.location.href = data.data.redirect;
                this.textButtonLogin = 'Un momento por favor.'
                console.log(data)
            }).catch(err => {
                this.isLoading = false;
                this.textButtonLogin = 'Iniciar Sesión';
                
                let errors = err.response
                
                this.isError = !errors.data.status;
                this.msgErrorLogin = errors.data.message;
                console.log(errors)
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
