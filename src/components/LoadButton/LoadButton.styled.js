import { styled } from "styled-components";

export const LoadMoreButton = styled.button`
    display: block;
    color: rgba(52, 112, 255, 1);

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
    border: none;
    background: transparent;
    margin: 0 auto;
    transition: color 0.3s;

    margin-top: 100px;

    &:hover,
    &:active,
    &:focus {
        color: rgba(11, 68, 205, 1);
    }
`;
