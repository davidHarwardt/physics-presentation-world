import { TextureLoader } from "three";

import earthTexture from "../assets/planets/earth.jpg";
const earth = new TextureLoader().load(earthTexture);

import jupiterTexture from "../assets/planets/jupiter.jpg";
const jupiter = new TextureLoader().load(jupiterTexture);

import marsTexture from "../assets/planets/mars.jpg";
const mars = new TextureLoader().load(marsTexture);

import mercuryTexture from "../assets/planets/mercury.jpg";
const mercury = new TextureLoader().load(mercuryTexture);

import moonTexture from "../assets/planets/moon.jpg";
const moon = new TextureLoader().load(moonTexture);

import neptuneTexture from "../assets/planets/neptune.jpg";
const neptune = new TextureLoader().load(neptuneTexture);

import saturnTexture from "../assets/planets/saturn.jpg";
const saturn = new TextureLoader().load(saturnTexture);

import sunTexture from "../assets/planets/sun.jpg";
const sun = new TextureLoader().load(sunTexture);

import uranusTexture from "../assets/planets/uranus.jpg";
const uranus = new TextureLoader().load(uranusTexture);

import venusTexture from "../assets/planets/venus.jpg";
const venus = new TextureLoader().load(venusTexture);

import starsTexture from "../assets/planets/stars.jpg";
const stars = new TextureLoader().load(starsTexture);

export {
    earth,
    jupiter,
    mars,
    mercury,
    moon,
    neptune,
    saturn,
    sun,
    uranus,
    venus,
    stars,
}
