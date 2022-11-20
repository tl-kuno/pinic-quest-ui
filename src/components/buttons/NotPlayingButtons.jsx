import React from "react";
import { NewGameButton } from "./NewGameButton";
import { LoadButton } from "./LoadButton"
import { NewGameInput } from "../NewGameInput";
import { LoadGameDropdown } from "../LoadGameDropDown";



const NotPlayingButtons = (props) => {
    return (
        <>
        <div className="panel-button-box nes-container is-dark is-rounded">
            <div className="panel-button-row">
                <NewGameInput onChange={props.onChange}/>
            </div>
            <div className="panel-button-row">
                <NewGameButton onClick={props.newGameFunction} />
            </div>
        </div>
                <div className="panel-button-box nes-container is-dark is-rounded">
                <div className="panel-button-row">
                    <LoadGameDropdown loadGames={props.loadGames}/>
                </div>
                <div className="panel-button-row">
                    <LoadButton onClick={props.loadFunction} />
                </div>
            </div>
        </>
    )
}

export {
    NotPlayingButtons,
}