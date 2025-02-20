

class Ground {
    constructor (input) {
        const width = input && input.width || 1000;
        const height = input && input.height || 1000;

        const texture = THREE.ImageUtils.loadTexture('ground.jpg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(width / 256, height / 256);

        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(width, height),
            new THREE.MeshLambertMaterial({map: texture, side: THREE.DoubleSide})
        );

        mesh.rotation.set(-90 * Math.PI / 180, 0, 0);

        mesh.name = 'ground';

        return mesh;
    }
}

module.exports = Ground;
