// Function build canvas and needs cols and rows numbers and parentContainerId that must has a fixed height
const buildCanvas = (columns, rows, parentContainerId) => {

    // Set canvas parent container
    const pContainer = document.getElementById(parentContainerId);

    // Set canvas columns and rows
    pContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    pContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // Check if mouseDown
    let mouseDown;
    pContainer.addEventListener('mousedown', () => {
        mouseDown = true;
    });

    pContainer.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    // Append empty divs and listeners to the grid
    for (let i = 0; i < columns * rows; i++) {

        // Create div, like pixel in a display
        const canvasDiv = document.createElement('div');

        pContainer.appendChild(canvasDiv);
        canvasDiv.addEventListener('mouseover', () => {

            if (mouseDown) {
                canvasDiv.style.backgroundColor = 'black';
            }
        });

    }

}

// Build canvas
buildCanvas(200, 100, 'canvas')

