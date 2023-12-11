import { useState } from "react";
import { SectionContainer } from "../../GlobalStyle";
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
            <SectionContainer>
                <ul style={{ display: "flex", flexWrap: "wrap", columnGap: "29px", rowGap: "50px" }}>
                    {carsNumerator(catalog, shownCars).map((car) => (
                        <li key={car.id}>
                            <CarsItem car={car} />
                        </li>
                    ))}
                </ul>
                {catalog?.length > shownCars && <LoadButton loadMore={loadMore} />}
            </SectionContainer>

            {catalog.length === 0 && (
                <SectionContainer>
                    <div style={{ height: "100vh" }}>
                        <b style={{ display: "flex", justifyContent: "center" }}>
                            Oops...! Cars Not Found 😊 Try another options.
                        </b>
                    </div>
                </SectionContainer>
            )}
        </>
    );
}

CarsList.propTypes;
