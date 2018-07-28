<template>
	<div class="">
		<navbar-teacher></navbar-teacher>
		<div class="container">
			<forum-show 
				:course="course" 
				:forum="forum">
			</forum-show>
		</div>
	</div>
</template>

<script>
import navbarTeacher from './NavbarTeacher'
import forumShow from '../course/ShowForum'

export default{
	components:{
		navbarTeacher, forumShow
	},
	props:{
		forum:null,
		course:null
	}
}
</script>