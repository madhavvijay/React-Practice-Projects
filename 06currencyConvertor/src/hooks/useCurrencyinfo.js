import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    useEffect(() => {
        const [data, setData] = useState({})
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then(() => )
    }, [])
}