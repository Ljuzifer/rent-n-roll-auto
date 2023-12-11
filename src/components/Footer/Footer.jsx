import { FooterBlock } from "./Footer.styled";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
    return (
        <FooterBlock style={{ whiteSpace: "pre" }}>
            &copy; 2023 Rent`N`Roll Auto. All rights reserved.{"    "}Created by{" "}
            <a
                href="https://www.linkedin.com/in/ljuzifer/"
                target="_blank"
                rel="noreferrer noopener"
                style={{ display: "flex", alignItems: "center" }}>
                &copy; LJUZIFER{"    "}
                <SiLinkedin style={{ fontSize: "20px" }} />
            </a>
        </FooterBlock>
    );
}
