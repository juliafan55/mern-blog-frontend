import React from "react";
import { Route, Routes } from "react-router-dom"

import Home from "./components/Home"

const MainRouter = () => {
    <div>
        <Routes>
            <Route path="/" component={Home}></Route>
        </Routes>
    </div>
}

export default MainRouter;