function saveRecipe() {
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const recipeName = document.getElementById("recipeName").value;
    const recipeType = document.getElementById("recipeType").value;

const recipeData = {
    email: email,
    date: date,
    recipeName: recipeName,
    ingredients: ingredients,
    recipeType: recipeType
};
