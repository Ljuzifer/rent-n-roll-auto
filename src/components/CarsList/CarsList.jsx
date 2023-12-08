import { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectCars } from "../../redux/cars/carsSelectors";
import { carsNumerator } from "../../utils/numerosityHelper";
import CarsItem from "../CarsItem/CarsItem";
import LoadButton from "../LoadButton/LoadButton";

const AUTO_COUNT = 12;

export default function CarsList({ catalog }) {
    const [currentPage, setCurrentPage] = useState(1);

    const shownCars = currentPage * AUTO_COUNT;

    const loadMore = () => setCurrentPage((prevPage) => prevPage + 1);

    return (
        <>
            <ul style={{ display: "flex", flexWrap: "wrap", columnGap: "29px", rowGap: "50px" }}>
                {carsNumerator(catalog, shownCars).map((car) => (
                    <li key={car.id}>
                        <CarsItem car={car} />
                    </li>
                ))}
            </ul>
            {catalog?.length > shownCars && <LoadButton loadMore={loadMore} />}
        </>
    );
}

CarsList.propTypes;
