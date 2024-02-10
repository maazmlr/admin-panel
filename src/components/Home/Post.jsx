import { MoreOutlined } from "@ant-design/icons";
import React from "react";

const Post = () => {
  return (
    <div className=" mb-4">

      <div className="info bg-[#0E151B] h-16 flex items-center px-4">

        <div className="container flex items-center p-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/c58b/b0a8/165ac4ab60f5bf6c4845d710449cfe19?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XempNWCx3jbGF91FN2dWSAeyOVMVV45o2b2O4~JIqHtHMAJCjlj8dxeOyaf3Vt~eQY7pd8q62hb20UFvgiw01gY~Zfmj~7c5gmWGruj0~VKkrYxL4IBWUSU401gOHX8UJ3rdQcdzDW5XB0MdsB39ekGfYFj6UhLGmsQ-FzMv~ndmRRs7Xv6G84a7uhhQ2N--IrXkqSpqQFJYwFkb3rUqw1EmB9lc9JlbzLNQ7JqpeYdHhzx-SKIJxgmUzcHWuVgP56tY3yom9jXDKoMjKoTU2JufgpA8sXR12teVsxToue3oiPwq8O9oDJw11pHLtSJ6XUqdZQ6xno6w3HKVbTVzTQ__"
            alt=""
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-2">
            <h2 className="white">gary lamb</h2>
            <p className="white text-xs">@garylamb. 2 hours ago</p>
          </div>
        </div>
        <MoreOutlined style={{color:"white"}} className="font-bold"  />

      </div>
      <div className="post bg-purple-600 h-[22rem]">
      </div>
      <div className="post-detail  p-5 bg-black white flex justify-between">
        <div className="flex">
            <p className="mr-4">100 Likes</p>
            <p>218 comments</p>
        </div>
        <p>100 shares</p>
      </div>

    </div>
  );
};

export default Post;
