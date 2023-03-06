// Function build canvas and needs cols and rows numbers and parentContainerId that must has a fixed height
const buildCanvas = (columns, rows, parentContainerId) => {

    // Set canvas parent container
    const pContainer = document.getElementById(parentContainerId);
    const canvasDiv = document.createElement('div');

    // Set canvas columns and rows
    pContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    pContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // Append empty divs to the grid
    for (let i = 0; i < columns * rows; i++) {
        pContainer.appendChild(canvasDiv)
    }
}

// Build canvas
buildCanvas(100, 50, 'canvas')