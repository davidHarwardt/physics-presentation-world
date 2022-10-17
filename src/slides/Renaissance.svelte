<script lang="ts">
    import {
    Group,
    Line,
        Mesh, PointLight, useFrame
    } from "@threlte/core";
    import Kepler from "../lib/Kepler.svelte";
    import * as planets from "./textures";

    import {
        SphereGeometry,
        MeshStandardMaterial,
        LineBasicMaterial,
        EdgesGeometry,
        CircleGeometry,
    } from "three";

    let earthGroup: Group;
    let moonGroup: Group;

    useFrame((_, dt) => {
        earthGroup.group.rotateY(dt * (1 / 365) * 100);
        moonGroup.group.rotateY(dt * (1 / 30) * 100);
    });

</script>

<Mesh
    material={new MeshStandardMaterial({ map: planets.sun, lightMap: planets.sun, lightMapIntensity: 0.7 })}
    geometry={new SphereGeometry(10)}/>

<PointLight
    intensity={0.3}/>

<Kepler
    texture={planets.mercury}
    orbitRadius={57.9}
    planetRadius={4.8}
    orbitDuration={88}/>

<Kepler
    texture={planets.venus}
    orbitRadius={108.2}
    planetRadius={12.1}
    orbitDuration={224.7}/>

<!-- <Kepler
    texture={planets.earth}
    orbitRadius={149.6}
    planetRadius={12.7}
    orbitDuration={365.2}>
</Kepler> -->
<Line
    rotation={{ x: -Math.PI / 2 }}
    material={new LineBasicMaterial({ color: "#ffffff",  })}
    geometry={new EdgesGeometry(new CircleGeometry(149.6, 50))}/>

<Group bind:this={earthGroup}>
    <Mesh
        position={{ x: 149.6 }}
        material={new MeshStandardMaterial({ map: planets.earth })}
        geometry={new SphereGeometry(12.7)}/>

    <Line
        position={{ x: 149.6 }}
        rotation={{ x: -Math.PI / 2 }}
        material={new LineBasicMaterial({ color: "#ffffff",  })}
        geometry={new EdgesGeometry(new CircleGeometry(20, 50))}/>

    <Group bind:this={moonGroup} position={{ x: 149.6 }}>

        <Mesh
            position={{ x: 20 }}
            material={new MeshStandardMaterial({ map: planets.moon })}
            geometry={new SphereGeometry(2)}/>
    </Group>
</Group>



<Kepler
    texture={planets.mars}
    orbitRadius={227.9}
    planetRadius={6.7}
    orbitDuration={687}/>

<Kepler
    texture={planets.jupiter}
    orbitRadius={778.6}
    planetRadius={14.2}
    orbitDuration={4331}/>

<Kepler
    texture={planets.saturn}
    orbitRadius={1433.5}
    planetRadius={12.0}
    orbitDuration={10747}/>

<Kepler
    texture={planets.uranus}
    orbitRadius={2872.5}
    planetRadius={51.725}
    orbitDuration={30589}/>

<Kepler
    texture={planets.neptune}
    orbitRadius={4900.5}
    planetRadius={44.5}
    orbitDuration={30589}/>