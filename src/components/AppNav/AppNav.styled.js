import { styled } from "styled-components";

export const Navigation = styled.nav`
    display: flex;
    align-self: center;
    justify-content: space-between;
    width: 280px;
    margin-right: 13px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 33px;
        background-color: white;
        border-radius: 10px;
        color: rgba(11, 68, 205, 1);

        &:hover,
        &:active,
        &:focus {
            color: white;
            background-color: rgba(11, 68, 205, 1);
        }
    }
`;
