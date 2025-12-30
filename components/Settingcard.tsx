"use client"
import React, { useState } from 'react'
import { CircleArrowLeft, Bell, ShieldCheck, Cloud, Database, Lock, Key, Shield, Download, Upload, Trash2, FileDown, CheckCircle2 } from 'lucide-react'
import Backbtn from './Backbtnbar'

const Settingcard = () => {
  const [encryptionEnabled, setEncryptionEnabled] = useState(true)
  const [autoBackup, setAutoBackup] = useState(true)
  const [offlineMode, setOfflineMode] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center from-gray-50 to-blue-50">
      {/* Header */}
      <div className=" w-full max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <Backbtn/>
          <div className="relative">
            <Bell size={24} className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>
        
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600 px-2">Manage security, privacy and sync preferences</p>
        </div>

        {/* Security and Privacy Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 mb-5 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ShieldCheck size={22} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">Security & Privacy</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-blue-500" />
                <div>
                  <p className="font-semibold text-gray-900">End-to-End Encryption</p>
                  <p className="text-sm text-gray-600 ">Encrypt all notes before syncing</p>
                </div>
              </div>
              <button
                onClick={() => setEncryptionEnabled(!encryptionEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                  encryptionEnabled ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    encryptionEnabled ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="p-2 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <Key size={20} className="text-blue-500" />
                <p className="font-semibold text-gray-900">Encryption Key</p>
              </div>
              <input
                type="password"
                placeholder="Keep your key safe"
                className="w-full px-2 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>

            <div className="p-2 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Shield size={20} className="text-blue-500" />
                <p className="font-semibold text-gray-900">Access Control</p>
              </div>
              <p className="text-gray-600 ml-7">Current Role: <span className="text-blue-600 font-medium">Editor</span></p>
            </div>
          </div>
        </div>

        {/* Cloud and Sync Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 mb-5 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Cloud size={22} className="text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Cloud & Sync</h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Upload size={20} className="text-blue-500" />
                <div>
                  <p className="font-semibold text-gray-900">Auto Backup</p>
                  <p className="text-sm text-gray-600">Automatically backup notes to cloud</p>
                </div>
              </div>
              <button
                onClick={() => setAutoBackup(!autoBackup)}
                className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                  autoBackup ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    autoBackup ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-500" />
                <div>
                  <p className="font-semibold text-gray-900">Offline Mode</p>
                  <p className="text-sm text-gray-600">Enable full offline functionality</p>
                </div>
              </div>
              <button
                onClick={() => setOfflineMode(!offlineMode)}
                className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                  offlineMode ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    offlineMode ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <button className="flex items-center justify-center gap-2 px-5 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors shadow-md">
                <Download size={20} />
                Backup Now
              </button>
              <button className="flex items-center justify-center gap-2 px-5 py-4 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                <Upload size={20} />
                Restore
              </button>
            </div>
          </div>
        </div>

        {/* Data Management Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 mb-5 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Database size={22} className="text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Data Management</h2>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="font-semibold text-gray-900 mb-3">Storage Used</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">2.4 GB of 15 GB</span>
                  <span className="text-blue-500 font-medium">16%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '16%' }}></div>
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-colors cursor-pointer">
              <FileDown size={20} />
              Export All Notes
            </button>

            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-red-300 text-red-600 font-semibold rounded-xl hover:bg-red-50 hover:border-red-400 transition-colors cursor-pointer">
              <Trash2 size={20} />
              Clear All Data
            </button>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-start gap-4">
            <Shield size={34} className="flex-shrink-2 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Your Data is Secure</h3>
              <p className="text-blue-100 leading-relaxed">
                All your data is encrypted end-to-end with military-grade encryption. 
                We never have access to your encryption keys, ensuring complete privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settingcard