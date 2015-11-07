import THREE from 'three';

import InitScene from './initScene/initScene';
import Render from './render/render';
import error from '../shared/errorMessages';
import './game.css';

import initMobs from './initMobs/initMobs';

// Main game module.
const game = function game() {
    const scene = new THREE.Scene();
    const renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
    const light = new THREE.AmbientLight(0xffffff);
    const camera = InitScene({
        scene: scene,
        renderer: renderer,
        light: light,
        camera: {
            type: 'PerspectiveCamera',
            angle: 45,
            aspectRatio: window.innerWidth / window.innerHeight,
            nearPlane: 1,
            farPlane: 500,
            position: {
                z: 15
            }
        }
    });

    // Array of all mobs, players and the world enviroment since it can be modified by players.
    const sprites = [];

    // Initialize all the mobs and get an array of all their names.
    const mobs = initMobs({
        scene: scene
    });

    // Merge the mobs into the array of sprites that will be rendered.
    sprites.push(...mobs);

    // Render the scene.
    Render({
        renderer: renderer,
        scene: scene,
        camera: camera,
        sprites: sprites,
        // The callback is run every tick of the main render. It co-ordinates running all sprite heartbeats.
        callback: function callback (input) {
            const sprites = input && input.sprites;
            const scene = input && input.scene;

            if (!sprites) {
                throw new Error(error.input.required);
            }

            sprites.map(function (spriteName) {
                const sprite = scene.getObjectByName(spriteName)

                if (sprite && sprite.userData && sprite.userData.heartbeat) {
                    sprite.userData.heartbeat(sprite);
                }
            });
        }
    });
};

module.exports = game;
