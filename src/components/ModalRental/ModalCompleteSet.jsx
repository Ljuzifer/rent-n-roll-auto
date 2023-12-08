export default function CompleteSet({ set }) {
    return (
        <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", margin: 0, padding: 0 }}>
            {set.map((item, index) => (
                <li key={index} style={{ whiteSpace: "pre" }}>
                    {item}
                    {index < set.length - 1 && <span>{" | "}</span>}
                </li>
            ))}
        </ul>
    );
}

CompleteSet.propTypes;
