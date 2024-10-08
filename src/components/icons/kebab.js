import { Blogo } from "./BlogLogo";
import { Meta } from "./Meta";
import { Blog } from "./Blogtext";
import { Delete } from "./delete";
export const Kebab = () => {
  return (
    <div className="drawer z-20 ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-end">
        <label htmlFor="my-drawer">
          <svg
            className="lg:hidden"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2245_592)">
              <path
                d="M26.7333 14.6667H5.26667C4.56711 14.6667 4 15.2338 4 15.9333V16.0667C4 16.7662 4.56711 17.3333 5.26667 17.3333H26.7333C27.4329 17.3333 28 16.7662 28 16.0667V15.9333C28 15.2338 27.4329 14.6667 26.7333 14.6667Z"
                fill="#1A1A1A"
              />
              <path
                d="M26.7333 21.3333H5.26667C4.56711 21.3333 4 21.9004 4 22.6V22.7333C4 23.4329 4.56711 24 5.26667 24H26.7333C27.4329 24 28 23.4329 28 22.7333V22.6C28 21.9004 27.4329 21.3333 26.7333 21.3333Z"
                fill="#1A1A1A"
              />
              <path
                d="M26.7333 8H5.26667C4.56711 8 4 8.56711 4 9.26667V9.4C4 10.0996 4.56711 10.6667 5.26667 10.6667H26.7333C27.4329 10.6667 28 10.0996 28 9.4V9.26667C28 8.56711 27.4329 8 26.7333 8Z"
                fill="#1A1A1A"
              />
            </g>
            <defs>
              <clipPath id="clip0_2245_592">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Blogo></Blogo>
              <div className="flex items-center gap-1">
                <Meta></Meta>
                <Blog></Blog>
              </div>
            </div>
            <Delete></Delete>
          </div>
          <div className="flex gap-10 p-10">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </div>

          <div className="border-t p-1 gap-5 flex flex-col ">
            <div className="flex items-center text-base text-gray-600 dark:text-gray-600 font-thin px-1 pt-5"></div>
          </div>
        </ul>
      </div>
    </div>
  );
};
