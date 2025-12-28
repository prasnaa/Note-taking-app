// import React from 'react';
import { Camera, User, Mail, MessageSquare, Phone, MapPin, Shield } from 'lucide-react';

const Profilebody = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-2 px-4'>
      <div className='max-w-4xl mx-auto'>
        
        {/* profilesetting */}
        <div className='bg-white rounded-lg p-6 mb-4 shadow-sm'>
          <h1 className='text-2xl font-semibold text-gray-800'>Profile Settings</h1>
          <p className='text-sm text-gray-500 mt-1'>Update your personal information and preferences</p>
        </div>

        {/* pictureimplement */}
        <div className='bg-white rounded-lg p-6 mb-4 shadow-sm'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='relative'>
                <div className='h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-medium'>
                  JD
                </div>
                <button className='absolute bottom-0 right-0 h-8 w-8 bg-white rounded-full shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50'>
                  <Camera size={16} className='text-gray-600' />
                </button>
              </div>
              <div>
                <p className='font-medium text-gray-800'>John Doe</p>
                <p className='text-sm text-gray-500'>Click camera to update photo</p>
              </div>
            </div>
            <button className='px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600'>
              Edit Profile
            </button>
          </div>
        </div>

        {/* userform section */}
        <div className='bg-white rounded-lg p-6 shadow-sm'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            
            {/* 1 */}
            <div className='space-y-5'>
              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <User size={16} className='text-gray-400' />
                  Full Name
                </label>
                <input
                  type='text'
                  placeholder='Enter your full name'
                  className='w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white'
                />
              </div>

              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <Mail size={16} className='text-gray-400' />
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white'
                />
              </div>

              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <MessageSquare size={16} className='text-gray-400' />
                  Bio
                </label>
                <textarea
                  placeholder='Tell us about yourself'
                  rows={3}
                  className='w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white resize-none'
                />
              </div>
            </div>

            {/* 2 */}
            <div className='space-y-5'>
              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <Phone size={16} className='text-gray-400' />
                  Contact
                </label>
                <input
                  type='tel'
                  placeholder='97********'
                  className='w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white'
                />
              </div>

              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <MapPin size={16} className='text-gray-400' />
                  Address
                </label>
                <input
                  type='text'
                  placeholder='Enter your address'
                  className='w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white'
                />
              </div>

              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <Shield size={16} className='text-gray-400' />
                  Role & Permission
                </label>
                <select className='w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-blue-500 focus:bg-white cursor-pointer'>
                  <option>Viewer</option>
                  <option>Editor</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
          </div>

          {/* savebutton*/}
          <div className='flex justify-end mt-6 pt-6 border-t border-gray-200'>
            <button className='px-8 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600'>
              Save Changes
            </button>
          </div>
        </div>

        {/* additonalsection */}
        <div className='bg-white rounded-lg p-6 mt-4 shadow-sm'>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>Security & Privacy</h2>
          <p className='text-sm text-gray-500'>Manage your account security settings</p>
        </div>

      </div>
    </div>
  );
};

export default Profilebody;