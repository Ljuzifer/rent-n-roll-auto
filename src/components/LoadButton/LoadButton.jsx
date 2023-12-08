export default function LoadButton({ loadMore }) {
    return (
        <button
            style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginBottom: "150px" }}
            type="button"
            onClick={loadMore}>
            Load more
        </button>
    );
}

LoadButton.propTypes;
