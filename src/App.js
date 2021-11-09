import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar/index";
import Hero from "./components/Hero/index";
import Submenu from "./components/Submenu/index";
import {AppProvider} from "./context/context";

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Submenu />
        <Sidebar />
        <Hero />
      </AppProvider>
    </>
  );
}

export default App;
