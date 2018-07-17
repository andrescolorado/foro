<template>
	<nav class="navbar navbar-expand-lg navbar-light navbar-laravel mb-4">
		<div class="container">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<a class="navbar-brand" href="#">Navbar</a>

			<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
				<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
					<slot name="items"></slot>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<slot name="items_right"></slot>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {

}
</script>