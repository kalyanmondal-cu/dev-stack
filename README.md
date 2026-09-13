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
