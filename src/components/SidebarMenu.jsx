import index.js from 

export const SidebarMenu = () => {
  return (
    <>
      <div
        onClick="hideNav()"
        id="navbar-overlay"
        className="absolute bg-black/30 w-screen h-screen top-0 left-0 transition-all ease-out duration-300 z-40 hidden lg:hidden"
      ></div>
      <div
        id="navbar-mobile"
        className="absolute -left-full w-3/5 h-screen bg-white z-50 transition-all ease-out duration-30 hidden lg:hidden"
      ></div>
    </>
  );
};
