'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { LayoutDashboard, LayoutTemplate, CalendarDays, AlarmClockCheck, Handshake, User, Settings, NotebookTabs, LogOut, Power} from 'lucide-react';


const Sidebar = () => {
  const pathname = usePathname();
  
  return (
   <div className="hidden lg:flex min-h-svh w-64 bg-linear-to-b from-slate-50 to-white border-r border-slate-200 shadow-sm px-4 pt-6 pb-4 flex-col justify-between">
      
      <div>
        {/* Logo/Header */}
        <div className="mb-8 pb-4 border-b border-slate-200">
          <h1 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <div className="p-2 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg shadow-md">
              <NotebookTabs size={20} className="text-white" strokeWidth={2.5} />
            </div>
            My Note Book
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <Link href={'/'}>
            <div className={clsx(
              "p-3 rounded-xl flex items-center gap-5 transition-all duration-200 font-medium text-sm group",
              pathname === '/' 
                ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md"
            )}>
              <LayoutDashboard size={18} strokeWidth={2.5} className={clsx(pathname === '/' ? "" : "group-hover:scale-110 transition-transform")} />
              <span>Dashboard</span>
            </div>
          </Link>

          <Link href={'/template'}>     
            <div className={clsx(
              "p-3 rounded-xl flex items-center gap-5 transition-all duration-200 font-medium text-sm group",
              pathname === '/template' 
                ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md"
            )}>
              <LayoutTemplate size={18} strokeWidth={2.5} className={clsx(pathname === '/template' ? "" : "group-hover:scale-110 transition-transform")} />
              <span>Template</span>
            </div>
          </Link>
          
          <Link href={'/calendar'}>
            <div className={clsx(
              "p-3 rounded-xl flex items-center gap-3 transition-all duration-200 font-medium text-sm group",
              pathname === '/calendar' 
                ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md"
            )}>
              <CalendarDays size={18} strokeWidth={2.5} className={clsx(pathname === '/calendar' ? "" : "group-hover:scale-110 transition-transform")} />
              <span>Nepali Calendar</span>
            </div>
          </Link>

          <Link href={'/task'}>
            <div className={clsx(
              "p-3 rounded-xl flex items-center gap-3 transition-all duration-200 font-medium text-sm group",
              pathname === '/task' 
                ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md"
            )}>
              <AlarmClockCheck size={18} strokeWidth={2.5} className={clsx(pathname === '/task' ? "" : "group-hover:scale-110 transition-transform")} />
              <span>Task Reminder</span>
            </div>
          </Link>

          <Link href={'/collaboration'}>
            <div className={clsx(
              "p-3 rounded-xl flex items-center gap-3 transition-all duration-200 font-medium text-sm group",
              pathname === '/collaboration' 
                ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md"
            )}>
              <Handshake size={18} strokeWidth={2.5} className={clsx(pathname === '/collaboration' ? "" : "group-hover:scale-110 transition-transform")} />
              <span>Collaboration</span>
            </div>
          </Link>

          <Link href={'/profile'}>
            <div className={clsx(
              "p-3 rounded-xl flex items-center gap-3 transition-all duration-200 font-medium text-sm group",
              pathname === '/profile' 
                ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md"
            )}>
              <User size={18} strokeWidth={2.5} className={clsx(pathname === '/profile' ? "" : "group-hover:scale-110 transition-transform")} />
              <span>Profile</span>
            </div>
          </Link>
          
          <Link href={'/settings'}>
            <div className={clsx(
              "p-3 rounded-xl flex items-center gap-3 transition-all duration-200 font-medium text-sm group",
              pathname === '/settings' 
                ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md"
            )}>
              <Settings size={18} strokeWidth={2.5} className={clsx(pathname === '/settings' ? "" : "group-hover:scale-110 transition-transform")} />
              <span>Settings</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-3">
        {/* Divider */}
        <div className="border-t border-slate-200 pt-3">
          {/* Online Status */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-3">
            <div className="relative">
              <Power size={18} strokeWidth={2.5} />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <span>Online</span>
          </div>

          {/* Logout Button */}
          <button className="w-full bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl flex gap-2 justify-center items-center font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            <LogOut size={18} strokeWidth={2.5} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Sidebar