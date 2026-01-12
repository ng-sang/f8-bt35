import React from "react";

//yêu cầu:
// lấy email và password
// so sánh với email = ' adimin@gmai.com', password ='123456'
//nếu đúng-> chuyển hướng về trang trước đo
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <div>
          <input type="email" placeholder="email...." />
        </div>
        <div>
          <input type="password" placeholder="password..." />
        </div>
        <button>login </button>
      </form>
    </div>
  );
}
