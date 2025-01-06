```javascript
// pages/aboutSolution.js
import { useEffect, useState } from 'react';

export default function About() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. Window object is available: {typeof window}</p>
    </div>
  );
}
```