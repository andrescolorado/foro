<template>
	<div class="container">
		<div class="mt-5 p-5 shadow-sm border bg-white">
			<h4>Tu cuenta esta inactiva</h4>
			<p>
				Debes esperar que el administrador active tu cuenta para poder ingresar
			</p>
			<a href="/logout">
				Cerrar Sesión
			</a>
		</div>
	</div>
</template>

<script>
import panel from '../shared/Panel'

export default{
	components:{
		panel
	}
}
</script>