import axios from "axios";


export default {
  createPerson: function(personData) {
    return axios.post("/api/persons", personData)
  },

  getPersons: function() {
    return axios.get("/api/persons")
  },

  createRegion: function(regionData) {
    return axios.post("/api/regions", regionData);
  },

  getRegions: function() {
    return axios.get("/api/regions")
  },

  createSite: function(siteData) {
    return axios.post("/api/sites", siteData)
  },

  getSites: function() {
    return axios.get("/api/sites")
  },

  createEvent: function(eventData) {
    return axios.post("/api/events", eventData)
  },

  getEvents: function() {
    return axios.get("/api/events")
  }
}