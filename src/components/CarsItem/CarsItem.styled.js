import { FiHeart } from "react-icons/fi";
import { styled } from "styled-components";

export const AutoThumb = styled.div`
    width: 274px;
`;

export const ImageThumb = styled.div`
    position: relative;
    background-color: beige;
    /* background-image: url("../../imgs/default-car.jpg"); */
    width: 274px;
    height: 268px;
    border-radius: 14px;

    img {
        border-radius: 14px;
        object-fit: cover;
    }
`;

export const IconHeart = styled.div`
    position: absolute;
    top: 14px;
    right: 14px;
`;

export const IconSVG = styled(FiHeart)`
    width: 18px;
    height: 18px;
    fill: ${(props) => (props.isLiked ? "blue" : "trasparent")};
    stroke: ${(props) => (props.isLiked ? "blue" : "white")};
    cursor: pointer;
    transition: fill 0.3s ease, stroke 0.3s ease;

    &:hover {
        fill: ${(props) => (props.isLiked ? "royalblue" : "ligthgrey")};
        stroke: ${(props) => (props.isLiked ? "royalblue" : "ligthgrey")};
    }
`;
