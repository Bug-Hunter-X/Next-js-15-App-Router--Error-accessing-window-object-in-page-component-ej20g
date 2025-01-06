# Next.js 15 App Router: Accessing Window Object Error

This repository demonstrates a common error encountered when using the Next.js 15 App Router: attempting to access the `window` object within a page component before it's available on the client-side.

**Problem:**

The `window` object is not defined during the server-side rendering (SSR) process.  Accessing it directly within a page component's `useEffect` hook (or similar) leads to a runtime error when the app is deployed to production.

**Solution:**

Wrap the code accessing `window` within an `useEffect` hook, setting an empty dependency array `[]` to ensure the code only runs on the client-side after the component has mounted.  Alternatively, utilize conditional rendering to prevent execution during SSR.