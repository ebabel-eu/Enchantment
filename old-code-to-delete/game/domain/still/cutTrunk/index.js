

class CutTrunk {
    constructor (input) {
        const trunkTexture = THREE.ImageUtils.loadTexture('wood.jpg');

        const cutTrunk = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 3, 2, 5, 1),
            new THREE.MeshLambertMaterial({map: trunkTexture})
        );

        cutTrunk.name = 'cutTrunk';

        return cutTrunk;
    }
}

module.exports = CutTrunk;

