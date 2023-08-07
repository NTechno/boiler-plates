import Axios from "axios";
const baseURL = "http://192.168.0.137:3400/";

export const APIPost = (params, url) => {
  const apiEndPoint = baseURL + url;
  return Axios.post(apiEndPoint, params)
    .then((data) => {
      console.log("post sucess!!!!!", data);
      return data;
    })
    .catch((error) => {
      console.log("into error!!");
      return error;
    });
};

export const APIGet = (params = "", url) => {
  const apiEndPoint = baseURL + url;
  console.log("into the APIGet!!!", apiEndPoint);
  return Axios.get(apiEndPoint)
    .then((data) => {
      console.log("into the response!!");
      console.log(data);
      return data.data;
    })
    .catch((err) => {
      console.log("into error", err);
      return err;
    });
};
