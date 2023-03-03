import { buttonFormat, formProps, typeFormat } from "./globalInterface";

export const urlPrefix: string = `https://api.openbrewerydb.org/breweries?`;
export const urlPerPage: number = 25; 
export const typeList: typeFormat[] = [
    { value: "micro", label: "Micro", desc: "Most craft breweries" },
    {
        value: "nano",
        label: "Nano",
        desc: "Extremely small brewery",
    },
    {
        value: "regional",
        label: "Regional",
        desc: "Regional location",
    },
    {
        value: "brewpub",
        label: "Brewpub",
        desc: "A beer-focused restaurant",
    },
    {
        value: "large",
        label: "Large",
        desc: "Large brewery. Likely not for visitors.",
    },
    {
        value: "planning",
        label: "Planning",
        desc: "Not yet opened to the public.",
    },
    {
        value: "bar",
        label: "Bar",
        desc: "A bar. (No longer in use)",
    },
    {
        value: "contract",
        label: "Contract",
        desc: "",
    },
    {
        value: "proprietor",
        label: "Proprietor",
        desc: "",
    },
    {
        value: "closed",
        label: "Closed",
        desc: "",
    },
];
export const buttonList: buttonFormat[] = [
    {value:"by_name", label:"Name"},
    {value:"by_city", label:"City"},
    {value:"by_dist", label:"District"},
    {value:"by_state", label:"State"},
    {value:"by_postal", label:"Postal code"},
    {value:"by_type", label:"Type"},
    {value:"by_country", label:"Country"},
]