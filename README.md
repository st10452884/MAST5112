# MAST5112

FoodApp is a React Native application designed for chefs to manage their menus efficiently. The app provides a seamless experience for navigating between pages to view, add, or remove dishes from the menu. It also calculates the average price of the dishes available.

Features
Home Page: 
Displays a welcome message, app logo, and a "Get Started" button to navigate to the menu page.
Menu Page:
Displays a 4x4 grid with menu courses (Starters, Mains, Desserts, Drinks), each accompanied by an image.
Dropdown menu to navigate to the Add Dish or Remove Dish pages.
Add Dish Page:
Allows chefs to add a dish name, description, price, and assign it to a course using a dropdown menu.
Dishes are saved to an array and reflected on the menu page.
Remove Dish Page:
Displays a list of existing dishes with an option to remove a dish from the menu.
Average Price Display: Calculates and displays the average price of dishes on the home screen.

Technologies Used
React Native: For building the app UI.
React Navigation: For seamless navigation between screens.
Expo: For managing the app and running on emulators/devices.

FoodApp/
├── assets/                  # Contains all  assets like images.
├── screens/                 # Contains screen components.
│   ├── HomePage.js
│   ├── MenuPage.js
│   ├── AddDishPage.js
│   └── RemoveDishPage.js
├── App.js                   # Main application file.
├── package.json             # Project dependencies and scripts.
└── README.md                # Documentation.

Changes Made
Dynamic Menu Management:
Implemented functionality to add and remove dishes using state management.
Added a dropdown menu to categorize dishes by course.
Average Price Calculation:
Implemented logic to calculate the average price of all dishes and display it on the home page.
Asset Management:
Added all images (app logo, menu course images) to the assets/ folder.
Used appropriate images for starters, mains, desserts, and drinks.
Styling Updates:
Added basic styling to make the app visually appealing and user-friendly.
