# ATELIER HIDE
### Premium Interactive Leather Goods & Customization Studio

**CSE326 – Frontend Development Project**

ATELIER HIDE is a luxury leather goods showcase and interactive product customization website. It allows visitors to explore handcrafted leather products, select materials and hardware, personalize products with initials or messages, and preview their designs using an interactive 3D interface.

The project demonstrates how HTML, CSS, and JavaScript can be used to create a visually rich, interactive, and responsive e-commerce experience.

---

## 1. Project Overview

ATELIER HIDE is designed as a digital storefront for a premium handcrafted leather goods brand based in Bengaluru, India.

The website focuses on three main ideas:

- **Product Showcase:** Presenting leather products through an elegant product collection.
- **Customization:** Allowing users to personalize products with different leather finishes, hardware, and monograms.
- **Interactive Experience:** Providing product previews, animations, and a 3D customization studio.

### Project Objectives

1. Develop a responsive and visually appealing website.
2. Demonstrate practical HTML, CSS, and JavaScript skills.
3. Implement interactive product customization.
4. Understand DOM manipulation and JavaScript event handling.
5. Explore 3D product rendering using Three.js.
6. Build a functional client-side shopping cart.

---

## 2. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layouts, animations, and responsiveness |
| JavaScript (ES6+) | Interactions, application logic, and customization |
| Three.js | Interactive 3D product rendering |
| OrbitControls | 3D camera rotation and movement |
| Canvas API | Dynamic monogram and leather texture generation |
| LocalStorage | Saving cart information in the browser |

**Architecture:** Frontend-only application using HTML, CSS, and vanilla JavaScript, without a frontend framework or backend database.

Three.js is included locally in the project to avoid relying on an external CDN.

---

## 3. Project Folder Structure

```text
CSE326 PROJECT/
│
├── index.html
│   └── Main website structure
│
├── styles.css
│   └── Website design, layouts and responsive styling
│
├── script.js
│   └── JavaScript functionality and 3D customization
│
├── README.md
│   └── Project documentation
│
├── PROJECT_GUIDE.md
│   └── Student-friendly project explanation
│
├── test-suite.js
│   └── Structural verification tests
│
├── test-interactions.js
│   └── Interaction and shopping cart tests
│
├── test-3d.js
│   └── 3D functionality tests
│
├── test-browser.js
│   └── Browser rendering tests
│
└── assets/
    │
    ├── images/
    │   └── Product, branding and craftsmanship images
    │
    ├── textures/
    │   └── Leather texture assets
    │
    └── vendor/
        ├── three.min.js
        └── OrbitControls.js
```

---

## 4. Main Website Features

### A. Homepage and Hero Section

- Luxury-inspired website design.
- Editorial headline and product presentation.
- Interactive 3D handbag centerpiece.
- Collection and customization navigation.
- Animated elements and visual effects.

### B. Product Collection

The website features five product categories:

| Product | Displayed Price |
|---|---:|
| Structured Handbag No. 01 | ₹28,500 |
| Everyday Bifold | ₹4,800 |
| Field Messenger | ₹18,500 |
| Passport Companion | ₹3,200 |
| Weekender No. 01 | ₹26,000 |

Product cards include visual previews, product details, and customization options.

### C. Interactive Customization Studio

The customization studio allows visitors to configure their leather products.

**Leather selection:**
- Full-Grain Tan
- Pull-Up Cognac
- Espresso
- Matte Black
- Crazy Horse

**Hardware selection:**
- Antique Brass
- Brushed Silver

**Personalization:**
- Custom initials.
- Full-name stamping.
- Personal messages.
- Custom notes to the maker.

**Embossing options:**
- Blind Deboss.
- 22k Gold Foil.

**Typography:**
- Classic Serif.
- Modern Sans.
- Architectural Initials.

The product preview responds to supported customization selections.

### D. 3D Product Visualization

The website uses Three.js to create interactive 3D product previews.

Features include:

- Procedurally constructed product models.
- 360-degree product rotation.
- Interactive camera controls.
- Dynamic material changes.
- Leather bump texture generation.
- Custom monogram rendering.
- Gold foil and blind deboss visual effects.
- Interactive lighting.

The 3D system includes models for the handbag, weekender, messenger, bifold, and passport sleeve.

