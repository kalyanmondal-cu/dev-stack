# Dev Stack

A responsive React + TypeScript technology stack builder based on the supplied UI reference.

## Stack

- React
- TypeScript / ES6+
- Vite
- Tailwind CSS v4
- daisyUI
- React-Toastify
- JSON data

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Main implementation points

- Technology data is fetched from `/public/data/technologies.json`.
- Loading state is rendered while the local JSON request is pending.
- Technology cards are reusable and receive data through props.
- Selected technologies are stored in React state.
- Duplicate additions are prevented.
- Add, remove, duplicate, and remove-all actions use React-Toastify.
- The brand gradient is defined once in `src/index.css` as `--brand-gradient`.
- The supplied futuristic stack illustration is used as the hero image.


## Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a way of writing HTML-like code inside JavaScript. It makes React code easier to read and helps us describe what the UI should look like.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data that belongs to a component and can change when the user interacts with the app.

3. What does the useState hook do, and where did you use it in this project?

useState lets us store and update data inside a React component. I used it in this project to manage the application data and update the UI when the data changes.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used for actions that should happen after a component renders. I used it to load the JSON data when the component first appears, so the data could be displayed in the app.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key helps React understand which items changed, were added, or were removed, so it can update the UI efficiently.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition. For example, I used it to show an empty stack message when there are no items in the stack.
{stack.length === 0 && <p>Your stack is empty.</p>}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. If the child needs to send something back, the parent can pass a function as a prop, and the child can call that function with the required data.
