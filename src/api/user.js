import request from "../util/request";

export const reqSendCode = (phone) => {
  return request({
    method: "GET",
    url: `/user/passport/sendCode/${phone}`,
  });
};

export const reqRegister = (data) => {
  return request({
    method: "POST",
    url: "/user/passport/register",
    data,
  });
};
export const reqLogin = (data) => {
  return request({
    method: "POST",
    url: "/user/passport/login",
    data,
  });
};
