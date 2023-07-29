import NavBar from "./components/NavBar/NavBar";
// import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import Bootstrap from "../node_modules/bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import Greeting from "./components/greeting";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";



// Firebase
// import {db} from "./config/firebase";
// import {getDocs, getDoc, collection} from "firebase/firestore";
// import { useState, useEffect} from "react";


function App(){
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Greeting/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    {/* <Route path="/cartWidget" element={<ItemListCart/>}/> */}
                    {/* <Route path="/checkout" element={<Checkout/>}/> */}
                    <Route path="*" element={<ItemListContainer/>}/>
                </Routes>                
            </CartProvider>
            
        </BrowserRouter>
    )
}

export default App;