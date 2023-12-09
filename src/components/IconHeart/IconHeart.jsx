import { FiHeart } from "react-icons/fi";
import { IconHeartDiv } from "./IconHeart.styled";

export default function IconHeart({ isLiked, onClick }) {
    return (
        <IconHeartDiv isLiked={isLiked} onClick={onClick}>
            <FiHeart />
        </IconHeartDiv>
    );
}

IconHeart.propTypes;
