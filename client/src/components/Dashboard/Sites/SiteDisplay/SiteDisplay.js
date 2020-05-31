import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SiteCard from "../SiteCard/SiteCard";
import CreateNew from "../../CreateNew/CreateNew";
import Spinner from "react-bootstrap/Spinner";
import API from "../../../../utils/API";

class SiteDisplay extends React.Component {
  constructor() {
    super();
    this.admin = true;
    this.coordinator = false;
    this.sites = [];
    this.createObj = {
      name: "Site",
      title: "Sites",
      path: "/dashboard/newSite",
    };
    this.state = {
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    API.getSites().then((data) => {
      this.setState((this.sites = data.data));
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <>
        <CreateNew obj={this.createObj} />
        {!this.state.loading ? (
          this.sites.length > 0 ? (
            <Row>
              {this.sites && this.sites.map((site, index) => (
                <Col sm={12} key={index}>
                  <SiteCard site={site} />
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

export default SiteDisplay;