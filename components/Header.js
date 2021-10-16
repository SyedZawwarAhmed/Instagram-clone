import Image from "next/image";
import {
  SearchIcon,
  SearchCircleIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow-sm border-b bg0white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid  w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text:sm border-gray focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn" />
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse" >3</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://links.papareact.com/3ke"
            alt="profile-pic"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
