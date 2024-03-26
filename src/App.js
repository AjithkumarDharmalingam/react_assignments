import logo from "./logo.svg";
import "./App.css";
import Boxsplit from "./components/box_split";
import { Route, Routes } from "react-router-dom";
import Elementtransfer from "./components/element_transfer";
import InfiniteScrollPage from "./components/infinite_scroll";
import NestedList from "./components/nested_list";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/boxsplit" element={<Boxsplit />} />
        <Route exact path="/elementtransfer" element={<Elementtransfer />} />
        <Route exact path="/infinitescroll" element={<InfiniteScrollPage />} />
        <Route exact path="/nestedlist" element={<NestedList />} />
      </Routes>
    </div>
  );
}

export default App;
