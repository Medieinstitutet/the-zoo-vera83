import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAnimals } from "./services/animalService";
import { Animals } from "./views/Animals";

const router = createBrowserRouter([
  {
    path: "/",
    loader: getAnimals,
    Component: Animals,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
