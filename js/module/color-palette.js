

// Class that create palette object and changes the DOM palette
class ColorPalette {
    constructor(color, domColorsClass) {
        this.selectedColor = color;
        this.colors = [];
        this.colorsPalette = ['Red', 'Orange', 'Green', 'Purple', 'Blue'];
    }

    // Set palette based on passed color
    setColor() {
        switch (this.selectedColor) {
            case "red":
                this.colors.push('#FF0000');
                this.colors.push('#FF7F7F');
                this.colors.push('#FF4C4C');
                this.colors.push('#FF2400');
                this.colors.push('#FF6666');
                this.colors.push('#FF1A1A');
                this.colors.push('#FF8080');
                this.colors.push('#FF7373');
                this.colors.push('#FF99CC');
                this.colors.push('#FF0033');
                break;
        }
    }

    // Display selected palette
    changePaletteColors() {
        const domColors = document.querySelectorAll(domColorsClass)

        for (let i = -1; i < this.colors.length; i++) {
            domColors[i].style.backgroundColor = colors[i];
        }
    }

    // Create color palette selector
    createSelector = (paletteContainerId) => {
        // Set where to put in the selector
        const paletteContainer = document.getElementById(paletteContainerId);

        // Create label
        const label = document.createElement('label');
        label.htmlFor = 'color-palette-selector';
        paletteContainer.appendChild(label);

        // Create html select element
        const selector = document.createElement('select');

        // Create option based on the colorsPalette array
        this.colorsPalette.forEach(color => {
            const option = document.createElement('option');
            option.innerText = color;
            selector.appendChild(option);
        })

        // Append selector
        paletteContainer.appendChild(selector);
    }
}


export { ColorPalette };

