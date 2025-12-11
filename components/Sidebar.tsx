'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';
import React from 'react'
import { LayoutDashboard, LayoutTemplate, CalendarDays, AlarmClockCheck, Handshake, UserPen, Settings, NotebookTabs, LogOut, Power} from 'lucide-react';


const Sidebar = () => {
  const pathname = usePathname();
  
  return (
   <div className=" hidden lg:flex  w-64 bg-gray-100 border-r border-gray-300 px-4 pt-4  flex-col justify-between">
      
      <div>
        <h1 className="text-1xl font-bold mb-10  flex gap-1.5 align-middle"> <NotebookTabs size={20} />My Note Book</h1>
        <div className="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-800 border-t pt-4 mt-4">

        </div>

        <div className="flex flex-col space-y-4">
          <div className={clsx("p-3 rounded-lg flex gap-1.5 shadow-sm hover:bg-blue-400 cursor-pointer", pathname === '/' ? " border-2 bg-blue-500 text-white" : "bg-white")}>
          <LayoutDashboard  size={19}/>
          <Link href={'/'}> Dashboard</Link>
          </div>

           <Link href={'/template'}>     
          <div className={clsx("p-3 bg-blue-500 rounded-lg flex gap-1.5 shodow-sm hover:bg-blue-400 cursor-pointer", pathname === '/template' ? "border-2 bg-blue-500 text-white" : "bg-white")}>
            <LayoutTemplate size={19}/>Template
          </div>
           </Link>
           
          
            <Link href={'/calendar'}>
            <div className={clsx ("p-3 bg-white rounded-lg flex gap-1.5 shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/calendar' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
            <CalendarDays size={19}/> Nepali Calendar
          </div>
          </Link>

          <Link href={'/reminder'}>
          <div className={clsx("p-3 bg-white rounded-lg flex gap-1.5 shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/reminder' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
           <AlarmClockCheck size={19} /> Task Reminder
          </div>
          </Link>


          <Link href={'/notes'}>
          <div className={clsx("p-3 bg-white rounded-lg flex gap-1.5 shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/collaboration' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
           <Handshake size={19}/> Collaboration 
          </div>
          </Link>


          <Link href={'/profile'}>
          <div className={clsx("p-3 bg-white rounded-lg flex gap-1.5 shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/profile' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
           <UserPen size={19}/> Profile
          </div>
          </Link>
          
          
          <Link href={'/settings'}>
          <div className={clsx("p-3 bg-white rounded-lg flex gap-1.5 shodow-sm hover:bg-gray-200 cursor-pointer", pathname === '/settings' ? "bg-transparent border-2 border-blue-500" : "bg-white")}>
           <Settings size={19} /> Settings
          </div>
          </Link>
          
          <div className="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-800 border-t pt-4 mt-4">
          </div>
          <div className="text-gray-700 hover:text-black  flex gap-2 cursor-pointer">
           <Power size={19} /> Online
          </div>
          <div className="flex flex-col space-y-1">

          </div>
        </div>
      <div className="mt-10">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded flex gap-1 justify-center items-center">
        <LogOut size={19} /> Logout
        </button>
      </div>
    
      </div>



    </div>
  );
}
export default Sidebar
