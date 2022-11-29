<script>
	import SceneOne from "$lib/SceneOne.svelte";
import { Canvas } from "@threlte/core";
</script>

<section>
	<h2>Scene here</h2>

		<div class="canvas-wrapper">
		<Canvas>
			<SceneOne/>
		</Canvas>
	</div>

</section>

<style>
	.canvas-wrapper {
		position: relative;
		border: 1px solid black;
		height: 500px;
	}
</style>