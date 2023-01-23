import React, { createRef } from "react";
import { formProps } from "../script/globalInterface";
import { typeList, urlPrefix, urlPerPage } from "../script/globalVariable";
import { by_name, by_city, by_dist_lat, by_dist_lon, by_state, by_postal_code, by_type, by_country } from "../script/globalRef";
import './Form.scss'

const Form = ({ type, handleSubmit }: formProps) => {

    const formList = {
        by_name: (
            <>
                <label htmlFor="name">Brewery name : </label>
                <input
                    key={"name"}
                    name="name"
                    ref={by_name}
                    type="text"
                    placeholder=""
                />
            </>
        ),
        by_city: (
            <>
                <label htmlFor="city">City name : </label>
                <input
                    key={"city"}
                    name="city"
                    ref={by_city}
                    type="text"
                    placeholder=""
                />
            </>
        ),
        by_dist: (
            <>
                <label htmlFor="lat">Latitude : </label>
                <input
                    key={"lat"}
                    type="number"
                    name="lat"
                    ref={by_dist_lat}
                    min={-180}
                    max={180}
                    step={5}
                    defaultValue={0}
                />
                <label htmlFor="lon">Longitude : </label>
                <input
                    key={"lon"}
                    type="number"
                    name="lon"
                    ref={by_dist_lon}
                    min={-180}
                    max={180}
                    step={5}
                    defaultValue={0}
                />
            </>
        ),
        by_state: (
            <>
                <label htmlFor="state">State name : </label>
                <input
                    key={"state"}
                    name="state"
                    ref={by_state}
                    type="text"
                    placeholder=""
                />
            </>
        ),
        by_postal: (
            <>
                <label htmlFor="pcode">Postale code : </label>
                <input
                    key={"pcode"}
                    name="pcode"
                    ref={by_postal_code}
                    type="text"
                    placeholder=""
                />
            </>
        ),
        by_type: (
            <>
                <label htmlFor="type">Select type :</label>
                <select name="type" ref={by_type}>
                    {typeList.map((el, id) => {
                        return (
                            <React.Fragment key={id}>
                                <option value={el.value}>{el.label}</option>
                            </React.Fragment>
                        );
                    })}
                </select>
                {/* <div className="typeLegend">
                    {typeList.map((el, id) => {
                        return (
                            <React.Fragment key={id}>
                                <div className="typeTitle">{el.label}</div>
                                <div className="typeDesc">{el.desc}</div>
                            </React.Fragment>
                        );
                    })}
                </div> */}
            </>
        ),
        by_country: (
            <>
                <label htmlFor="country">Country name : </label>
                <input
                    key={"country"}
                    name="country"
                    ref={by_country}
                    type="text"
                    placeholder=""
                />
            </>
        ),
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {formList[type]}
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Form;
