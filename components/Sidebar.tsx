'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname();
  
  return (
   <div className=" w-64 bg-gray-100 border-r border-gray-300 px-4 pt-4 flex flex-col justify-between">
      
      <div>
        <h1 className="text-1xl font-bold mb-10 align-middle">My Note Book</h1>
        <div className="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-800 border-t pt-4 mt-4">

        </div>

        <div className="flex flex-col space-y-4">
          <div className={clsx("p-3 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer", pathname === '/' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
          <Link href={'/'}> Dashboard</Link>
          </div>

           <Link href={'/template'}>     
          <div className={clsx("p-3 bg-white rounded-lg shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/template' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
           Template
          </div>
           </Link>
           
          
            <Link href={'/calendar'}>
            <div className={clsx ("p-3 bg-white rounded-lg shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/calendar' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
            Nepali Calendar
          </div>
          </Link>

          <Link href={'/reminder'}>
          <div className={clsx("p-3 bg-white rounded-lg shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/reminder' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
            Task Reminder
          </div>
          </Link>


          <Link href={'/notes'}>
          <div className={clsx("p-3 bg-white rounded-lg shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/notes' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
           Notes 
          </div>
          </Link>


          <Link href={'/profile'}>
          <div className={clsx("p-3 bg-white rounded-lg shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/profile' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
            Profile
          </div>
          </Link>
          
          
          <Link href={'/settings'}>
          <div className={clsx("p-3 bg-white rounded-lg shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/settings' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
            Settings
          </div>
          </Link>
          
          <div className="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-800 border-t pt-4 mt-4">
          </div>
          <div className="text-gray-700 hover:text-black cursor-pointer">
            Online
          </div>
          <div className="flex flex-col space-y-1">

          </div>
        </div>
      <div className="mt-10">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">
          Logout
        </button>
      </div>
    
      </div>



    </div>
  );
}
export default Sidebar
