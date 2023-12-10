import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import LoadingSpinnerComponent from "react-spinners-components";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate
                loading={<LoadingSpinnerComponent type={"Gear"} color={"blue"} size={"220px"} />}
                persistor={persistor}>
                <BrowserRouter basename="/rent-n-roll-auto">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
