import {useState} from "react"

import ReactDOM from "react-dom";

import {ThemeProvider} from 'styled-components'

//Import Atomic Components
import PrimaryButton, { SecondaryButton, TertiaryButton } from "./components/Buttons";

import {GlobalStyle, darkTheme, defaultTheme} from './utils'


const App = () => 
    const [useDarkTheme, setUseDarkTheme] = useState(false);

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button style={{margin: "0 16px 24px", padding:"8px", background="none"}} onClick={() =>setUseDarkTheme(true)}>Dark Theme</button>
            <PrimaryButton modifiers={["small", "error", "primaryButtonError"]}>Hello world</PrimaryButton>
            <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Hello world</SecondaryButton>
            <TertiaryButton modifiers={[ "success"]}>Hello world</TertiaryButton>
            <GlobalStyle />
        </ThemeProvider>
    )
)

;

ReactDOM.render(<App />, document.querySelector('#root'));