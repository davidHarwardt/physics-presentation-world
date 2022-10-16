<script lang="ts">
    import {
        Mesh, PointLight
    } from "@threlte/core";

    import {
        SphereGeometry,
        MeshStandardMaterial,
        TextureLoader,
        PlaneGeometry,
    } from "three";

    import nutTexture from "../assets/nut.jpg";
    const nut = new TextureLoader().load(nutTexture);
</script>

<PointLight
    position={{ y: 10, x: 10, z: 20 }}
    intensity={0.2}/>

<Mesh
    geometry={new PlaneGeometry(70, 50)}
    material={new MeshStandardMaterial({ map: nut })}/>
