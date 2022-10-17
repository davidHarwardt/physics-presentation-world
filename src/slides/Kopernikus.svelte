<script lang="ts">
    import {
    Group,
        Mesh, PointLight, useFrame
    } from "@threlte/core";
    import PlanetShell from "../lib/PlanetShell.svelte";
    import * as planets from "./textures";

    import {
        SphereGeometry,
        MeshStandardMaterial,
        DoubleSide,
    } from "three";

    let outerMesh: Mesh;
    let earthGroup: Group;
    let moonGroup: Group;

    useFrame((_, dt) => {
        outerMesh.mesh.rotateY(dt * 0.01);
        earthGroup.group.rotateY(dt * 1.2)
        moonGroup.group.rotateY(dt * 5.0);
    });
</script>

<Mesh
    material={new MeshStandardMaterial({ map: planets.sun, lightMap: planets.sun, emissiveMap: planets.sun })}
    geometry={new SphereGeometry(2.5)}/>

<PointLight
    intensity={2}/>

<PlanetShell
    orbitRadius={5}
    planetRadius={0.8}
    texture={planets.mercury}
    orbitSpeed={1.6}/>

<PlanetShell
    orbitRadius={10}
    planetRadius={0.9}
    texture={planets.venus}
    orbitSpeed={1.3}/>


<Mesh
    material={new MeshStandardMaterial({ transparent: true, opacity: 0.05, color: "#dddddd" })}
    geometry={new SphereGeometry(15)}/>

<Group bind:this={earthGroup}>
    <Mesh
        position={{ x: 15 }}
        material={new MeshStandardMaterial({ map: planets.earth })}
        geometry={new SphereGeometry(1.0)}/>
    
    <Group position={{ x: 15 }} bind:this={moonGroup}>

        <Mesh
            position={{ x: 2 }}
            material={new MeshStandardMaterial({ map: planets.moon })}
            geometry={new SphereGeometry(0.3)}/>
    </Group>
</Group>

<PlanetShell
    orbitRadius={25}
    planetRadius={0.8}
    texture={planets.mars}
    orbitSpeed={0.5}/>

<PlanetShell
    orbitRadius={30}
    planetRadius={2.0}
    texture={planets.jupiter}
    orbitSpeed={0.3}/>
    
<PlanetShell
    orbitRadius={35}
    planetRadius={1.8}
    texture={planets.saturn}
    orbitSpeed={0.2}/>

<Mesh
    bind:this={outerMesh}
    material={new MeshStandardMaterial({ map: planets.stars, color: "#dddddd", side: DoubleSide })}
    geometry={new SphereGeometry(200)}/>

