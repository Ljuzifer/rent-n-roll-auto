import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatAddress, shortString } from "../../utils/formatHelper";
import { delFromFavorites, addToFavorites } from "../../redux/cars/carsSlice";
import { selectFavorites } from "../../redux/cars/carsSelectors";
import ModalBox from "../Modal/Modal";
import DefaultCar from "../../imgs/default-car.jpg";
import { FiHeart } from "react-icons/fi";
import { AutoThumb, IconHeart, ImageThumb } from "./CarsItem.styled";

export default function CarsItem({ car }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const choisen = useSelector(selectFavorites);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { id, year, make, model, type, img, photoLink, functionalities, rentalPrice, rentalCompany, address } = car;
    const { city, country } = formatAddress(address);
    const short = shortString(functionalities);
    const isChoisen = choisen?.some((i) => i.id === id);

    const handleHeartClick = () => {
        return isChoisen ? dispatch(delFromFavorites(car)) : dispatch(addToFavorites(car));
    };

    return (
        <>
            <AutoThumb>
                <ImageThumb>
                    <IconHeart onClick={handleHeartClick}>
                        <FiHeart
                            style={{
                                width: "18px",
                                height: "18px",
                                fill: isChoisen ? "rgba(52, 112, 255, 1)" : "transparent",
                                stroke: isChoisen ? "rgba(52, 112, 255, 1)" : "white",
                                cursor: "pointer",
                                transition: "fill 0.3s ease, stroke 0.3s ease",
                            }}
                        />
                    </IconHeart>
                    <img
                        src={img || photoLink || DefaultCar}
                        alt={`${make} ${model}`}
                        width="100%"
                        height="100%"
                        loading="lazy"
                    />
                </ImageThumb>
                <div>
                    <p>
                        {make} <span>{model}</span>, {year}
                    </p>
                    <p>{rentalPrice}</p>
                </div>
                <div>
                    <p>
                        {city} | {country} | {rentalCompany}
                    </p>
                    <p>
                        {type} | {model} | {id} | {short}
                    </p>
                    <button type="button" onClick={openModal}>
                        Learn more
                    </button>
                </div>
            </AutoThumb>

            <ModalBox state={isModalOpen} forClose={closeModal} data={car} city={city} country={country} />
        </>
    );
}

CarsItem.propTypes;
