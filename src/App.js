//imports from react
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import BasicConcepts from "./pages/BasicConcepts ";
import IntermediateConcepts from "./pages/IntermediateConcepts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route path="basic concepts" element={<BasicConcepts />} />
      <Route path="intermediate concepts" element={<IntermediateConcepts />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
