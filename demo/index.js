import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Graph from "../src/index";

const defaultOptions = {
    title: {
        label: "React demo"
    },
    graph: {
        dataY: [
            [1, 3, 3],
            [2, 1, 7]
        ]
    }
};

const toJson = obj => JSON.stringify(obj, null, 4);

const ref = React.createRef();

const App = () => {
    const [options, setOptions] = useState(defaultOptions);
    const [value, setValue] = useState(toJson(defaultOptions));
    const [useDefault, setUseDefault] = useState(false);
    const update = () => {
        let opt;
        eval("opt = " + value);
        setOptions(opt);
    }

    useEffect(() => {
        console.log(ref.current);
        console.log(ref.current.get());
    }, []);

    return (
        <React.Fragment>
            <h1>owp.graph-react</h1>
            <Graph
                ref={ref}
                options={useDefault ? defaultOptions : options}
                style={{ width: 800, height: 300 }}
            />
            <textarea
                style={{ width: 800, height: 300, resize: "vertical" }}
                wrap="false"
                value={value}
                onChange={e =>
                    setValue(e.target.value)}
            />
            <br />
            <button onClick={update}>Update</button>
            <button onClick={() => setUseDefault(!useDefault)}
            >Toggle to: {useDefault ? "Custom" : "Default"}
            </button>
        </React.Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);