import React, { useEffect, useState } from "react";
import "./App.css";
import BreweryList from "./components/BreweryList";
import Form from "./components/Form";
import { formProps, memoryFormat } from "./script/globalInterface";
import { buttonList, urlPrefix, urlPerPage } from "./script/globalVariable";
import {
    by_name,
    by_city,
    by_dist_lat,
    by_dist_lon,
    by_state,
    by_postal_code,
    by_type,
    by_country,
} from "./script/globalRef";

function App() {
    const [type, setType] = useState<formProps["type"]>("by_name");
    const [memory, setMemory] = useState<memoryFormat[]>([]);

    const firstCall = async () => {
        let response = await fetch(`${urlPrefix}/random?size=${1}`, {
            // https://api.openbrewerydb.org/breweries/random?size=3
            mode: "cors",
        });
        let refinedResponse = await response.json();
        console.log(refinedResponse.length);
        setMemory([...refinedResponse]);
    };

    useEffect(() => {
        firstCall();
    }, []);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        console.log("HERE !");
        let urlSuffix = {
            by_name: `by_name=${by_name.current?.value
                ?.replace(" ", "%20")
                .toLowerCase()}&per_page=${urlPerPage}`,
            by_city: `by_city=${by_city.current?.value
                ?.replace(" ", "%20")
                .toLowerCase()}&per_page=${urlPerPage}`,
            by_dist: `by_dist=${by_dist_lat.current?.value},${by_dist_lon.current?.value}&per_page=${urlPerPage}`,
            by_state: `by_state=${by_state.current?.value
                ?.replace(" ", "%20")
                .toLowerCase()}&per_page=${urlPerPage}`,
            by_postal: `by_postal=${by_postal_code.current?.value}&per_page=${urlPerPage}`,
            by_type: `by_type=${by_type}&per_page${urlPerPage}`,
            by_country: `by_country=${by_country.current?.value
                ?.replace(" ", "%20")
                .toLowerCase()}&per_page=${urlPerPage}`,
        };

        event.preventDefault();
        let response = await fetch(`${urlPrefix}${urlSuffix[type]}`, {
            mode: "cors",
        });
        let refinedResponse = await response.json();
        setMemory([...refinedResponse]);
    };

    return (
        <div className="App">
            <div className="selectForm">
                <span>Filter by : </span>
                {buttonList.map((el, id) => {
                    return (
                        <React.Fragment key={id}>
                            <button
                                onClick={() => {
                                    setType(el.value);
                                }}
                            >
                                {el.label}
                            </button>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className="form">
                <Form type={type} handleSubmit={handleSubmit}></Form>
            </div>
            <button
                onClick={() => {
                    console.log(memory);
                }}
            >
                Console data
            </button>
            <BreweryList memory={memory} />
        </div>
    );
}

export default App;
