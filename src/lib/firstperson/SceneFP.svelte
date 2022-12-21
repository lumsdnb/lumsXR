<script>
    import { World } from '@threlte/rapier';
    import { T,AmbientLight, DirectionalLight, Mesh, useFrame, Object3DInstance, } from '@threlte/core'
	import { AutoColliders, CollisionGroups } from '@threlte/rapier'
	import { BoxGeometry, MeshStandardMaterial } from 'three'
	import Door from '$lib/firstperson/Door.svelte'
	import Player from '$lib/firstperson/Character.svelte'
  import ClickableCube from '../ClickableCube.svelte';
  export let data;
  console.log(data.images[0])
  let spawnPoints = [[3,-4],[-1,-1],[2,3],[0,4]]
  let randomSpawn = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
  console.log(randomSpawn);
  console.log(randomSpawn)
  console.log(randomSpawn)

</script>


<World>

<DirectionalLight shadow position={{ y: 20, x: 8, z: -3 }} />
<AmbientLight intensity={0.2} />

<CollisionGroups groups={[0, 15]}>
	<AutoColliders shape={'cuboid'} position={{ y: -0.5 }}>
		<Mesh
			receiveShadow
			geometry={new BoxGeometry(100, 1, 100)}
			material={new MeshStandardMaterial()}
		/>
	</AutoColliders>
</CollisionGroups>

<CollisionGroups groups={[0]}>
	<Player position={{x:randomSpawn[0], z:randomSpawn[1], y: 2 }} />
	<Door />

	<!-- WALLS -->
	<AutoColliders shape={'cuboid'}>
		<Mesh
			receiveShadow
			castShadow
			position={{ y: 1.275, x: 30 + 0.7 + 0.15 }}
			geometry={new BoxGeometry(60, 2.55, 0.15)}
			material={new MeshStandardMaterial({
				transparent: true,
				opacity: 0.5,
				color: 0x333333
			})}
		/>
		<Mesh
			receiveShadow
			castShadow
			position={{ y: 1.275, x: -30 - 0.7 - 0.15 }}
			geometry={new BoxGeometry(60, 2.55, 0.15)}
			material={new MeshStandardMaterial({
				transparent: true,
				opacity: 0.5,
				color: 0x333333
			})}
		/>
		<Mesh
			receiveShadow
			castShadow
			position={{ y: 1.275, x: 0, z: 5}}
			geometry={new BoxGeometry(15, 2.55, 0.15)}
			material={new MeshStandardMaterial({
				transparent: false,
				opacity: 0.8,
				color: 0x333333
			})}
		
	/>
	<Mesh
		receiveShadow
		castShadow
		position={{ y: 1.275, x: 5, z: 2}}
		rotation={{y:1.5708}}
		geometry={new BoxGeometry(6, 2.55, 0.15)}
		material={new MeshStandardMaterial({
			transparent: false,
			opacity: 0.8,
			color: 0x333333
	})}
	/>
	<Mesh
		receiveShadow
		castShadow
		position={{ y: 1.275, x: -5, z: 2}}
		rotation={{y:1.5708}}
		geometry={new BoxGeometry(6, 2.55, 0.15)}
		material={new MeshStandardMaterial({
			transparent: false,
			opacity: 0.8,
			color: 0x333333
	})}
	/>
	</AutoColliders>
</CollisionGroups>



<ClickableCube imgURL={data.images[0].id} posZ=4/>

</World>
