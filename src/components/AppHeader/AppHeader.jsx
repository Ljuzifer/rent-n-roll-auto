import { ReactSVG } from "react-svg";
import AppNav from "../AppNav/AppNav";
import logo from "../../imgs/car-logo.svg";
import { SectionContainer } from "../../GlobalStyle";
import { HeaderDiv, LogoDiv } from "./AppHeader.styled";

export default function AppHeader() {
    return (
        <header>
            <SectionContainer>
                <HeaderDiv>
                    <LogoDiv>
                        <ReactSVG src={logo} style={{ fill: "rgba(18, 20, 23, 1)", width: "100px" }} />
                        <p>
                            RENT`N`ROLL <span>AUTO</span>
                        </p>
                    </LogoDiv>
                    <AppNav />
                </HeaderDiv>
            </SectionContainer>
        </header>
    );
}
