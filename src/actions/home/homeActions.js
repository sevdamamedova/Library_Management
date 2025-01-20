import axios from "axios";
// import { baseUrl } from "../../MainApi";
// import { getBlogDetailFunc } from "../../redux/slices/blogSlices";

// export const getBlogDetail = (id) => async (dispatch) => {
//     return await axios
//       .get(`${baseUrl}blog/${id}/`)
//       .then((resp) => {
//         console.log(resp.data);
//         dispatch(getBlogDetailFunc(resp.data))
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//Yuxaridaki numunedir!!!

import { baseUrl } from "../../MainApi";

export const getBlogDetail = (id) => async (dispatch) => {
  return await axios
    .get(`${baseUrl}/`)
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
