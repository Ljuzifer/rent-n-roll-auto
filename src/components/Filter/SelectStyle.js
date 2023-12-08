export const carStyles = {
    singleValue: (styles) => ({
        ...styles,
        color: "#121417",
    }),

    control: (styles, { isSelected }) => ({
        ...styles,
        display: "flex",
        color: isSelected ? "#121417" : "#12141733",
        backgroundColor: "#F7F7FB;",
        width: "224px",
        borderRadius: "14px",
        padding: "14px 18px",
        lineHeight: "1.11",
        fontFamily: "Manrope, sans-serif",
        fontSize: "18px",
        fontWeight: "500",
        outline: "none",
        border: "none",
        boxShadow: "none",
        cursor: "pointer",
    }),
    option: (styles, state) => ({
        ...styles,
        color: state.isSelected ? "var(--blue)" : "rgba(18, 20, 23, 0.20)",
        fontFamily: "Manrope, sans-serif",
        fontWeight: "500",
        fontSize: "16px",

        cursor: "pointer",
        lineHeight: "20px",
        backgroundColor: "none",
    }),
    menu: (styles) => ({
        ...styles,

        top: "44x",
        backgroundColor: "#fff",
        padding: "14px 8px 14px 18px",
        borderRadius: "14px",
        border: "1px solid rgba(18, 20, 23, 0.05)",
        boxShadow: "px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    }),
    menuList: (provided) => ({
        ...provided,

        boxSizing: "content-box",
        "&::-webkit-scrollbar": {
            width: "8px",
            height: "110px",
            position: "relative",
            right: "-4px",
            top: 0,
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            background: "#1214170D",
        },
        "&::-webkit-scrollbar-track": {
            background: "#fff",
        },
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    valueContainer: (styles) => ({
        ...styles,
        padding: "0px",
        margin: "0px",
    }),
    input: (styles) => ({
        ...styles,
        padding: "0px",
        margin: "0px",
    }),

    dropdownIndicator: (styles, state) => ({
        ...styles,
        padding: 0,
        color: "#121417",
        transition: "all .3s ease",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
    placeholder: (styles) => ({
        ...styles,
        color: "#121417",
    }),
};

export const priceStyles = {
    singleValue: (styles) => ({
        ...styles,
        color: "#121417",
    }),

    control: (styles, { isSelected }) => ({
        ...styles,
        display: "flex",
        color: isSelected ? "#121417" : "#12141733",
        backgroundColor: "#F7F7FB;",
        width: "125px",
        borderRadius: "14px",
        padding: "14px 18px",
        lineHeight: "1.11",
        fontFamily: "Manrope, sans-serif",
        fontSize: "18px",
        fontWeight: "500",
        outline: "none",
        border: "none",
        boxShadow: "none",
        cursor: "pointer",
    }),
    option: (styles, state) => ({
        ...styles,
        color: state.isSelected ? "var(--blue)" : "rgba(18, 20, 23, 0.20)",
        fontFamily: "Manrope, sans-serif",
        fontWeight: "500",
        fontSize: "16px",
        cursor: "pointer",
        lineHeight: "20px",
        backgroundColor: "none",
    }),
    menu: (styles) => ({
        ...styles,

        top: "44x",
        backgroundColor: "#fff",
        padding: "14px 8px 14px 18px",
        borderRadius: "14px",
        border: "1px solid rgba(18, 20, 23, 0.05)",
        boxShadow: "px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    }),
    menuList: (provided) => ({
        ...provided,

        boxSizing: "content-box",
        "&::-webkit-scrollbar": {
            width: "8px",
            height: "110px",
            position: "relative",
            right: "-4px",
            top: 0,
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            background: "#1214170D",
        },
        "&::-webkit-scrollbar-track": {
            background: "#fff",
        },
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    valueContainer: (styles) => ({
        ...styles,
        padding: "0px",
        margin: "0px",
    }),
    input: (styles, state) => ({
        ...styles,
        padding: "0px",
        margin: "0px",
        "&:after": {
            content: !state.value.length ? '"$"' : '""',
            position: "absolute",
            color: "#121417",
            right: "20px",
            top: "0px",
        },
    }),

    dropdownIndicator: (styles, state) => ({
        ...styles,
        padding: 0,
        color: "#121417",
        transition: "all .3s ease",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
    placeholder: (styles) => ({
        ...styles,
        color: "#121417",
    }),
};
