<template>
	<navbar>
		<template slot="items">
			<li class="nav-item active">
				<a class="nav-link" href="/student">Inicio</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/student/courses">Mis Cursos</a>
			</li>
			<!-- <li class="nav-item">
				<a class="nav-link" href="/student/forums">Mis Foros</a>
			</li> -->
		</template>

		<template slot="items_right">
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          {{ fullName }}
		          <font-awesome-icon icon="chevron-down"></font-awesome-icon>
		        </a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
		        	<a class="dropdown-item" href="#"
						onclick="event.preventDefault();
						document.getElementById('logout-form').submit();">
						Salir
					</a>
					<form id="logout-form" action="/logout" method="GET" style="display: none;">
					</form>
		        </div>
			</li>
		</template>
	</navbar>
</template>

<script>
import navbar from '../shared/Navbar.vue'

export default{
	components: {
		navbar
	},
	mounted: function(){
		this.getUserLogged()
	},
	data: function(){
		return {
			userLogged: {
				type: Object
			}
		}
	},
	methods:{
		getUserLogged: function(){
			axios.get("/userLogged")
			.then(resp =>{
				this.userLogged = resp.data;
				this.$emit('logged', this.userLogged);
			})
			.catch(err =>{
				console.log(err)
			});
		}
	},
	computed: {
		fullName: function(){
			return this.userLogged.name+' '+this.userLogged.last_name;
		}
	}
}
</script>