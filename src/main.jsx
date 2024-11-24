import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Page4 from "./pages/Page4.jsx";
import Page5 from "./pages/Page5.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="page3" element={<Page3 />} />
      <Route path="page4" element={<Page4 />} />
      <Route path="page5" element={<Page5 />} />
      {/* ... etc. */}
    </Route>
  ),
  {
    future: {
      v7_fetcherPersist: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
