import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingSpinnerComponent from "react-spinners-components";
import AppHeader from "./AppHeader/AppHeader";

export default function Layout() {
    return (
        <div>
            <AppHeader />
            <Suspense
                fallback={
                    <LoadingSpinnerComponent
                        type={"Gear"}
                        color={"blue"}
                        size={"220px"}
                    />
                }>
                <Outlet />
            </Suspense>
        </div>
    );
}
