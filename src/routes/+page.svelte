<script>
  import SceneFP from "$lib/firstperson/SceneFP.svelte"
  import SceneOne from "$lib/SceneOne.svelte";
  import SceneTwo from "$lib/SceneTwo.svelte";
  import SceneBoat from "$lib/SceneBoat.svelte";
  import { T, Canvas } from "@threlte/core";

  export let data;

  import {player} from '$lib/playerStore.js'
</script>

<section>
  <h2>player position: {$player.position} rotation: {$player.rotation}</h2>

  <div class="canvas-wrapper">
    <Canvas>
      <SceneFP data={data}/>
    </Canvas>
  </div>
</section>

<!-- <section>
  <h2>Scene 1 - interactable object</h2>

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
</section> -->

<style>
  .canvas-wrapper {
    position: absolute;
    width: 100%;
    /* border: 1px solid black; */
    height: 500px;
  }
</style>
