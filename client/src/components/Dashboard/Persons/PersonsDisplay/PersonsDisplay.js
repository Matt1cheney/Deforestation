import React from "react";
import { Link } from "react-router-dom";
import PersonCard from "../PersonCard/Person";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import API from "../../../../utils/API";
import SearchBar from "../../SearchBar/Search";
import debounce from "lodash.debounce";
import { AuthContext } from "../../../authComponents/userAuth/Auth";
import "../style.css";


class PersonDisplay extends React.Component {
  static contextType = AuthContext

  constructor() {
    super();
    this.admin = true;
    this.persons = []
    this.createObj = {
      name: "Persons",
      title: "Persons",
      path: "/dashboard/newPerson"
    }
    this.state = {
      _id: "",
      region: "",
      role: "",
      search: "",
      persons: [],
      loading: false,
    }
  }

  componentWillMount() {
    const currentUser = this.context
    const { _id, role, region } = currentUser.dbUser;

    this.setState({ loading: true });

    if (role === "Coordinator") {
      API.getPersonByRegion(region._id).then((data) => {
        console.log(data)
        this.setState({ _id: _id, role: role, region: region })
        this.setState({ persons: data.data, loading: false });
      });
    } else {
      API.getPersons().then(data => {
        this.setState({ persons: data.data, loading: false })
      });
    }
  }

  async onDelete(_id, this4) {
    try {
      await API.deletePerson(_id);
      let filter_person = this4.state.persons
      const indexOfDeleteEvent = filter_person.findIndex(a => {
        return a._id === _id
      })
      filter_person.splice(indexOfDeleteEvent, 1)
      this4.setState({ persons: filter_person });
      alert("Deleted");
    } catch (err) {
      alert(err.message);
    }
  };

  clearSearch = () => {
    this.setState({ loading: true });
    document.getElementById("searchInput").value = "";

    if (this.state.role === "Coordinator") {
      API.getPersonByRegion(this.state.region._id).then((data) => {
        this.setState({ persons: data.data, loading: false });
      });
    } else {
      API.getPersons().then(data => {
        this.setState({ persons: data.data, loading: false })
      });
    }

    this.setState({
      search: ""
    })
  }

  handleSearch = async () => {

    try {
      this.setState({ loading: true });

      if (this.state.role === "Coordinator") {
        await API.searchPersons(this.state.search).then(data => {
          const filter = data.data.filter(item => item.region !== null)
          const persons = filter.filter(item => item.region._id === this.state.region._id)
          this.setState({ persons: persons, loading: false })
        });
      } else {
        await API.searchPersons(this.state.search).then(data => {
          this.setState({ persons: data.data, loading: false })
        });
      }
    } catch (err) {
      alert(err.message);
    }
  }


  handleInputChange = debounce((search) => {
    this.setState({ search });

    if (this.state.search === "") {
      if (this.state.role === "Coordinator") {
        API.getPersonByRegion(this.state.region._id).then((data) => {
          this.setState({ persons: data.data, loading: false });
        });
      } else {
        API.getPersons().then(data => {
          this.setState({ persons: data.data, loading: false })
        });
      }
      return
    } else {
      this.handleSearch()
    }

  }, 1000);

  render() {
    return (
      <>
        <Jumbotron className="createNew">
          <Row>
            <Col xs={12} md={6}>
              <h1>People</h1>
            </Col>
            <Col xs={12} md={6}>
              <Link
                as="button"
                className="btn color-white newPersonBtn"
                variant="dark"
                style={{ marginBottom: 10 }}
                to={{ pathname: `/dashboard/newAdmin` }}
              >
                Add Admin/Coordinator
          </Link>
              <br></br>
              <br></br>
              <Link
                as="button"
                className="btn color-white newPersonBtn"
                variant="dark"
                style={{ marginBottom: 10 }}
                to={{ pathname: `/dashboard/newPerson` }}
              >
                Add Volunteer/Land Owner
          </Link>
            </Col>
          </Row>
        </Jumbotron>
        <SearchBar
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          clearSearch={this.clearSearch} />
        {!this.state.loading ? (
          this.state.persons.length > 0 ? (
            <Row>
              {this.state.persons.map((person, index) => (
                <PersonCard key={index} person={person} onDelete={this.onDelete} this3={this} />
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
    )
  }
}

export default PersonDisplay;