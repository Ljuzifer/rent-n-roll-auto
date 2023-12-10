import { SectionContainer } from "../GlobalStyle";

export default function NotFound() {
    return (
        <SectionContainer>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "100%",
                    paddingTop: 200,
                    paddingBottom: "auto",
                }}>
                <h1 style={{ fontSize: 120 }}>404</h1>
                <b style={{ fontSize: 28 }}>Sorry, we couldn`t find that page...</b>
            </div>
        </SectionContainer>
    );
}
