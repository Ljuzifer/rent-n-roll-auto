import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CarsList from "../components/CarsList/CarsList";
import { fetchAllCars } from "../redux/cars/carsThunk";

export default function CatalogPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCars());
    }, [dispatch]);

    return (
        <>
            <h1>Catalog</h1>
            <CarsList />
        </>
    );
}
