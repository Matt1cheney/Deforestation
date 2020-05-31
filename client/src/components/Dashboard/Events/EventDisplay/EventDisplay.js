import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import events from "../../../../jsonData/events.json";
import EventCard from "../EventCard/EventCard";
import CreateNew from "../../CreateNew/CreateNew";


  componentWillMount() {
    this.setState({ loading: true });
    API.getEvents().then((data) => {
      console.log(data);
      this.setState((this.events = data.data));
      this.setState({ loading: false });
    });
  }
  render() {
    return (
      <>
        {this.admin && <CreateNew obj={this.createObj} />}
        {!this.state.loading ? (
          this.events.length > 0 ? (
            <Row>
              {this.events.map((event, index) => (
                <Col sm={12} key={index}>
                  <EventCard event={event} />
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
      {events.map((event, index) => (
        <Col sm={12} key={index}>
          <EventCard event={event} />
        </Col>
      ))}
    </Row>
    </>
  )
}

export default EventDisplay;