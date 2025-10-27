import React from "react";
// Corrected path: Removed the trailing slash and ensured it points directly to the component file name.
// The file is named HomePage.jsx inside the components folder.
import HomePage from "./components/HomePage";

export default function App() {
  // The layout is already handled within HomePage.jsx
  return (
    <>
      <HomePage />
    </>
  );
}
