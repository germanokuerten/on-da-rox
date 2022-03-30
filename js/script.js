/////////////////

// On Da Rox - Cocktail Recipe App

/////////////////

// Pseudocode: App outline

// 1. Add header element with On Da Rox logo
    // Header element created on html, as well as logo png image.
    
    // 1.1 access HTML image element through DOM and create new variable using jQuery
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

    // make image to the left 
            // COME BACK TO THIS

    // Ingredients to the right (Same roll as drink image) 
            // COME BACK TO THIS

    $("#ingredients-title").text(`Ingredrients: `)

    
    $("#ingredient1").text(`• ${data.drinks[0].strIngredient1}`)
    $("#ingredient2").text(`• ${data.drinks[0].strIngredient2}`)
    $("#ingredient3").text(`• ${data.drinks[0].strIngredient3}`)
    $("#ingredient4").text(`• ${data.drinks[0].strIngredient4}`)
    $("#ingredient5").text(`• ${data.drinks[0].strIngredient5}`)
    $("#ingredient6").text(`• ${data.drinks[0].strIngredient6}`)
    $("#ingredient7").text(`• ${data.drinks[0].strIngredient7}`)
    $("#ingredient8").text(`• ${data.drinks[0].strIngredient8}`)
    $("#ingredient9").text(`• ${data.drinks[0].strIngredient9}`)
    $("#ingredient10").text(`• ${data.drinks[0].strIngredient10}`)

        // Notes for implementing loop
        // for (let ingredient of data.drinks[])
        // for (let i = 0; )
        // try array method filter()

    if (data.drinks[0].strIngredient3 === null) { 
        $("#ingredient3").text("");
    }
    if (data.drinks[0].strIngredient4 === null) { 
        $("#ingredient4").text("");
    }
    if (data.drinks[0].strIngredient5 === null) { 
        $("#ingredient5").text("");
    }
    if (data.drinks[0].strIngredient6 === null) { 
        $("#ingredient6").text("");
    }
    if (data.drinks[0].strIngredient7 === null) { 
        $("#ingredient7").text("");
    }
    if (data.drinks[0].strIngredient8 === null) { 
        $("#ingredient8").text("");
    }
    if (data.drinks[0].strIngredient9 === null) { 
        $("#ingredient9").text("");
    }
    if (data.drinks[0].strIngredient10 === null) { 
        $("#ingredient10").text("");
    }
    
    // and then finally recipe instructions

    $("#instructions").text(`Instructions: ${data.drinks[0].strInstructions}`)
 

    })
})

// 4. Optional 
    // Quote of the Day API (At the very bottom)
    // Message about drinking responsibly and respecting life
    // Redo the logo, so it's actually 2 ice cubes with HTML text
    // Have bullet points align in the ingredients ***
    // DRY code, make ingredients into a loop.

// 5. Bug
    // Once null ingredients are removed they do not return again, even when a drink has more than 2 ingredients (It's like the if statements don't restart everytime button is clicked) 
        // Fixed with the .text("");