// import PropTypes from "prop-types";
import formatAddress from "../../utils/formatHelper";
import DefaultCar from "../../imgs/default-car.jpg";

export default function CarsItem({ car }) {
    const { id, year, make, model, type, img, photoLink, functionalities, rentalPrice, rentalCompany, address } = car;
    const { city, country } = formatAddress(address);

    return (
        <>
            <div style={{ width: "274px" }}>
                <div style={{ width: "274px", height: "268px" }}>
                    <img
                        src={img || photoLink || DefaultCar}
                        alt={`${make} ${model}`}
                        width="274"
                        height="268"
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
                        {type} | {model} | {id} | {functionalities[0]}
                    </p>
                    <button type="button">Learn more</button>
                </div>
            </div>
        </>
    );
}

CarsItem.propTypes;
