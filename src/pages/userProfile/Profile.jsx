import React from 'react'
import Navbar from "@components/layout/Navbar";

const profile = () => {
  return (
    <div className="h-screen">
      <nav className="fixed top-0 w-full bg-gray-900 text-white">
        <Navbar />
      </nav>
      <div className="flex h-screen justify-center pt-16 items-center">
        <div className="w-3/5 mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100">
          <h1 className="font-bold text-xl mb-2">Your Profile</h1>
          <div className="flex flex-row pt-2 pb-3">
              <div class="flex flex-col">
                <div className="bg-white-100 border-2 border-gray-400 rounded-lg p-14"></div>
                <div class="flex flex-row pt-3">
                  <div class="h-5 w-5 rounded-full bg-dark-blue"></div>
                  <h1 class="pl-3">X Followings</h1>
                </div>
                <div className="flex flex-row pt-1">
                  <div className="h-5 w-5 rounded-full bg-dark-blue"></div>
                  <h1 className="pl-3">X Followers</h1>
                </div>
                <div className="flex flex-row pt-1">
                  <div className="h-5 w-5 rounded-full bg-dark-blue"></div>
                  <h1 className="pl-3">X Post</h1>
                </div>
              </div>
              <div className="flex pl-5 pt-3 pb-3 pr-5">
                {/*<input*/}
                {/*  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
                {/*  id="username" type="text" placeholder="Email"></input>*/}
                <div class="flex flex-col w-full h-full">
                <div className="w-full h-full mx-auto  border border-gray-300 rounded-lg bg-gray-100">
                {/*  <p>Ini adalah kotak teks</p>*/}
                </div>
                </div>
                {/*<h1 className="font-bold pt-2">Full Name</h1>*/}
                {/*<div className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">*/}
                {/*<div class="border rounded p-2 bg-white w-full">*/}
                {/*  <p>Ini adalah kotak teks</p>*/}
                {/*</div>*/}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default profile;