### E. Shopping Cart

The client-side shopping cart supports:

- Adding products.
- Increasing and decreasing quantities.
- Removing products.
- Calculating the subtotal.
- Keeping different customizations as separate items.
- Combining identical configurations.
- Saving cart information using browser LocalStorage.

### F. Demonstration Checkout

The checkout interface includes:

- Customer name.
- Email address.
- Phone number.
- Delivery address.
- City and PIN code.
- Simulated order confirmation.

**Note:** This is an academic checkout demonstration. It does not process real payments or represent a live order-management backend.

### G. Search and Product Details

- Interactive search modal.
- Real-time product filtering.
- Category filters.
- Product detail modal.
- Product specifications.
- Care instructions.
- Navigation to the customization studio.

### H. Leather Guide

The leather guide introduces different leather finishes and their characteristics.

It includes:

- Full-Grain Leather.
- Pull-Up Leather.
- Crazy Horse Leather.
- Matte Pebble Leather.
- Leather care information.
- Interactive patina timeline.

### I. Craftsmanship Section

A six-stage visual explanation of leather craftsmanship:

1. Leather cutting.
2. Saddle stitching.
3. Edge burnishing.
4. Hardware installation.
5. Monogram stamping.
6. Conditioning and inspection.

---

## 5. Important Technical Concepts

The project demonstrates several frontend development concepts.

| Concept | Application |
|---|---|
| HTML Semantics | Organizing website sections |
| CSS Grid | Structuring product and customization layouts |
| Flexbox | Aligning interface elements |
| CSS Variables | Managing colours and design values |
| Media Queries | Responsive website layouts |
| DOM Manipulation | Updating content dynamically |
| Event Listeners | Handling clicks and user interactions |
| JavaScript Functions | Managing website operations |
| LocalStorage | Preserving cart information |
| Three.js | Rendering 3D products |
| Canvas API | Creating dynamic textures and monograms |

---

## 6. How to Run the Project

### Requirements

- A modern web browser.
- Node.js (for running the optional test scripts and local server).
- A code editor such as Visual Studio Code.

### Method 1: Open Directly

Open `index.html` in a modern browser.

### Method 2: Run a Local Server

Open the project folder in VS Code and run:

```bash
npx serve .
```

Alternatively:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## 7. Testing

The project includes JavaScript test scripts for checking its structure and functionality.

Run the following commands from the project directory:

```bash
node test-suite.js
```

Checks structural integrity and project assets.

```bash
node test-interactions.js
```

Tests user interactions, shopping cart behaviour, and related functionality.

```bash
node test-3d.js
```

Tests the 3D rendering system, texture generation, and monogram functionality.

```bash
node test-browser.js
```

Runs browser-based DOM verification.

**Previously recorded test results:**
- Interaction tests: 15/15 passed.
- 3D tests: 13/13 passed.

Run the scripts again to verify the current project state.

---

## 8. Project Limitations

The current implementation is primarily frontend-based.

- Product information is currently managed on the client side.
- Cart persistence uses browser LocalStorage.
- Checkout is simulated.
- No real payment gateway is connected.
- No live order-management database is currently integrated.
- User authentication and server-side administration are not part of the current frontend implementation.

These features can be added through a backend integration in future development.

---

## 9. Future Improvements

Possible future developments include:

1. Firebase Authentication for user accounts.
2. Cloud Firestore for product and order management.
3. Firebase Storage for product images.
4. Persistent user shopping carts.
5. Secure admin dashboard.
6. Real payment gateway integration.
7. Order tracking and customer accounts.
8. Improved product visualization and additional 3D models.

---

## 10. Conclusion

ATELIER HIDE demonstrates the use of frontend development technologies to create an interactive product showcase and customization experience.

Through this project, we explored HTML structure, CSS styling, JavaScript programming, DOM manipulation, browser storage, responsive design, and 3D rendering using Three.js.

The project combines technical implementation with visual design to demonstrate how modern frontend technologies can be applied to a premium e-commerce concept.

---

**Project:** ATELIER HIDE  
**Course:** CSE326 – Frontend Development  
**Development:** HTML5, CSS3, JavaScript and Three.js  
**Project Type:** Academic Frontend Development Project

