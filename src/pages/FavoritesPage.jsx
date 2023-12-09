import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter/Filter";
import CarsItem from "../components/CarsItem/CarsItem";
import LoadButton from "../components/LoadButton/LoadButton";
import { selectFavorites, selectFilter } from "../redux/cars/carsSelectors";
import { setFilter } from "../redux/cars/carsSlice";
import { autoFiltration } from "../utils/filterHelper";
// import { carsNumerator } from "../utils/numerosityHelper";

const AUTO_COUNT = 12;

export default function FavoritesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const favorites = useSelector(selectFavorites);

    const choisenAutos = autoFiltration(favorites, filter);
    const shownCars = currentPage * AUTO_COUNT;

    const loadMore = () => setCurrentPage((prevPage) => prevPage + 1);

    useEffect(() => {
        dispatch(setFilter(null));
    }, [dispatch]);

    return (
        <>
            {favorites.length > 0 ? <Filter cars={choisenAutos} /> : <b>NO CHOISEN AUTOS</b>}

            <ul style={{ display: "flex", flexWrap: "wrap", columnGap: "29px", rowGap: "50px" }}>
                {choisenAutos.map((car) => (
                    <li key={car.id}>
                        <CarsItem car={car} />
                    </li>
                ))}
            </ul>

            {favorites?.length > shownCars && <LoadButton loadMore={loadMore} />}
        </>
    );
}
