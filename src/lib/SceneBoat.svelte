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

  const url =
    "https://raw.githubusercontent.com/lumsdnb/lumsXR/main/GLTF_models/bote.gltf"
</script>

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