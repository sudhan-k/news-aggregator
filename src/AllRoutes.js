import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path={`/`} element={<Home />} />
            </Routes>
        </>
    );
}

export default AllRoutes;
