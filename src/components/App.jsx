import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { GlobalStyle } from "../GlobalStyle";

const Home = lazy(() => import("../pages/HomePage"));
const Catalog = lazy(() => import("../pages/CatalogPage"));
const Favorites = lazy(() => import("../pages/FavoritesPage"));

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Route>
            </Routes>
            <GlobalStyle />
        </>
    );
}
