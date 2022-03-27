/////////////////

// On Da Rox - Cocktail Recipe App

/////////////////

// Pseudocode: App outline

// 1. Add header element with On Da Rox logo
    // Header element created on html, as well as logo png image.
    
    // 1.1 access HTML image element through DOM and crete new variable using jQuery
    const $onDaRoxLogo = $("#ondarox_logo")

    // 1.2 add event listener that refreshes the page
    $onDaRoxLogo.on("click", () => {
        location.reload();
    })

    // 1.3 center it
        // done on css.

// 2. Add "Craft me a Drink" button
        
        // done on html and css

    const $drinkButton = $("button")

    // 2.1 center it
        // done in css through referencing <header> tag/element

    // 2.2 add event listener that on the click makes the API call to a random drink

    const APIKEY = "9973533";

    $drinkButton.on("click", () => {
        $.ajax(`https://www.thecocktaildb.com/api/json/v2/${APIKEY}/randomselection.php`)
        .then((data) => {
            // test API data
            console.log(data)

    // 2.3 add "crispy click sound" on button click
        // done on html
        
// 3. Create an element to output the data results from the API call
        // <main> element created on html

    // 3.1 Deliver the API data in a well organized and stylized manner
        
    // Drink Title

    $("#drink-title").text(`${data.drinks[0].strDrink}`)

    // Image of the drink

    $("#drink-image").html(`<img id="drk-image" src=${data.drinks[0].strDrinkThumb} alt="${data.drinks[0].strDrink}"/>`)

    // make image to the left (come back to this)

    // Ingredients to the right (Same roll as drink image)
            

    // and then finally recipe instructions

    })
})

// 4. Optional 
    // Quote of the Day API (At the very bottom)
    // Message about drinking responsibly and respecting life
    // Redo the logo, so it's actually 2 ice cubes with text
