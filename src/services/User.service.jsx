import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  //Post /api/user
  createUser = (requestBody) => {
    return this.api.post("/api/user", requestBody);
  };

  //Get /api/user
  getAllUsers = () => {
    return this.api.get("/api/user");
  };

  //Get /api/user/:id
  getOneUser = (id) => {
    return this.api.get(`/api/user/${id}`);
  };

  //PUT /api/user/:id
  updateUser = (id, requestBody) => {
    return this.api.put(`api/user/${id}`, requestBody);
  };

  //Delete /api/user/:id
  deleteUser = (id) => {
    return this.api.delete(`api/user/${id}`);
  };
}

const userService = new UserService();

export default userService;
