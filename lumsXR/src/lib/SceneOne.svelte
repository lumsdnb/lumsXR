<script>
    import { PerspectiveCamera,
        DirectionalLight,
        AmbientLight,Mesh
     } from "@threlte/core";
    import { MeshStandardMaterial, IcosahedronGeometry   } from "three";
</script>


<PerspectiveCamera
position={{y: 5, z: 10}}
lookAt={{y:0}}>
</PerspectiveCamera>

<DirectionalLight/>
<AmbientLight/>

<Mesh
geometry={new IcosahedronGeometry()}
material={new MeshStandardMaterial({color: 'seagreen'})}
/>