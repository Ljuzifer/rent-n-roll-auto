import { styled } from "styled-components";

export const RentalList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    /* margin-bottom: 8px; */

    li {
        border-radius: 35px;
        background: #f9f9f9;
        padding: 7px 14px;

        color: #363535;

        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 150% */
        letter-spacing: -0.24px;

        span {
            color: #3470ff;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: -0.24px;
        }
    }
`;
