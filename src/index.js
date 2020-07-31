import Graph from "../../owp.graph"; //TODO

import React, {
    useEffect,
    useImperativeHandle,
    useRef,
    memo,
    forwardRef
} from "react";
import PropTypes from "prop-types";

const GraphReact = forwardRef(
    function GraphReact({ options, ...rest }, ref) {
        const containerRef = useRef();
        const graphRef = useRef();

        useEffect(() => {
            if (graphRef.current) {
                graphRef.current.setOptions(options);
            }
            else {
                graphRef.current = new Graph(containerRef.current, options);
            }
        });

        useImperativeHandle(ref, () => (
            {
                get: () => graphRef.current,
                container: containerRef.current
            }
        ), []);

        // Use createElement to that users doesn't have to jsx parse this file.
        return React.createElement("div", { ...rest, ref: containerRef }, null);
    }
);

GraphReact.propTypes = {
    options: PropTypes.object
};

export default memo(GraphReact);