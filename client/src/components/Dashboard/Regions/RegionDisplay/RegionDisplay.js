import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RegionCard from "../RegionCard/RegionCard";
import CreateNew from "../../CreateNew/CreateNew";
import Spinner from "react-bootstrap/Spinner";
import API from "../../../../utils/API";

class RegionDisplay extends React.Component {
  constructor() {
    super();
    this.admin = true;
    this.regions = [];
    this.createObj = {
      name: "Region",
      title: "Regions",
      path: "/dashboard/newRegion",
    };
    this.state = {
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    API.getRegions().then((data) => {
      this.setState((this.regions = data.data));
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <>
        {this.admin && <CreateNew obj={this.createObj} />}
        {!this.state.loading ? (
          this.regions.length > 0 ? (
            <Row>
              {this.regions.map((region, index) => (
                <Col sm={12} key={index}>
                  <RegionCard region={region} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row>
              <Col sm={12}>
                <h6 className="color-white">No Record Founds</h6>
              </Col>
            </Row>
          )
        ) : (
          <Row>
            <Col sm={12}>
              <Spinner animation="border" role="status" variant="light">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        )}
      </>
    );
  }
}

export default RegionDisplay;
