<script>
  export let camX=0, camY=0
  import {
    PerspectiveCamera,
    DirectionalLight,
    AmbientLight,
    Mesh,
    useFrame,
    Object3DInstance,
  } from "@threlte/core";
  import {
    MeshStandardMaterial,
    IcosahedronGeometry,
    GridHelper,
    AxesHelper,
  } from "three";
  import { tweened } from "svelte/motion";
  import { Text } from "@threlte/extras";
  import ClickableCube from "./ClickableCube.svelte";
  let textLabel = "uwu";

  const t = tweened(3, { duration: 1000 });

  let r = 0; //useframe hook updates every frame
  useFrame(() => {
    let direction = -0.01;
    r += direction;
  });
</script>

<PerspectiveCamera position={{ y: 5, z: 10 }} lookAt={{ y: 0 }} />
<Object3DInstance object={new GridHelper(100, 100)} />
<DirectionalLight />
<AmbientLight />

<ClickableCube>

  <Object3DInstance object={new AxesHelper(5)} />
  <Text
  text={r.toPrecision(2)}
  fontSize={0.5}
  position={{ x: 1 }}
  color={"black"}
  />
  
</ClickableCube>
