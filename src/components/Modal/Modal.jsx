import Modal from "react-modal";
import DefaultCar from "../../imgs/default-car.jpg";
import CompleteSet from "../ModalRental/ModalCompleteSet";
import ModalRental from "../ModalRental/ModalRental";
import {
    ButtonClose,
    ButtonRental,
    FunctionsDiv,
    ImageDiv,
    MainModalDiv,
    RentalWrapDiv,
    ShortInfoDiv,
} from "./Modal.styled";
import { MdOutlineClose } from "react-icons/md";
import auto from "../../imgs/default.webp";

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
            <MainModalDiv>
                <ButtonClose type="button" onClick={forClose}>
                    <MdOutlineClose />
                </ButtonClose>
                <ImageDiv auto={auto}>
                    <img src={img || photoLink || DefaultCar} alt={`${make} ${model}`} loading="lazy" />
                </ImageDiv>
                <h3>
                    {make} <span>{model}</span>, {year}
                </h3>
                <ShortInfoDiv>
                    <p>
                        {city} | {country} | Id: {id} | Year: {year} | Type: {type}
                    </p>
                    <p>
                        Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
                    </p>
                </ShortInfoDiv>
                <p>{description}</p>
                <h4>Accessories and functionalities:</h4>
                <FunctionsDiv>
                    <CompleteSet set={accessories} />
                    <CompleteSet set={functionalities} />
                </FunctionsDiv>
                <h4>Rental Conditions:</h4>
                <ModalRental conditions={rentalConditions} price={rentalPrice} mileage={mileage} />
                <RentalWrapDiv>
                    <ButtonRental href="tel:+380730000000">Rental car</ButtonRental>
                </RentalWrapDiv>
            </MainModalDiv>
        </Modal>
    );
}

ModalBox.propTypes;
