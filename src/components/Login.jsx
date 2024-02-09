import React from "react";

import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Space } from "antd";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="login-container flex w-1/1 justify-center items-center">
      <div className="login-box h-96 w-[30rem] rounded-xl ">
        <h2 className="text-center text-5xl text-[#E2E6E7] font-medium my-8">
          {" "}
          Login
        </h2>

        <Input
          className="block text-lg text-gray-900 dark:text-white"
          style={{
            background: "#18222F",
            width: "94%",
            height: "3.5rem",
            margin: "0 1rem 1rem 1rem",
            borderRadius: "0.3rem",
            fontSize: "1.3rem",
          }}
          placeholder="Enter your username"
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined
                style={{
                  color: "rgba(0,0,0,.45)",
                }}
              />
            </Tooltip>
          }
        />
        <Space direction="vertical" className="block">
          <Input.Password
            style={{
              background: "#18222F",
              width: "94%",
              height: "3.5rem",
              margin: "1rem 1rem",
              borderRadius: "0.3rem",
              fontSize: "1.3rem",
            }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>

        <button className="bg-[#335DD2] w-[94%] block my-0 mx-auto h-14 rounded-md text-2xl font-medium  text-[#E2E6E7]">
          login
        </button>
      </div>
    </div>
  );
};

export default Login;
