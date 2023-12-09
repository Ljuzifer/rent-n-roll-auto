import { styled } from "styled-components";

export const ButtonClose = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: transparent;
    border: none;

    svg {
        width: 24px;
        height: 24px;
        scale: 1;
        fill: rgba(18, 20, 23, 1);
        transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1), stroke 200ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover,
        &:focus {
            fill: rgba(52, 112, 255, 1);
            scale: 1.2;
        }
    }
`;

export const ButtonRental = styled.a`
    display: inline-flex;
    padding: 12px 50px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #3470ff;
    border: transparent;
    color: white;
    font-weight: 600;
    line-height: 1.43;

    margin-top: auto;

    &:hover,
    &:focus,
    &:active {
        background: #0b44cd;
    }
`;
