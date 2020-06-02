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
    this.createObj = {
      name: "Region",
      title: "Regions",
      path: "/dashboard/newRegion",
    };
    this.state = {
      regions: [],
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    API.getRegions().then((data) => {
      this.setState({ regions: data.data, loading: false });
    });
  }

  async onDelete(_id, this4) {
    try {
      await API.deleteRegion(_id);
      let filter_regions = this4.state.regions
      const indexOfDeleteEvent = filter_regions.findIndex(a => {
        return a._id === _id
      })
      filter_regions.splice(indexOfDeleteEvent, 1)
      this4.setState({ regions: filter_regions });
      alert("Deleted");
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    return (
      <>
        {this.admin && <CreateNew obj={this.createObj} />}
        {!this.state.loading ? (
          this.state.regions.length > 0 ? (
            <Row>
              {this.state.regions.map((region, index) => (
                <Col sm={12} key={index}>
                  <RegionCard region={region} onDelete={this.onDelete} this3={this}/>
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
