import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import Agents from "./pages/Agents";
import Signin from "./pages/Signin";
import ListProperty from "./components/ListProperty";
import Blog from "./pages/Blog";
 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/list-property" element={<ListProperty />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;