import { userStore } from "../store/User";
import axios from "axios";

export const getinfo = async () => {
  let token = "";
  userStore.subscribe((data) => {
    token = data.token;
  });
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) config.headers["auth-token"] = token;
  await axios.get("/api/user/info", config).then((res) =>
    userStore.update((currUser) => {
      console.log("updated");
      return { token: currUser.token, user: res.data };
    })
  );
};

export const addlink = async (a) => {
  let token = "";
  let status = 1,
    mssg = "Something went wrong";
  userStore.subscribe((data) => {
    token = data.token;
  });
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) config.headers["auth-token"] = token;
  console.log(a);
  axios
    .post("/api/user/add", a, config)
    .then((res) => {
      status = 0;
      mssg = "Successfully added";
    })
    .catch((err) => {
      console.log(err);
    });
  await getinfo();
  return { status, mssg };
};
