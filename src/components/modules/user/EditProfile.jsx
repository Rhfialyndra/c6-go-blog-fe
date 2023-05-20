import React from 'react'
import Navbar from "@components/layout/Navbar";
import { useRouter } from "next/router";

const EditProfile = () => {
  
  const router = useRouter();
  return (
    <div class="h-screen">
      <div class="flex h-screen justify-center pt-16 items-center">
        <div class="w-3/5 mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100">
          <h1 className="font-bold text-xl mb-2">Edit Profile</h1>
          <div className='font-bold '>Profile photo</div>
          <div class="flex flex-row pt-2 pb-3">
            <div className="flex-initial"></div>
            <div class="bg-white-100 border-2 border-gray-400 rounded-lg p-14"></div>
            {/* <div className="flex-2 pl-5 pt-3 pb-4 pr-5">
              <h2 className="text-gray-600">Upload Your Photo</h2>
              <p className="text-gray-600 whitespace-nowrap text-sm">Your photo should be in PNG or JPG format</p>
              <button className="bg-cyan-500 p-2 rounded-md text-white text-sm hover:bg-cyan-600">Change Image</button>
            </div> */}
          </div>
          <div className="font-bold ">Full Name</div>
          <input
            className="shadow appearance-none bg-cyan-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Full Name"></input>
          <div className="font-bold pt-2">Username</div>
          <input
            className="shadow appearance-none bg-cyan-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username"></input>
          <div className="font-bold pt-2">Email</div>
          <input
            className="shadow appearance-none bg-cyan-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Email"></input>
          <div className="font-bold pt-2">About Me</div>
          <input
            className="shadow appearance-none bg-cyan-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="About Me"></input>
          <div class="flex pt-5">
            <div className="flex flex-row ml-auto">
              <button className="bg-cyan-500 p-2 text-white rounded-md hover:bg-cyan-600">Save Image</button>
              <div onClick={() => router.back()} className="pl-4">
                <button className="border border-red-500 p-2 text-red-500 rounded-md hover:bg-gray-300">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;