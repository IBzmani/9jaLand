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

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
// 1. Get projectId
const projectId = "92833d2a8bd09509cd54c514bdf9be72";
// 2. Create wagmiConfig
const metadata = {
  name: "9jaland",
  description: "9jaland Example",
  url: "https://9jaland.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [bscTestnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });
// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: "light",
});

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Lands />} loader={tasksLoader} />
      {/* <Route path="dashboard" element={<Dashboard />} loader={landsLoader} /> */}
      <Route path="upload" element={<Upload />} action={createAction} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RouterProvider router={router} />
    </WagmiConfig>
  );
}

export default App;
