// import PropTypes from "prop-types";
import { useState } from "react";
import { formatAddress, shortString } from "../../utils/formatHelper";
import DefaultCar from "../../imgs/default-car.jpg";
import ModalBox from "../Modal/Modal";

export default function CarsItem({ car }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { id, year, make, model, type, img, photoLink, functionalities, rentalPrice, rentalCompany, address } = car;
    const { city, country } = formatAddress(address);
    const short = shortString(functionalities);

    return (
        <>
            <div style={{ width: "274px" }}>
                <div
                    style={{
                        backgroundColor: "lightgrey",
                        width: "274px",
                        height: "268px",
                        borderRadius: "14px",
                    }}>
                    <img
                        style={{ borderRadius: "14px", objectFit: "cover" }}
                        src={img || photoLink || DefaultCar}
                        alt={`${make} ${model}`}
                        width="100%"
                        height="100%"
                        loading="lazy"
                    />
                </div>
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
            </div>

            <ModalBox state={isModalOpen} forClose={closeModal} data={car} city={city} country={country} />
        </>
    );
}

CarsItem.propTypes;
