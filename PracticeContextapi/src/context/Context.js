import React, { useContext } from "react";
const ThemeContext = React.createContext({
    theme: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}