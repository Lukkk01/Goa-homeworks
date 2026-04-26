import { Routes, Route, Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// App.jsx-ში:
<Routes>
  <Route path="*" element={<NotFound />} />
</Routes>
