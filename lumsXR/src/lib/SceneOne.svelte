<script>
    import { PerspectiveCamera,
        DirectionalLight,
        AmbientLight,Mesh,
        useFrame,
        Object3DInstance
     } from "@threlte/core";
    import { MeshStandardMaterial, IcosahedronGeometry, GridHelper, AxesHelper   } from "three";
    import { tweened } from "svelte/motion";

    const t = tweened(3,{duration: 1000})

    let r = 0; //useframe hook updates every frame
    useFrame(() => {
        r+= 0.01;
    })

</script>


<PerspectiveCamera
position={{y: 5, z: 10}}
lookAt={{y:0}}>
</PerspectiveCamera>
<Object3DInstance object={new GridHelper(100, 100)}/>
<DirectionalLight/>
<AmbientLight/>

<Mesh
geometry={new IcosahedronGeometry()}
material={new MeshStandardMaterial({color: 'seagreen'})}
rotation={{y: r}}
position={{x: $t}}
interactive
on:click={()=> $t = $t > 0 ? -3 : 3}
>
<Object3DInstance object={new AxesHelper(5)}/>
</Mesh>