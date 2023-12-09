import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinnerComponent from "react-spinners-components";
import CarsList from "../components/CarsList/CarsList";
import Filter from "../components/Filter/Filter";
import { selectCars, selectFilter, selectIsLoading } from "../redux/cars/carsSelectors";
import { setFilter } from "../redux/cars/carsSlice";
import { fetchAllCars } from "../redux/cars/carsThunk";
import { autoFiltration } from "../utils/filterHelper";

export default function CatalogPage() {
    const dispatch = useDispatch();
    const catalog = useSelector(selectCars);
    const filter = useSelector(selectFilter);
    const isLoading = useSelector(selectIsLoading);

    const choisenAutos = autoFiltration(catalog, filter);

    useEffect(() => {
        dispatch(fetchAllCars());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setFilter(null));
    }, [dispatch]);

    return (
        <>
            {isLoading && <LoadingSpinnerComponent type={"Gear"} color={"blue"} size={"220px"} />}
            <Filter cars={choisenAutos} />
            {catalog.length !== 0 && <CarsList catalog={choisenAutos} />}
        </>
    );
}
