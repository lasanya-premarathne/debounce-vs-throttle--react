# Debounce vs Throttle – React + TypeScript Demo

This is a simple frontend project demonstrating the difference between debounce and throttle using React and Typescript.

## Concepts
- Debounce: Ensures a function is only called after a certain delay has passed since the last time it was invoked.
- Throttle: Ensures a function is called at most once in a specified time interval, no matter how many times the event is triggered.

### Use Cases
- Debounce: Searching or filtering as you type, to avoid sending too many requests.
- Throttle: Handling scroll or resize events efficiently.

## Tech Stack

- React 19
- TypeScript
- Vite
- Custom hooks (`useDebounce`, `useThrottle`)
- CSS variables and theming

## Folder Structure

src/
├── components/ # Reusable UI components
│ ├── DebounceInput.tsx
│ ├── ScrollBox.tsx
│ └── ThemeToggle.tsx
│
├── hooks/ # Custom hooks
│ ├── useDebounce.ts
│ └── useThrottle.ts
│
├── styles/ # CSS styles
│ ├── colors-variables.css
│ └── styles.css
│
├── App.tsx # Main app container
└── main.tsx # Entry point

## How to run

### 1. Clone the repo
```bash
git clone https://github.com/your-username/debounce-throttle-demo.git
cd debounce-throttle-demo
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the dev server
```bash
npm run dev
```

***The app will be available at http://localhost:5173


---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
