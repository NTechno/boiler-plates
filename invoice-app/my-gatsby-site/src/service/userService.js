import { APIGet, APIPost } from "./axiosService";

export const userList = async (params, cb) => {
  console.log("user list...", params);
  const url = "users";  
  APIGet(params, url).then((data) => {
    console.log("user service involks!!", data.length);
    if (data.length > 0) {
      cb(data);
    }
  });
};

export function SignUp(params) {
  const url = "/user";
  APIPost();
}
