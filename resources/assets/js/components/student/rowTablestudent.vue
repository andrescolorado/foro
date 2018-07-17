<template>
	<tr>
		<td>
			{{ student.name}}
		</td>
		<td>
			{{ student.last_name}}
		</td>
		<td>
			{{ student.username}}
		</td>
		<td>
			{{ student.email }}
		</td>
		<td>
			<span
			class="badge" :class="(student.state) ? 'badge-success' : 'badge-danger'">
			{{ (student.state) ? 'activo' : 'desactivado' }}
			</span>
		</td>
		<td>
			<a v-if="!student.state" href="" class="btn btn-sm btn-primary" @click.prevent="changeState(student.id, 1)" title="Activar">
				<font-awesome-icon icon="check" v-show="!isLoading" />
				<loader v-bind:style="[styles]" v-show="isLoading"></loader>
			</a>
			<a v-if="student.state" href="" class="btn btn-sm btn-danger" @click.prevent="changeState(student.id, 0)" title="Desactivar">
				<font-awesome-icon icon="window-close" v-show="!isLoading" />
				<loader v-bind:style="[styles]" v-show="isLoading"></loader>
			</a>
		</td>
	</tr>
</template>
<script>
import Loader from '../shared/Loader.vue';

export default{
	components:{
		Loader
	},
	props:{
		student: null
	},
	mounted(){

	},
	data(){
		return {
			isEditing:false,
			isSaving:false,
			isLoading: false,

			currentstudent: {
				type:Number
			}
		}
	},
	methods: {
		changeState: function(id, state){

			this.isLoading = true;

			axios.put("/user/changeState/"+id, {
				state: state
			})
			.then(resp => {
				this.isLoading = false;
				this.student.state = state;
			})
			.catch(err => {
				this.isLoading = false;
			});
		}
	},
	computed:{
		classObject: function () {
		    return {
		      // active: this.student.state,
		      'text-danger': true
		    }
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