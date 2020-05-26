import React from 'react';
import CanvasJSReact from "../../lib/canvasjs/canvasjs.react";
const {CanvasJSChart} = CanvasJSReact;

export default class ResizeableCanvasJS extends React.Component {
    static defaultProps = {
        aspectRatio: 3/4
    };

    constructor(props) {
        super(props);
        this.state = {
            width: undefined,
        };

        this.containerRef = null;

        this.resizeChart = this.resizeChart.bind(this);
    }

    resizeChart() {
        if (!this.containerRef)
            return;

        const containerWidth = this.containerRef.offsetWidth;

        this.setState({width: containerWidth});
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeChart);

        // There are better ways to observe resizing of the chart container div,
        // however that needs additional libraries and further testing.
        // For now, the following "hacky" solution works.
        setTimeout(() => this.resizeChart(), 100);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeChart);
    }

    render() {
        const {containerProps, options, aspectRatio} = this.props;
        const {width} = this.state;
        const height = width ? width * aspectRatio : undefined;

        return <div style={{height}} ref={r => this.containerRef = r}>
            <CanvasJSChart {...{...this.props, containerProps: {...containerProps, width, height }, options: {...options, width, height }}} />
        </div>;
    }
}
