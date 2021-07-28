import { v4 as uuidv4 } from "uuid";

/*
  userTempId 刷新和关闭浏览器还要保存，存储在localStorage
    先读取本地localStorage存储的userTempId
      有
        直接用
      没有
        生成一个新的，在保存起来，在用
*/
function generateUserTempId() {
  let userTempId = localStorage.getItem("userTempId");
  if (!userTempId) {
    userTempId = uuidv4();
    localStorage.setItem("userTempId", userTempId);
  }
  return userTempId;
}

export default generateUserTempId;
