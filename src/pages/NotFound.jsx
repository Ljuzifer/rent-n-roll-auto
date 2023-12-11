import { SectionContainer } from "../GlobalStyle";

export default function NotFound() {
    return (
        <SectionContainer>
            <div
                style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "calc(100vh - 38px)",
                    paddingTop: 200,
                }}>
                <h1 style={{ fontSize: 120 }}>404</h1>
                <b style={{ fontSize: 28 }}>Sorry, we couldn`t find that page...</b>
            </div>
        </SectionContainer>
    );
}
