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
    this.createObj = {
      name: "Site",
      title: "Sites",
      path: "/dashboard/newSite",
    };
    this.state = {
      sites: [],
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    API.getSites().then((data) => {
      this.setState({sites: data.data});
      this.setState({ loading: false });
    });
  }

  async onDelete(_id, this4) {
    try {
      await API.deleteSite(_id);
      let filter_sites = this4.state.sites
      const indexOfDeleteSite = filter_sites.findIndex(a => {
        return a._id === _id
      })
      filter_sites.splice(indexOfDeleteSite, 1)
      this4.setState({ sites: filter_sites });
      alert("Deleted");
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    return (
      <>
        <CreateNew obj={this.createObj} />
        {!this.state.loading ? (
          this.state.sites.length > 0 ? (
            <Row>
              {this.state.sites.map((site, index) => (
                <Col sm={12} key={index}>
                  <SiteCard site={site} onDelete={this.onDelete} this3={this}/>
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
