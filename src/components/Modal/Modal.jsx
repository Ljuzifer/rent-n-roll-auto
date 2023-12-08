import Modal from "react-modal";
import DefaultCar from "../../imgs/default-car.jpg";
import CompleteSet from "../ModalRental/ModalCompleteSet";
import ModalRental from "../ModalRental/ModalRental";

Modal.setAppElement("#root");

const customStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 6666,
        overflow: "auto",
    },

    content: {
        maxWidth: "fit-content",
        maxHeight: "fit-content",
        margin: "auto",
        overflow: "auto",
        inset: 0,
        border: "none",
        background: "none",
        padding: 0,
    },
};

export default function ModalBox({ state, forClose, data, city, country }) {
    const {
        id,
        year,
        make,
        model,
        type,
        img,
        description,
        fuelConsumption,
        engineSize,
        photoLink,
        accessories,
        functionalities,
        rentalPrice,
        rentalConditions,
        mileage,
    } = data;

    return (
        <Modal isOpen={state} onRequestClose={forClose} style={customStyles}>
            <div
                style={{
                    border: "2px",
                    borderRadius: "24px",
                    padding: "40px",
                    width: "541px",
                    height: "752px",
                    backgroundColor: "white",
                }}>
                <button style={{ position: "absolute", top: "16px", right: "16px" }} type="button" onClick={forClose}>
                    x
                </button>
                <img
                    style={{ borderRadius: "14px", objectFit: "cover" }}
                    src={img || photoLink || DefaultCar}
                    alt={`${make} ${model}`}
                    width="100%"
                    height="248px"
                    loading="lazy"
                />
                <h3>
                    {make} <span>{model}</span>, {year}
                </h3>
                <div>
                    <p>
                        {city} | {country} | Id: {id} | Year: {year} | Type: {type}
                    </p>
                    <p>
                        Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
                    </p>
                </div>
                <p>{description}</p>
                <h4>Accessories and functionalities:</h4>
                <div>
                    <CompleteSet set={accessories} />
                    <CompleteSet set={functionalities} />
                </div>
                <h4>Rental Conditions:</h4>
                <ModalRental conditions={rentalConditions} price={rentalPrice} mileage={mileage} />

                <a href="tel:+380730000000">Rental car</a>
            </div>
        </Modal>
    );
}

ModalBox.propTypes;
