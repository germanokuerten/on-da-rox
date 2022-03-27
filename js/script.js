/////////////////

// On Da Rox - Cocktail Recipe App

/////////////////

// Pseudocode: App outline

// 1. Add header element with On Da Rox logo (inside of a main -> header tag)

    // Header element created on html, as well as logo png image.
    const $onDaRoxLogo = $("#ondarox_logo")

    // add event listener that refreshes the page
    $onDaRoxLogo.on("click", () => {
        location.reload();
    })

    // center it
    // done on css.

// 2. Add "Craft me a Drink" button
    // center it
    // add event listener that on the click makes the API call to a random drink
    // add "crispy click sound" on button click

// 3. Create a Div element to output the data results from the API call
    // Deliver the API data in a well organized and stylized manner
    // that being:
    // Drink Title
    // Image of the drink to the left
    // Ingredients to the right (Same roll as drink image)
    // and then finally recipe instructions

// 4. Optional 
    // Quote of the Day API (At the very bottom)
    // Message about drinking responsibly and respecting life
    // Redo the logo, so it's actually 2 ice cubes with text
