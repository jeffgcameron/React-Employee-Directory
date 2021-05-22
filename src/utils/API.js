import axios from "axios";

const url = "https://randomuser.me/api/?results=60&nat=us"

export default {
  fetchEmployees: function () {
    return axios.get(url);
  },
};
