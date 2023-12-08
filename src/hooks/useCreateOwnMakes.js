import { useState, useEffect } from "react";

export const useCreateOwnMakes = (data, value) => {
    const [ownValues, setOwnValues] = useState([]);

    useEffect(() => {
        if (!value) {
            return;
        }

        const values = [...new Set(data.map((item) => item[value]))];
        setOwnValues(values);
    }, [data, value]);

    return ownValues;
};
