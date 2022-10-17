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

    import mittelalterTexture from "../assets/mittelalter.jpg";
    const mittelalter = new TextureLoader().load(mittelalterTexture);

</script>


<PointLight
    position={{ y: 10, x: 10, z: 20 }}
    intensity={0.2}/>

<Mesh
    geometry={new PlaneGeometry(70, 50)}
    material={new MeshStandardMaterial({ map: mittelalter })}/>
