import { styled } from "styled-components";

export const HeroDiv = styled.div`
    font-weight: 500;
    font-size: 55px;
    letter-spacing: -13px;
    width: 100%;
    height: 666px;
    background-color: grey;
    background-image: url(${(props) => props.font});
    background-size: cover;
    background-position: center;
    border-radius: 22px;
    color: white;
    text-shadow: 8px 8px 18px rgba(0, 0, 0, 0.8);
    text-align: center;
    padding: 100px 20px;
    margin-bottom: 20px;

    span {
        font-weight: 800;
        font-size: 88px;
        letter-spacing: -4px;
        color: rgba(11, 68, 205, 1);
        text-shadow: 8px 8px 18px rgba(0, 0, 0, 1);
    }

    p {
        font-weight: 400;
        font-size: 44px;
        letter-spacing: 2px;
        text-shadow: 8px 8px 18px rgba(255, 255, 255, 0.8);
        color: black;
    }
`;

export const PartHeroDiv = styled.div`
    width: 100%;
    border-radius: 22px;
    margin: 20px auto;
    padding: 20px;
    color: white;
    text-align: center;
    background-color: rgba(52, 112, 255, 1);
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.8);

    p {
        line-height: 2.2;
    }

    h3 {
        &:hover,
        &:focus {
            color: rgba(11, 68, 205, 1);
        }
    }
`;
