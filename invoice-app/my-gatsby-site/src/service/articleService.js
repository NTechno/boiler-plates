import { APIGet, APIPost } from "./axiosService";

export const articleList = async (params, cb) => {  
  const url = "article";  
  APIGet(params, url).then((data) => {
    console.log("Article service involks!!", data.length);
    if (data.length > 0) {
      cb(data);
    }
  });
};
