<template>
    <div class="container mx-auto h-full flex justify-center items-center pt-12">
        <div class="w-1/3">
            <h1 class="font-hairline mb-6 text-center">Foro UNAP</h1>
            <form action="" @submit.prevent="login">
                <div class="border-teal p-8 border-t-4 bg-white mb-6 rounded-lg shadow">
                    <div class="mb-4">
                        <label class="font-bold text-grey-darker block mb-2">Usuario</label>
                        <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="pepito@ejemplo.com" v-model="user.username">
                    </div>

                    <div class="mb-4">
                        <label class="font-bold text-grey-darker block mb-2">Contraseña</label>
                        <input type="password" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="*********" v-model="user.password">
                    </div>

                    <div class="flex items-center justify-between">
                        <button class="bg-teal-dark hover:bg-teal text-white py-2 px-4 rounded">
                            <span v-show="!isLoading">
                                Iniciar sesión
                            </span>
                            <loader v-bind:style="[styles]" v-show="isLoading"></loader>
                        </button>

                        <!-- <a class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right" href="#">
                            Forgot Password?
                        </a> -->
                    </div>
                </div>
            </form>
            <div class="text-center">
                <p class="text-grey-dark text-sm">No tienes cuenta? <a href="/register" class="no-underline text-blue font-bold">Crea una cuenta</a>.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    },
    data(){
        return {
            isLoading: false,
            isError: false,

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

            axios.post('/login', {
                username: this.user.username,
                password: this.user.password
            }).then(data => {
                this.isLoading = false;
                console.log(data)
            }).catch(err => {
                this.isLoading = false;
                console.log(err)
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
