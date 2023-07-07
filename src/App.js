import NavBar from "./components/NavBar/NavBar";
// import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import Bootstrap from "../node_modules/bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import Greeting from "./components/greeting";


function App(){
    return (
        <BrowserRouter>
            <NavBar/>
            <Greeting/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;