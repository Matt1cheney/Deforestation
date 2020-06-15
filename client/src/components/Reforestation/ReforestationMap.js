import React from 'react';
import './style.css';
import MapGeometry from './MapGeometry';
import {Modal} from 'react-bootstrap';
import data from './data';
import ResizeableCanvasJS from "../../lib/canvasjs/ResizeableCanvasJS";

export default class ReforestationMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateInformation: null
        }
    }

    showStateInformation(stateId) {
        const {title} = MapGeometry[stateId];
        console.log( title + " clicked");
        this.setState({stateInformation: {
                stateId,
                stateName: title,
                ...(data[stateId])
        }});
    }

    renderState(stateId, {path, title}) {
        return <a className={"stateMapRegion"} key={stateId}>
                <path onClick={() => this.showStateInformation(stateId)}
                      d={path}
                      fill="none" stroke="none"
                      title={title}
                      alt={title}
                      id={stateId}
                >
                    <title>{title}</title>
                </path>
        </a>;

    }

    dataSeriesToCanvasJSColumn(name, data) {
        return {
            type: "column",
            name: name,
            showInLegend: false,
            dataPoints: data.map(({year, value}) => ({ label: year, y: value })),
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
        };
    }

    renderChart(dataSeries) {
        if (dataSeries.length < 1) {
            return <em>No data is available for this region yet.</em>
        }

        return <ResizeableCanvasJS options={{
            toolTip: {
                content: "{label} {name}: {y}"
            },
            data: dataSeries.map(({name, data}) => this.dataSeriesToCanvasJSColumn(name, data))
        }}
        />
    }

    renderStateInformationModal() {
        const {stateInformation} = this.state;
        if (!stateInformation)
            return null;

        const {stateName, treeCoverLoss, co2Emissions, biomassLoss} = stateInformation;

        const dataSeries = [
            { name: "Tree Cover Loss (Hectares)", data: treeCoverLoss },
            { name: "CO2 Emissions (Metric tonnes)", data: co2Emissions },
            { name: "Biomass Loss (Metric tonnes)", data: biomassLoss },
        ];

        const availableDataSeries = dataSeries.filter(d => d.data);

        return <Modal show={true} onHide={() => this.setState({stateInformation: null})}>
            <Modal.Header closeButton>
                <Modal.Title>Statistics for {stateName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {this.renderChart(availableDataSeries)}
            </Modal.Body>
        </Modal>
    }

    render() {
        return <>
            

            <div className="pageContent">
                <h1 style={{"text-align": "center"}}>U.S. Reforestation Map and Statistics</h1>
                <div className="mapdiv">
                    <svg version="1.2" viewBox="0 0 1100 1000" xmlns="http://www.w3.org/2000/svg">
                        {Object.keys(MapGeometry).map(stateId => this.renderState(stateId, MapGeometry[stateId]))}
                    </svg>
                </div>
            </div>

            { this.renderStateInformationModal() }
        </>;
    }
}
