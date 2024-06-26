import React, { useState } from "react";
import PropTypes from "prop-types";

export const GlobalStoreContext = React.createContext();

export const GlobalStoreProvider = ({ children }) => {


    const [theme, setTheme] = useState("light");


    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const value = {
        theme,toggleTheme,
    };

    return <GlobalStoreContext.Provider value={value}>{children}</GlobalStoreContext.Provider>;
};

GlobalStoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

