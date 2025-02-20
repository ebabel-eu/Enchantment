

import createGridPositions from './createGridPositions';

// Return the models as a group and the remaining 
// grid positions still free to be plotted on.
// Note: No model is added to the scene, only clones of the model are grouped and returned, 
// for performance optimization.
module.exports = function plotModelsOnGrid (input) {
    // The empty container where all model instances will be grouped.
    const group = new THREE.Group();

    // Model to be plotted on the grid free positions.
    const model = input && input.model;

    const isMob = input && input.isMob || false;
    const mobClass = input && input.mobClass;

    const positionY = input && input.positionY || 0;

    // Grid co-ordinates not already plotted with a model.
    const freeGridPositions = input && input.freeGridPositions || createGridPositions({
        width: input && input.width || 1000,
        height: input && input.height || 1000
    });

    const freeGridPositionsLength = freeGridPositions.length;

    // Number of model instances to plot.
    const numberModelsToPlot = input && input.numberModelsToPlot || 
        ((freeGridPositionsLength > 20) ? 20 : freeGridPositionsLength);

    const scale = input && input.scale;
    const rotate = input && input.rotate || false;

    for (let counter = 0; counter < numberModelsToPlot; counter++) {
        // Pick a random position from the array of positions still available.
        const index = Math.floor(Math.random() * freeGridPositions.length);
        const position = freeGridPositions[index];
        const size = scale ? (Math.random() * scale.max + scale.min) : 1;
        const rotation = rotate ? (Math.random() * -45) * Math.PI / 180  : 0;

        // Remove the plotted position from the array of free positions.
        freeGridPositions.splice(index, 1);

        // Create a clone and place it at the correct position.
        const clone = isMob ? new mobClass() : model.clone();
        clone.position.set(position.x, positionY, position.z);
        clone.scale.set(size, size, size);
        clone.rotation.set(0, rotation, 0);
        group.add(clone);
    }

    return {
        group: group,
        freeGridPositions: freeGridPositions
    };
};
