<script>

  export let posY=1, posZ=1
  export let imgURL = 'https://via.placeholder.com/600/24f355'

  import {
    Mesh,
    useFrame,
    Object3DInstance, useTexture
  } from "@threlte/core";
  import {
    MeshStandardMaterial,
    IcosahedronGeometry,
    GridHelper,
    AxesHelper,
    BoxGeometry,
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

  const texture = useTexture(imgURL, {
	onError: (error) => {
		console.warn(`An error occured loading the texture: ${error.message}`)
	}
})

</script>

<Mesh
  geometry={new BoxGeometry()}
  material={new MeshStandardMaterial({ texture})}
  rotation={{ y: r }}
  position={{ x: $t, y: posY, z: posZ }}
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
