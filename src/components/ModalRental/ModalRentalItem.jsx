export default function ModalRentalItem({ title, value }) {
    return (
        <li>
            {title}
            {value && <span>{value} </span>}{" "}
        </li>
    );
}

ModalRentalItem.propTypes;
