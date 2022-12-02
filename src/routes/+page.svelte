<script>
  import SceneFP from "$lib/firstperson/SceneFP.svelte"
  import SceneOne from "$lib/SceneOne.svelte";
  import SceneTwo from "$lib/SceneTwo.svelte";
  import SceneBoat from "$lib/SceneBoat.svelte";
  import { Canvas } from "@threlte/core";


</script>

<section>
  <h2>first person</h2>

  <div class="canvas-wrapper">
    <Canvas>
      <SceneFP/>
    </Canvas>
  </div>
</section>

<section>
  <h2>Scene 1</h2>

  <div class="canvas-wrapper">
    <Canvas>
      <SceneOne/>
    </Canvas>
  </div>
</section>

<section>
  <h2>Scene 2</h2>
  <div class="canvas-wrapper">
    <Canvas>
      <SceneTwo />
    </Canvas>
  </div>
</section>

<section>
  <h2>boat scene</h2>
  <div class="canvas-wrapper">
    <Canvas>
      <SceneBoat />
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
