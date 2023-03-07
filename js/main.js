// Build canvas
const buildCanvas = (widthPx, heightPx, parentContainerId) => {

    // Set canvas parent container
    const pContainer = document.getElementById(parentContainerId);

    // Create and append canvas
    const canvas = document.createElement('div');
    canvas.id = 'canvas';
    canvas.style.width = widthPx + 'px';
    canvas.style.height = heightPx + 'px';
    pContainer.appendChild(canvas);

    // Return canvas ID
    return canvas.id
}

// Add event listener to canvas
const turnOnCanvas = (canvasId) => {

    // Set canvas and apply border color
    const canvas = document.getElementById(canvasId);
    canvas.style.border = '2px solid black';

    // Check if mouseDown
    let mouseDown;
    canvas.addEventListener('mousedown', () => {
        mouseDown = true;
    });

    canvas.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    // Add container listener
    canvas.addEventListener('mousemove', (e) => {
        if (mouseDown) {
            const cell = document.createElement('div');
            canvas.appendChild(cell);
            cell.style.position = 'absolute';
            cell.style.left = e.clientX + 'px';
            cell.style.top = e.clientY + 'px';
            cell.style.backgroundColor = 'red';
            cell.style.width = '20px';
            cell.style.height = '20px';
            cell.style.borderRadius = '50%';
        }
    })

}

turnOnCanvas(buildCanvas(2000, 200, 'canvas'));