import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard, { landsLoader } from "./pages/Dashboard";
import Upload, { createAction } from "./pages/Upload";
import Profile from "./pages/Profile";
// import LandingPage from "./pages/LandingPage";
import Lands, { tasksLoader } from "./pages/Lands";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Lands />} loader={tasksLoader} />
      <Route path="dashboard" element={<Dashboard />} loader={landsLoader} />
      <Route path="upload" element={<Upload />} action={createAction} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
