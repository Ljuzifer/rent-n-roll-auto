import { LoadMoreButton } from "./LoadButton.styled";

export default function LoadButton({ loadMore }) {
    return (
        <LoadMoreButton
            style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginBottom: "150px" }}
            type="button"
            onClick={loadMore}>
            Load more
        </LoadMoreButton>
    );
}

LoadButton.propTypes;
