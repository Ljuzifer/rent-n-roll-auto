// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchAllCars } from "../../redux/cars/carsThunk";

import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/carsSelectors";
import CarsItem from "../CarsItem/CarsItem";

export default function CarsList() {
    const catalog = useSelector(selectCars);

    return (
        <>
            <ul style={{ display: "flex", flexWrap: "wrap", columnGap: "29px", rowGap: "50px" }}>
                {catalog.map((car) => (
                    <li key={car.id}>
                        <CarsItem car={car} />
                    </li>
                ))}
            </ul>
        </>
    );
}
