

function switchIngredient(item) 
{
    document.getElementById("ingredientsMenu").innerHTML = item;
    pickedIngredient = ingredients.get(item);

    mainImage = document.getElementById("main-image");
    mainImage.src = pickedIngredient.imageURL;

   benefits = document.getElementById("benefits-text");
   benefits.innerHTML = pickedIngredient.benefitsText;

   origin = document.getElementById("history-text");
   origin.innerHTML = pickedIngredient.historyOriginText;

   map = document.getElementById("origin-map");
   map.src = pickedIngredient.mapURL;

   title = document.getElementById("ingredientName");
   title.innerHTML = pickedIngredient.nameText;

   hotCold = document.getElementById("hotCold");
   hotCold.src = pickedIngredient.hotColdURL;
    
   category = document.getElementById("category");
   category.src = pickedIngredient.categoryURL;
}