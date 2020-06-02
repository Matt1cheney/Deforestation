import axios from "axios";


export default {
  createPerson: function(personData) {
    return axios.post("/api/persons", personData)
  },

  getPersons: function() {
    return axios.get("/api/persons")
  },

  getPersonById: function(id) {
    return axios.get(`/api/person/${id}`)
  },

  getPersonByUid: function(uid) {
    return axios.get(`/api/firebaseperson/${uid}`)
  },

  deletePerson: (id) => {
    return axios.delete(`/api/person/${id}`)
  },

  updatePerson: (id) => {
    return axios.put(`api/person/${id}`)
  },

  createRegion: function(regionData) {
    return axios.post("/api/regions", regionData);
  },

  getRegions: function() {
    return axios.get("/api/regions")
  },

  getRegionById: function(id) {
    return axios.get(`/api/region/${id}`)
  },

  deleteRegion: (id) => {
    return axios.delete(`/api/region/${id}`)
  },

  updateRegion: function(regionData) {
    return axios.put(`/api/region`, regionData);
  },

  createSite: function(siteData) {
    return axios.post("/api/sites", siteData)
  },

  getSites: function() {
    return axios.get("/api/sites")
  },

  getSiteById: function(id) {
    return axios.get(`/api/site/${id}`)
  },

  deleteSite: (id) => {
    return axios.delete(`/api/site/${id}`)
  },

  updateSite: function(siteData) {
    return axios.put(`/api/site`, siteData)
  },

  createEvent: function(eventData) {
    return axios.post("/api/events", eventData)
  },

  getEvents: function() {
    return axios.get("/api/events")
  },

  getEventById: function(id) {
    return axios.get(`/api/event/${id}`)
  },

  deleteEvent: (id) => {
    return axios.delete(`/api/event/${id}`)
  },

  updateEvent: function(eventData) {
    return axios.put(`/api/event`, eventData)
  },

  createSource: function(sourceData) {
    return axios.post("/api/sources", sourceData)
  },

  getSources: function() {
    return axios.get("/api/sources")
  },

  getSourceById: function(id) {
    return axios.get(`/api/source/${id}`)
  },

  deleteSource: (id) => {
    return axios.delete(`/api/source/${id}`)
  },

  updateSource: function(sourceData) {
    return axios.put(`/api/source`, sourceData)
  }
}