import { Routes, Route } from "react-router-dom";
import Setting from "./Setting";
import Logout from "./Logout";
import AboutUs from "./AboutUs";
import Charts from "./Charts";
import { HomeComponent } from "./HomeComponent";

const Routing = () => {
  return (

      <Routes>
        <Route path="/" element={<HomeComponent />}>
          <Route path="/setting" element={<Setting />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/charts" element={<Charts />}/>
        </Route>
      </Routes>

  );
};

export default Routing;