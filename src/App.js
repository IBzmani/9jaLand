import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard, { tasksLoader } from "./pages/Dashboard";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import Lands from "./pages/Lands";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Lands />} loader={tasksLoader} />
      <Route path="dashboard" element={<Dashboard />} loader={tasksLoader} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
