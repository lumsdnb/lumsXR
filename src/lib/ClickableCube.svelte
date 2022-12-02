<script>
  import {

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
  let textLabel = "uwu";

  const t = tweened(3, { duration: 1000 });

  let r = 0; //useframe hook updates every frame
  useFrame(() => {
    let direction = -0.01;
    r += direction;
  });
</script>

<Mesh
  geometry={new IcosahedronGeometry()}
  material={new MeshStandardMaterial({ color: "seagreen" })}
  rotation={{ y: r }}
  position={{ x: $t }}
  interactive
  on:click={() => ($t = $t > 0 ? -3 : 3)}
>
  <Object3DInstance object={new AxesHelper(5)} />
  <Text
    text={r.toPrecision(2)}
    fontSize={0.5}
    position={{ x: 1 }}
    color={"black"}
  />
</Mesh>
