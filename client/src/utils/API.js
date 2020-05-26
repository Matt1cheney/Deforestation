import axios from "axios";


export default {
  createPerson: function(personData) {
    return axios.post("/api/persons", personData)
  },

  getPersons: function() {
    return axios.get("/api/persons")
  }
}