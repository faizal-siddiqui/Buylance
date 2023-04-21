import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { extendTheme } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const breakpoints = {
  sm: "320px",
  md: "750px",
  lg: "1200px",
};

const theme = extendTheme({ breakpoints });
console.log(theme);

root.render(
  <Provider store={store}>
    <Auth0Provider
    domain="dev-wumuwoqxmlgqdmlr.us.auth0.com"
    clientId="t6PL8uIEdot7ROTFpR8B55tVdiRCVElO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
    </Auth0Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
