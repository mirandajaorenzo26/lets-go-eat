import Header from "./components/Header";
import AddRestaurantForm from "./components/AddRestaurantForm";
import Suggestions from "./components/Suggestions";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import { AppProvider } from "./contexts/AppContext";
function App() {
  return (
    <>
      <div className="padding">
        <Header />
      </div>
      <div className="padding">
        <AppProvider>
          <AddRestaurantForm />
          <Suggestions />
          <Cards />
        </AppProvider>
      </div>
      {/* <div className="padding grid h-[20vh] items-center bg-black text-white">
        <Footer />
      </div> */}
    </>
  );
}

export default App;
