// script.js: JavaScript for the whole website

// Home Page Button

function showMessage() {
    document.getElementById("message").innerHTML =
    "Recipes For U provides easy recipes, helpful kitchen tips, and delicious meal ideas for beginners and busy cooks.";
}


// Recipe Request Form Validation

function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let category = document.getElementById("category").value;
    let recipe = document.getElementById("recipe").value.trim();

    // Presence Check
    if (name === "" || email === "" || category === "" || recipe === "") {
        document.getElementById("result").innerHTML =
        "❌ Please complete all fields before submitting.";
        return false;
    }

    // Length Check
    if (recipe.length < 20) {
        document.getElementById("result").innerHTML =
        "❌ Recipe request must be at least 20 characters long.";
        return false;
    }

    // Success Message
    document.getElementById("result").innerHTML =
    "✅ Thank you! Your recipe request has been submitted.";

    // Clear Form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("recipe").value = "";

    return false;
}