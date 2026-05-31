


export const phoneExampleMapping = {
    "de": "+49 548521478",
    "at": "+43 548521478",
    "it": "+39 237654390",
    "ru": "+7 9998877555",
    "ro": "+40 312296835",
    "pl": "+48 780 185 369",
    "ch": "+41 442 320 125",
    "tr": "+90 345679845",
    "hu": "+36 15507305",
    "kz": "+7 717 297 2000"
}

export const nameExampleMapping = {
    "de": "Wilhelm Stolz",
    "at": "Wilhelm Stolz",
    "it": "Anna Rossi",
    "ru": "Сергей Иванов",
    "ro": "Adrian Adrelean",
    "pl": "Jan Kowalski",
    "ch": "Louis Müller",
    "tr": "Emre",
    "hu": "Adojan Kovács",
    "kz": "Алихан"
}

export const countryMapping = {
    "de": "Deutschland",
    "at": "Österreich",
    "it": "Italia",
    "ru": "Россия",
    "ro": "România",
    "pl": "Polska",
    "ch": "Schweiz",
    "tr": "Türkiye",
    "hu": "Magyarország",
    "kz": "Казахстан"
}


export const getCurrencyIcon = (currency) => {
    const mapping = {
        "EUR": "€",
        "USD": "$",
        "RUB": "₽",
        "KZT": "тг",
        "BYN": "р.",
        "RON": "LEI",
        "BGL": "лв",
        "MDL": "лей"
    }
    return mapping[(currency || "").toUpperCase()]
}


export const processStringWithVariables = (template, data) => {
    return (template || "").replace(/\$\{([^\}]+)\}/g, (_, key) => {
        let keys = key.split('.');
        if (keys.length === 1) {
            return data[keys[0]] || '';
        } else if (keys.length === 2) {
            return data[keys[0]] && data[keys[0]][keys[1]] || '';
        }
        return '';
    });
}