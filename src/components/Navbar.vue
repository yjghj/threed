<template>
	<nav class="navbar">
		{{ msg }}
	</nav>
</template>

<script>
export default {
	name: 'navbar',
	data () {
		return {
			msg: 'title'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
	display: flex;
	background: #ccc;
	height: 30px;
	width: 100%;
}
</style>
