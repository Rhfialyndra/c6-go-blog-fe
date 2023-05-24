import { BsThreeDots } from "react-icons/bs";
import {RiDeleteBin2Line} from "react-icons/ri";
import {BiEditAlt} from "react-icons/bi"
import { useUser } from "../hooks/useUser";
import Link from "next/link";
import { useRouter } from "next/router";

const DotsDropdown = () => {
  const { removeUser, user } = useUser();


  return (
    <div className="dropdown dropdown-hover dropdown-start">
      <label
        tabIndex={0}
        className=" flex items-center justify-between  gap-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-all duration-100"
      >
        <BsThreeDots className="w-5 h-5 font-semibold text-black"/>
      </label>
      <div className="pt-2">
        <ul
          tabIndex={0}
          className="bg-white dropdown-content menu p-2 rounded-box w-44 border shadow-xl"
        >
          <li>
            <Link href={"/user/profile"} className="w-full flex items-center text-red-500 hover:bg-gray-200 transition-all duration-100">
          
              <RiDeleteBin2Line className="w-5 h-5" />
              <p>Delete</p>
            </Link>
          </li>
          <li>
            <div
              className="w-full flex items-center text-black hover:bg-gray-200 transition-all duration-100"
            >
              <BiEditAlt className="w-5 h-5" />
              <p>Edit</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DotsDropdown;
