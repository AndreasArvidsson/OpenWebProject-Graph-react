# OpenWebProject Graph
React component for [owp.graph](https://github.com/AndreasArvidsson/OpenWebProject-Graph)

## Installation
`npm install owp.graph-react --save`

## Usage

```jsx
import Graph from "owp.graph-react";

const options = {
    title: {
        label: "Standard line plot with two data sets"
    },
    axes: {
        x: {
            "label": "Frequency (Hz)"
        },
        y: {
            "label": "Amplitude (dB)"
        }
    },
    graph: {
        names: ["x", "Left", "Right"],
        dataX: [
            [100, 200, 400]
        ],
        dataY: [
            [1, 2, 3],
            [1.5, 2.5, 3.5]
        ]
    }
};

const style = {
    width: 600,
    height: 300
};

return <Graph options={options} style={style}>
```

### Ref usage
```jsx
<Graph options={} ref={ref} />

ref.get() => owp.graph instance
ref.container => div
```