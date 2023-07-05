import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./componentes/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Bootstrap from "../node_modules/bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


function App(){
    return (
/*         <div className="container">
            <div className="App">
                <NavBar/>
                <ItemListContainer greeting={'Bienvenidos'}/>
            </div>
        </div> */

        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
            <CartWidget/>
            <ItemDetailContainer/>
        </BrowserRouter>
        
    )
}

export default App;