// Function to handle recipe search on the Welcome Page
// Function to handle recipe search
function searchRecipe() {
    // Get the recipe name from the input field
    const recipeName = document.getElementById('recipeInput').value;

    // Debug: Log the recipe name
    console.log("Recipe Name:", recipeName);

    // Check if the input is not empty
    if (recipeName.trim() !== "") {
        // Redirect to the Recipe Detail Page with the recipe name as a URL parameter
        window.location.href = `recipe.html?name=${encodeURIComponent(recipeName)}`;
    } else {
        // Show an alert if the input is empty
        alert("Please enter a recipe name!");
    }
}
// Function to handle login
function login(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Retrieve stored credentials
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        sessionStorage.setItem("isLoggedIn", "true"); // Set session flag
        window.location.href = "index.html"; // Redirect to the Welcome Page
    } else {
        alert("Invalid username or password.");
    }
}

// Function to handle sign-in
function signIn(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Store user credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Sign up successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to the Login Page
}

// Function to display recipe details on the Recipe Detail Page
function displayRecipeDetails() {
    // Get the recipe name from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const recipeName = urlParams.get('name');

    // Define recipe data
    const recipes = {
        Shiro: {
            name: "Shiro (ሽሮ)",
            ingredients:["1 cup Shiro powder (chickpea flour)","1 large onion, finely chopped"," 3 cloves garlic, minced",
                    " 1 tablespoon minced ginger","2 tablespoons Berbere spice mix (adjust to taste)", "3-4 tablespoons vegetable oil",
                    " 4 cups water or vegetable broth (adjust for desired consistency)", "Salt to taste"],
            
           
           instructions:"1. Sauté the onion in vegetable oil until golden. 2. Add garlic, ginger, and Berbere; cook for 2-3 minutes.  3.Mix Shiro powder with a bit of water to form a paste; add to the pot.4.Gradually add the water or broth, stirring constantly.5.Simmer for 20-30 minutes, stirring occasionally.6. Season with salt and serve hot."
        },
        Firfir : {
            name: "Firfir (ፍርፍር)",
            ingredients: ["4 pieces of injera (Ethiopian flatbread), torn into small pieces","1 large onion, chopped",
                        " 3 garlic cloves, minced"," 1 tablespoon minced ginger"," 2 tablespoons Berbere spice"," 3-4 tablespoons vegetable oil",
                        "2-3 tomatoes, chopped","Salt to taste"],
         instructions:"1.Sauté the onion in vegetable oil until golden.2.Add garlic, ginger, and Berbere. 3. cook for 2-3 minutes.4.Add chopped tomatoes. 5.cook until soft.6.Mix in the torn injera pieces.7.Season with salt and serve hot."
         },
        azifa: {
            name: "Azifa (አዚፋ)",
            ingredients: ["1 cup green lentils, cooked", " 1 small red onion, finely chopped","2-3 green chilies, chopped",
                       " 2 tomatoes, chopped","3 tablespoons lemon juice","3 tablespoons olive oil","Salt to taste"],
                
            instructions: "1.Mix cooked lentils, chopped onion, green chilies, and tomatoes in a bowl. 2.Add lemon juice, olive oil, and salt; mix well. 3.Chill in the refrigerator for at least 30 minutes. 4.Serve cold as a side dish or salad."
    }
    };

    // Display the recipe details
    if (recipeName && recipes[recipeName.toLowerCase()]) {
        const recipe = recipes[recipeName.toLowerCase()];
        document.getElementById('recipeName').textContent = recipe.name;
        document.getElementById('ingredients').textContent = recipe.ingredients.join(', ');
        document.getElementById('instructions').textContent = recipe.instructions;
    } else {
        document.getElementById('recipeName').textContent = "Recipe not found.";
        document.getElementById('ingredients').textContent = "N/A";
        document.getElementById('instructions').textContent = "N/A";
    }
}

// Call the function to display recipe details if on the Recipe Detail Page
if (window.location.pathname.includes("recipe.html")) {
    displayRecipeDetails();
}