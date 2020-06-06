import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SiteCard from "../SiteCard/SiteCard";
import CreateNew from "../../CreateNew/CreateNew";
import Spinner from "react-bootstrap/Spinner";
import API from "../../../../utils/API";
import SearchBar from "../../SearchBar/Search";
import debounce from "lodash.debounce";
import { AuthContext } from "../../../authComponents/userAuth/Auth";

class SiteDisplay extends React.Component {
  static contextType = AuthContext

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
      _id: "",
      role: "",
      region: "",
      search: "",
      sites: [],
      loading: false,
    };
  }

  componentWillMount() {
    const currentUser = this.context
    const { _id, role, region } = currentUser.dbUser;

    this.setState({ loading: true });

    if (role === "Coordinator") {
      API.getSiteByRegion(region._id).then((data) => {
        console.log(data)
        this.setState({ _id: _id, role: role, region: region })
        this.setState({ sites: data.data, loading: false });
      });
    } else {
      API.getSites().then((data) => {
        this.setState({sites: data.data});
        this.setState({ loading: false });
      });
    }
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

  clearSearch = () => {
    this.setState({ loading: true });
    document.getElementById("searchInput").value = "";

    if (this.state.role === "Coordinator") {
      API.getSiteByRegion(this.state.region._id).then((data) => {
        this.setState({ sites: data.data, loading: false });
      });
    } else {
      API.getSites().then((data) => {
        this.setState({ sites: data.data, loading: false });
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
        await API.searchSites(this.state.search).then(data => {
          const filter = data.data.filter(item => item.region !== null)
          const sites = filter.filter(item => item.region._id === this.state.region._id)
          this.setState({ sites: sites, loading: false })
        });
      } else {     
        await API.searchSites(this.state.search).then(data => {
          this.setState({ sites: data.data, loading: false })
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
        API.getSiteByRegion(this.state.region._id).then((data) => {
          this.setState({ sites: data.data, loading: false });
        });
      } else {
        API.getSites().then((data) => {
          this.setState({ sites: data.data, loading: false });
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
