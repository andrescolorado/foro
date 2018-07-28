<template>
	<div class="">
		<navbar-teacher @logged="setUser"></navbar-teacher>
		<div class="container">
			<panel>
				<template slot="title">
					
				</template>
				<template slot="body">
					<div class="aaa">
						<forum 
							v-for="forum in forums" 
							:key="forum.id" 
							:forum="forum"
							:controls="false" 
							:role="getRole()">
						</forum>
					</div>
				</template>
			</panel>
		</div>
	</div>
</template>

<script>
import navbarTeacher from './navbar'
import panel from '../shared/Panel'
import forum from '../forum/rowItem1'

export default{
	components:{
		navbarTeacher, panel, forum
	},
	props:{

	},
	mounted: function(){
	},
	data: function(){
		return {
			forums: null,
			user:null,
		}
	},
	methods:{
		setUser: function(user){
			this.user = user;

			this.getForums();
		},
		getForums: function(){
			axios.get("/api/student/"+this.user.id+"/forums")
			.then(resp => {
				this.forums = resp.data;
				console.log(this.forums);
			})
			.catch(err => {

			});
		},
		getRole: function(){
			return 'student';
		}
	}
}
</script>