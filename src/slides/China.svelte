<script lang="ts">
    import {
        Mesh, PointLight
    } from "@threlte/core";

    import {
        SphereGeometry,
        MeshStandardMaterial,
        PlaneGeometry,
        TextureLoader,
    } from "three";

    import animalTexture from "../assets/animal.jpg";
    const animal = new TextureLoader().load(animalTexture);

</script>


<PointLight
    position={{ y: 10, x: 10, z: 20 }}
    intensity={0.2}/>

<Mesh
    geometry={new PlaneGeometry(70, 50)}
    material={new MeshStandardMaterial({ map: animal })}/>
