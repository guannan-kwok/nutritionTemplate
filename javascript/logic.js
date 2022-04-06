
/*
    Switch between ingredients based on ingredient item
*/
function switchIngredient(item) 
{
    document.getElementById("ingredientsMenu").innerHTML = item;
    const pickedIngredient = ingredients.get(item);

    const mainImage = document.getElementById("main-image");
    mainImage.src = pickedIngredient.imageURL;

    const benefits = document.getElementById("benefits-text");
    benefits.innerHTML = pickedIngredient.benefitsText;

    const origin = document.getElementById("history-text");
    origin.innerHTML = pickedIngredient.historyOriginText;

    const map = document.getElementById("origin-map");
    map.src = pickedIngredient.mapURL;

    const title = document.getElementById("ingredientName");
    title.innerHTML = pickedIngredient.uinameText;

    const hotCold = document.getElementById("hotCold");
    hotCold.src = pickedIngredient.hotColdURL;

    const category = document.getElementById("category");
    category.src = pickedIngredient.categoryURL;
}

/*
    Add menu items based on ingredients list
 */ 
function addMenuItems()
{
    const ingredientMenu = document.getElementById("ingredientMenu");
    if (ingredientMenu) {
        var ingredientMenuText = "";
        ingredients.forEach(ing => {
            ingredientMenuText +=
                "<li><a class='dropdown-item' href='#' onclick=\"switchIngredient('" +
                ing.uiname + "')\">" + ing.uiname + "</a></li>";
        });
        ingredientMenu.innerHTML = ingredientMenuText;
    }
}

/*
    Initialize template
*/
function initializeTemplate()
{
    loadData();
    addMenuItems();
    switchIngredient('Mushroom');
}