<script>
  import SceneOne from "$lib/SceneOne.svelte";
  import SceneTwo from "$lib/SceneTwo.svelte";
  import SceneBoat from "$lib/SceneBoat.svelte";
  import { Canvas } from "@threlte/core";

  let camX=0,camY=0

  function onKeyDown(e){
    console.log(camX);
    console.log(camY);
    e.preventDefault();
    switch (e.keyCode) {
      case 38:
        console.log("up");
        camX+=1
        break;
      case 87:
        console.log("up");
        camX+=1
        break;
      case 40:
        console.log("down");
        camX-=1
        break;
        case 83:
        console.log("down");
        camX-=1
        break;
        case 37:
        console.log("left");
        camY-=1
        break;
        case 65:
        console.log("left");
        camY-=1
        break;
        case 39:
        console.log("right");
        camY+=1
        break;
        case 68:
        console.log("right");
        camY+=1
        break;
      default:
        break;
    }
  }

</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

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
      <SceneBoat camX={camX} camY={camY}/>
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
