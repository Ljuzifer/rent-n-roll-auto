import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter/Filter";
import CarsItem from "../components/CarsItem/CarsItem";
import { selectFavorites, selectFilter } from "../redux/cars/carsSelectors";
import { setFilter } from "../redux/cars/carsSlice";
import { autoFiltration } from "../utils/filterHelper";
import { MainContainer, SectionContainer } from "../GlobalStyle";

export default function FavoritesPage() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const favorites = useSelector(selectFavorites);

    const choisenAutos = autoFiltration(favorites, filter);

    useEffect(() => {
        dispatch(setFilter(null));
    }, [dispatch]);

    return (
        <MainContainer>
            {favorites?.length > 0 ? <Filter cars={choisenAutos} /> : null}

            {choisenAutos?.length === 0 ? (
                <SectionContainer>
                    <div style={{ height: "calc(100vh - 175px)" }}>
                        <b style={{ display: "flex", justifyContent: "center", fontSize: "44px" }}>
                            Oops...! Cars Not Found At Favorites List 😊
                        </b>
                    </div>
                </SectionContainer>
            ) : (
                <SectionContainer>
                    <ul style={{ display: "flex", flexWrap: "wrap", columnGap: "29px", rowGap: "50px" }}>
                        {choisenAutos.map((car) => (
                            <li key={car.id}>
                                <CarsItem car={car} />
                            </li>
                        ))}
                    </ul>
                </SectionContainer>
            )}
        </MainContainer>
    );
}
