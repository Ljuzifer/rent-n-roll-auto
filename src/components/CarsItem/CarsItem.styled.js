import { styled } from "styled-components";

export const AutoThumb = styled.div`
    display: flex;
    flex-direction: column;
    width: 274px;
    height: 426px;
`;

export const ImageThumb = styled.div`
    position: relative;
    background-color: beige;
    width: 274px;
    height: 268px;
    border-radius: 14px;
    margin-bottom: 14px;

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

export const ButtonLearn = styled.button`
    width: 100%;
    padding: 12px 0;
    border: transparent;
    border-radius: 12px;
    background-color: #3470ff;

    color: white;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;

    transition: background-color 0.3s;

    &:hover,
    &:focus {
        background-color: #0b44cd;
    }
`;

export const TitleThumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    color: #121417;
    font-family: Manrope;
    font-size: 13px; /* 16px */
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */

    span {
        color: #3470ff;
    }
`;

export const InfoThumb = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: auto;

    p {
        color: rgba(18, 20, 23, 0.5);

        font-family: Manrope;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 150% */
    }
`;
