// Class that create palette object and changes the DOM palette
class ColorPalette {
    constructor(colorsContainer, domColorsClass, paletteContainer) {
        this.colorsContainer = document.getElementById(colorsContainer);
        this.domColorsClass = domColorsClass;
        this.paletteContainer = paletteContainer;
        this.jsonColors = []
    }

    // Display default dom colors
    defaultPalette() {
        const defaultColors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee', '#808080', '#a52a2a', '#000000'];

        defaultColors.forEach(iteratedColor => {
            const color = document.createElement('div');
            color.classList.add(this.domColorsClass);
            color.style.backgroundColor = iteratedColor;
            this.colorsContainer.appendChild(color);
        })
    }

    // Display selected palette
    changePaletteColors(color) {
        let domColors = document.querySelectorAll(`.${this.domColorsClass}`);

        let selectedColor = this.jsonColors[color];

        for (let i = 0; i < selectedColor.length; i++) {
            domColors[i].style.backgroundColor = selectedColor[i];
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

        // Array of displayed colors
        const colorsPalette = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'gray', 'brown', 'black'];

        // Create option based on the colorsPalette array
        colorsPalette.forEach(color => {
            const option = document.createElement('option');
            option.innerText = color;
            selector.appendChild(option);

            // Add listener
            option.addEventListener('click', () => {
                this.changePaletteColors(color);
            })

        })

        // Append selector
        paletteContainer.appendChild(selector);
    }

    // Load colors from json
    loadJsonColors() {
        fetch('../../colors.json')
            .then(response => response.json())
            .then(jsonData => {
                this.jsonColors = jsonData;

                this.createSelector(this.paletteContainer);

            })
    }
}


export { ColorPalette };

