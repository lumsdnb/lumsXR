<script>
  export let camX=0, camY=0
  import {
    MeshStandardMaterial,
    BoxGeometry,
    AxesHelper, 
    IcosahedronGeometry
  } from "three";
  import {
    PerspectiveCamera,
    DirectionalLight,
    AmbientLight,
    OrbitControls,
    Mesh, Object3DInstance
  } from "@threlte/core";
  import { GLTF, Float } from "@threlte/extras";

  import { World } from '@threlte/rapier';
  import { AutoColliders, CollisionGroups } from '@threlte/rapier'
  import Player from '$lib/firstperson/Character.svelte'


  const url =
    "https://raw.githubusercontent.com/lumsdnb/lumsXR/main/GLTF_models/bote.gltf"
</script>

<World>

  <PerspectiveCamera  position={{ x: camX, z: camY, y: 10 }}>
    <OrbitControls />
  </PerspectiveCamera>
  
  <DirectionalLight position={{ x: 1, y: 10, z: -1 }} >
  </DirectionalLight>
  
  <DirectionalLight position={{y:-25}}/>
  
  <Float rotationIntensity={1}>
    <GLTF {url} scale={20}  />
</Float>

<Mesh
geometry={new IcosahedronGeometry()}
material={new MeshStandardMaterial({ color: "seagreen" })}
position={{y:-25}}
>
<Object3DInstance object={new AxesHelper(5)} />

</Mesh>
<Player position={{ z: 2 }}/>
<CollisionGroups groups={[0, 15]}>
	<AutoColliders shape={'cuboid'} position={{ y: -1.9 }}>
		<Mesh
			receiveShadow
			geometry={new BoxGeometry(100, 1, 100)}
			material={new MeshStandardMaterial()}
		/>
	</AutoColliders>
</CollisionGroups>
</World>