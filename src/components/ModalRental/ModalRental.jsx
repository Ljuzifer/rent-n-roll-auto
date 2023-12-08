import { parseMileage, parsePrice, parseRentalConditions } from "../../utils/numerosityHelper";
import ModalRentalItem from "./ModalRentalItem";

export default function ModalRental({ conditions, price, mileage }) {
    const text = parseRentalConditions(conditions);
    const money = parsePrice(price);
    const race = parseMileage(mileage);

    return (
        <>
            <ul>
                <ModalRentalItem title={text[0]} value={text[1]} />
                <ModalRentalItem title={text[2]} />
                <ModalRentalItem title={text[3]} />
                <ModalRentalItem title={"Mileage: "} value={race} />
                <ModalRentalItem title={"Price: "} value={`${money}$`} />
            </ul>
        </>
    );
}

ModalRental.propTypes;
