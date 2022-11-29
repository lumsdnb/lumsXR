<script lang="ts">
  import {
    DirectionalLight,
    Group,
    Mesh,
    Object3DInstance,
    OrthographicCamera,
    useFrame,
    useThrelte,
  } from "@threlte/core";
  import { Environment } from "@threlte/extras";
  import {
    World,
    AutoColliders,
    CollisionGroups,
    Debug,
  } from "@threlte/rapier";
  import { spring } from "svelte/motion";
  import {
    BoxGeometry,
    GridHelper,
    Group as ThreeGroup,
    Mesh as ThreeMesh,
    MeshStandardMaterial,
    Vector3,
  } from "three";
  import Door from "./Door.svelte";
  import Ground from "./Ground.svelte";
  import Player from "./Player.svelte";
</script>

<World />
