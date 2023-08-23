import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAnimalById, getAnimals } from "./services/animalService";
import { Animals } from "./views/Animals";
import { Animal } from "./views/Animal";

const router = createBrowserRouter([
  {
    path: "/",
    loader: getAnimals,
    Component: Animals,
  },
  {
    path: "/animal/:id",
    loader: async ({ params }) => {
      if (!params.id) {
        throw new Error();
      }
      return getAnimalById(params.id);
    },
    Component: Animal,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
