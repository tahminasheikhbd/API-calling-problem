/** @format */

import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[url(https://static.vecteezy.com/system/resources/previews/023/140/077/non_2x/3d-white-jewelry-flowers-wallpaper-with-golden-branches-and-butterflies-ai-generated-photo.jpg)] bg-cover bg-bottom'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
