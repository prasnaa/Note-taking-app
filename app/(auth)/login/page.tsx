export default function Login () {
    return (
        <div>
          <div className="flex items-center justify-center flex-col space-x-px-4 pb-20 pr-180 pl-180 bg-white h-screen 
          w-screen">
            <h1>My Note Book</h1> 
              <h1>Smart Note taking app with<br />Nepali Support</h1>

            <div className="box-content h-2/5 w-2/5 pt-8 pb-50 pr-1420 pl-1420 flex justify-center items-center bg-blue-200">
            <div className="justify-center items-center flex flex-col space-x-px-4 pb-20 pr-180 pl-240 bg-blue-200">
              
                <input type="text" placeholder="Username" className="mb-20 p-20 border border-gray-300 rounded w-100 "/>
                <input type="password" placeholder="Password" className="mb-20 p-20 border border-gray-300 rounded w-100"/>
                <button className="bg-blue-500 text-white p-15 rounded-2xl w-80 hover:bg-blue-600">Login</button> 
  
            </div>
        </div>
          </div>
        </div>

    )

}

