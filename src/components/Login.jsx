import  { useState } from "react";
import { Input, Tooltip, Space } from "antd";
import { InfoCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios"
import url from "../url"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(""); // State variable for username
  const [password, setPassword] = useState(""); // State variable for password
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // Update username state
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update password state
  };

  const handleSubmit = async () => {
    // Here you can access username and password values
    const loginData = {
      username: username,
      password: password
    };
  axios.post(`${url}adminLogin`,loginData)
  .then(res=>{
    
    document.cookie= `token=${res.data.token};path=/`
    navigate("/")


  })    
     // You can do further processing with this data
  };

  return (
    <div className="login-container flex w-1/1 justify-center items-center">
      <div className="login-box h-96 w-[30rem] rounded-xl">
        <h2 className="text-center text-5xl text-[#E2E6E7] font-medium my-8">Login</h2>

        <Input
          className="block text-lg text-gray-900 dark:text-white"
          style={{
            color:"white",
            background: "#18222F",
            width: "94%",
            height: "3.5rem",
            margin: "0 1rem 1rem 1rem",
            borderRadius: "0.3rem",
            fontSize: "1.3rem",
          }}
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange} // Call handleUsernameChange on input change
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Space direction="vertical" className="block">
          <Input.Password
            style={{
              color:"white",
              background: "#18222F",
              width: "94%",
              height: "3.5rem",
              margin: "1rem 1rem",
              borderRadius: "0.3rem",
              fontSize: "1.3rem",
            }}
            value={password}
            onChange={handlePasswordChange} // Call handlePasswordChange on input change
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>

        <button
          className="bg-[#335DD2] w-[94%] block my-0 mx-auto h-14 rounded-md text-2xl font-medium  text-[#E2E6E7] "
          onClick={handleSubmit} // Call handleSubmit on button click
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
