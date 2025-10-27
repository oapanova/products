//Core
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
//Components
import App from './App.tsx'
//Store
import store from "./store/store.ts";
//Theme
import theme from "./theme";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
)
