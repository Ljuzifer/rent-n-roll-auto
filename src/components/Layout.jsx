import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingSpinnerComponent from "react-spinners-components";
import AppHeader from "./AppHeader/AppHeader";
import Footer from "./Footer/Footer";
import { selectIsLoading } from "../redux/cars/carsSelectors";

export default function Layout() {
    const isLoading = useSelector(selectIsLoading);

    return (
        <>
            <AppHeader />
            <Suspense fallback={<LoadingSpinnerComponent type={"Gear"} color={"blue"} size={"220px"} />}>
                <Outlet />
                {!isLoading && <Footer />}
            </Suspense>
        </>
    );
}
