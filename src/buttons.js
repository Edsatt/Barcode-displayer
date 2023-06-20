import React from "react";

function buttons(props) {
    return (
        <div>
            <button onClick={props.next}>Next image</button>
            <button onClick={props.reset}>Reset</button>
            <button onClick={props.random}>Random image</button>
        </div>
    );
};

export default buttons;