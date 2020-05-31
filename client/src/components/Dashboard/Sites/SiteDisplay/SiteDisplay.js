import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import sites from "../../../../jsonData/sites.json";
import SiteCard from "../SiteCard/SiteCard";
import CreateNew from "../../CreateNew/CreateNew";


function SiteDisplay({sites}) {

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

  return (
    <>
      <CreateNew obj={createObj}/>
      <Row>
        {sites.map((site, index) => (
          <Col sm={12} key={index}>
            <SiteCard site={site} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default SiteDisplay;