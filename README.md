# Qbiq HomeTask 

This is a small e-commerce frontend project built as part of a home assignment.  
The app allows users to view a list of products, search by name, and navigate to a product details page.  
All product data is stored locally as mock data.

##  Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [MUI](https://mui.com/) — Material UI components
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router DOM](https://reactrouter.com/)

##  Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/oapanova/products.git
   cd products

2. Install dependencies:
   ```bash
    npm install


3. Start the development server:
   ```bash
    npm run dev


4. Open the app in your browser:
   http://localhost:3000

## Mock Data

All product data is stored locally in:
src/mockData.ts

The data is fetched on page load to simulate a real API request.

##  Features

 Product list page with search by name
 Product details page with description and reviews
 Routing between pages using React Router
 Centralized state management with Redux Toolkit
 UI components built with MUI

## Project Structure
src/
├── assets/            # Static assets (images, fonts, etc.)
├── services/          # API mocks
├── pages/             # Page components
├── store/             # Redux store & slices
├── mockData.ts        # Local product data
├── types/             # TypeScript types
├── ui/                # Layout and shared UI components
├── router.tsx         # Routes configuration
├── App.tsx
└── main.tsx
