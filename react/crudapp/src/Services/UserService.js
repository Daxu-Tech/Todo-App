import axios from "axios";
const USER_BASE_URL = "http://localhost:3000/user";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Token " + localStorage.getItem("token"),
};

class UserService {
  loginUser(credentials) {
    return axios.post(USER_BASE_URL + "/login", credentials);
  }
  // get user
  getUser() {
    console.log(headers);
    return axios.get(USER_BASE_URL, { headers: headers });
  }

  // post user
  postUser(us) {
    console.log(headers);
    return axios.post(USER_BASE_URL, us, { headers: headers });
  }

  // delete user
  deleteUser(id) {
    // console.log(headers);
    return axios.delete(USER_BASE_URL + "/" + id, { headers: headers });
  }

  editUser(user){
    return axios.post(USER_BASE_URL, user, { headers: headers });
  }
  
}

export default new UserService();
