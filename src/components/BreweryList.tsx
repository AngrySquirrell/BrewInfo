import { useState } from "react";
import { breweryProps, memoryFormat } from "../script/globalInterface";
import "./BreweryList.scss";

const BreweryList = ({ memory }: breweryProps) => {
    const [selectedCard, setSelectedCard] = useState<memoryFormat>();

    return (
        <div className="breweryList">
            {memory.map((el, id) => {
                return (
                    <div key={id} className="breweryCard">
                        <div className="topCard">
                            <div className="name">{el.name}</div>
                            <div className="type">Type : {el.brewery_type}</div>
                            <div className="country"> {el.country} </div>
                            <div className="city"> {el.city} </div>
                            <div className="pcode"> {el.postal_code} </div>
                        </div>
                        <div className="bottomCard">
                            {el.latitude && el.longitude ? (
                                <button className="seeOnMaps"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = `https://www.google.com/maps/search/?api=1&query=${el.latitude},${el.longitude}`;
                                    }}
                                >
                                    See on Maps
                                </button>
                            ) : (
                                <></>
                            )}
                            <button
                                onClick={() => {
                                    setSelectedCard(el);
                                }}
                                className="more"
                            >
                                +
                            </button>
                        </div>
                    </div>
                );
            })}
            {selectedCard ? (
                <div
                    className="overlay"
                    onClick={() => {
                        setSelectedCard(undefined);
                    }}
                >
                    <div
                        className="innerOverlay"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="content">
                            <button
                                onClick={() => {
                                    setSelectedCard(undefined);
                                }}
                            >
                                x
                            </button>
                            {JSON.stringify(selectedCard)}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default BreweryList;
