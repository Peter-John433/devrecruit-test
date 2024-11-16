//imports from react
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import pages
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import BasicConcepts from "./pages/BasicConcepts ";
import IntermediateConcepts from "./pages/IntermediateConcepts";
import AdvancedConcepts from "./pages/AdvancedConcepts";
import PracticalTask from "./pages/PracticalTask";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="basic concepts" element={<BasicConcepts />} />
      <Route path="intermediate concepts" element={<IntermediateConcepts />} />
      <Route path="advanced concepts" element={<AdvancedConcepts />} />
      <Route path="practical task" element={<PracticalTask />} />
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
