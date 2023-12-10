import { styled } from "styled-components";

export const HeaderDiv = styled.div`
    position: fixed;
    top: 5px;
    z-index: 666;

    display: flex;
    justify-content: space-between;
    width: 1184px;
    padding: 8px;
    border-radius: 25px;
    background-color: rgba(52, 112, 255, 0.9);

    &:hover {
        background-color: rgba(11, 68, 205, 1);
    }
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    min-width: 255px;
    padding: 4px 8px;
    border-radius: 22px;
    background-color: rgba(208, 208, 204, 1);

    p {
        font-weight: 800;
        font-size: 18px;
        font-style: italic;
        line-height: 28px;
        margin-left: 8px;
        color: rgba(52, 112, 255, 1);

        span {
            color: rgba(255, 50, 5, 1);
        }
    }
`;
