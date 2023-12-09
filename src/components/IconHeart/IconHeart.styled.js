import { styled } from "styled-components";

export const IconHeartDiv = styled.div`
    position: absolute;
    top: 14px;
    right: 14px;

    z-index: 666;

    svg {
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
    }
`;
