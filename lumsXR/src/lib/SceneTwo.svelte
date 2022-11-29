<script>
    import { MeshStandardMaterial, BoxGeometry, Color, RGBA_ASTC_10x10_Format } from "three";
    import { PerspectiveCamera,
        DirectionalLight,
        AmbientLight,
        OrbitControls,
        Mesh
     } from "@threlte/core";
    import { GLTF, Float } from "@threlte/extras";

    const url = "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf"

</script>

<PerspectiveCamera
position={{ y: 5, z: 10 }}
lookAt={{ y: 0 }}>
    <OrbitControls />
</PerspectiveCamera>

<DirectionalLight shadow position={{x: 1, y: 10, z: -1}}
/>

<Float rotationIntensity={1}>
    <GLTF {url} scale={20} castShadow/>
</Float>

<Mesh 
geometry={new BoxGeometry}
material={new MeshStandardMaterial({color: 'red'})}
position={{ y: -1}}
scale={{x: 15, y: 0.2, z: 15}}
receiveShadow
/>