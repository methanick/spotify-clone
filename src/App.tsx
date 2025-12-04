import { useState } from "react";
import "./App.css";

import { AppLayout } from "./core/layouts/appLayout/AppLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;
