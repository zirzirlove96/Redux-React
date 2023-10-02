import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

//HashRouter과 BrowserRouter의 차이점 : BrwoserRouter은 동적이므로, HashRouter은 주소에 #이 붙는다.
function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path=":id" element={<Detail/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;