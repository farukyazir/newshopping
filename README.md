# 🛍️ Shopping Cart Application

A responsive shopping cart web application built using **React.js, Redux Toolkit, React Router, and CSS**. This project demonstrates component-based development, global state management, product rendering, and shopping cart functionality.

## 🌐 Live Demo

**Live Website:** [https://newshooping.netlify.app/](https://newshooping.netlify.app/)

**GitHub Repository:** [https://github.com/farukyazir/newshopping](https://github.com/farukyazir/newshopping)

## ✨ Features

- 🛒 **Product Listing** — Display products with images, names, and prices.
- ➕ **Add to Cart** — Add products to the shopping cart.
- ➖ **Remove from Cart** — Remove selected products from the cart.
- 🔢 **Quantity Management** — Change product quantities using a dropdown.
- 💰 **Dynamic Price Calculation** — Calculate individual product totals and cart subtotal.
- 📦 **Cart Summary** — Display subtotal, total quantity, shipping, and total price.
- 🛍️ **Empty Cart UI** — Display an empty-cart image when no products are added.
- 🔄 **Redux Toolkit** — Manage cart items and application state centrally.
- 🧭 **React Router** — Navigate between the home page and cart page.
- 📱 **Responsive UI** — Product cards and cart layout styled with CSS.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Building reusable UI components |
| JavaScript (ES6+) | Application logic |
| Redux Toolkit | Global cart state management |
| React Redux | Connecting React components to Redux |
| React Router DOM | Client-side navigation |
| CSS3 | Styling and layout |
| Vite | Development server and production build |
| Netlify | Deployment and hosting |

## 📂 Project Structure

```text
newshopping/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Card.jsx
│   │   ├── CardforCart.jsx
│   │   ├── Cart.jsx
│   │   ├── Header.jsx
│   │   ├── MyContext.jsx
│   │   └── Template.jsx
│   ├── data/
│   │   └── productData.json
│   ├── reduxslices/
│   │   └── cartSlice.js
│   ├── store/
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

*Note: The structure above illustrates the main files; adjust folder names and filenames to match your actual repository.*

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/farukyazir/newshopping.git
```

### 2. Navigate to the project directory

```bash
cd newshopping
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### 5. Create a production build

```bash
npm run build
```

## 🧠 What I Learned

Through this project, I practiced:

- Building reusable React components.
- Passing and sharing data between components.
- Managing global state using Redux Toolkit.
- Using `useSelector()` to read Redux state.
- Using `useDispatch()` to dispatch Redux actions.
- Creating reducers with `createSlice()`.
- Updating cart quantities and calculating totals.
- Rendering product lists dynamically with `.map()`.
- Calculating totals with `.reduce()`.
- Configuring routes with React Router.
- Deploying a Vite application using Netlify.

## 🚀 Deployment

This project is deployed using Netlify.

To deploy updates, push the latest code to the connected GitHub repository and ensure the production build completes successfully.

**Build command:**

```bash
npm run build
```

**Publish directory:**

```text
dist
```

## 👨‍💻 Developer

**Faruk Yazir**

- GitHub: [@farukyazir](https://github.com/farukyazir)
- Project Repository: [newshopping](https://github.com/farukyazir/newshopping)
- Live Demo: [newshooping.netlify.app](https://newshooping.netlify.app/)

---

⭐ If you find this project useful, consider giving the repository a star!

*Built as a hands-on project to strengthen my React.js and Redux Toolkit skills.*
