//export default function Register() {
export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">

      {/* App Title Outside Box */}
      <h1 className="text-3xl font-bold mb-6">My Note Book</h1>

      {/* Main Box */}
      <div className="border border-gray-300 p-8 rounded-lg w-[500px] space-y-6">

        {/* Title inside box */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold leading-tight">
            Smart Note Taking With <br /> Nepali Support
          </h1>
        </div>

        {/* Toggle buttons */}
        <div className="flex justify-center gap-8 mb-6">
          <button className="bg-gray-300 text-black py-2 px-8 rounded font-semibold">LOGIN</button>
          <button className="bg-gray-300 text-black py-2 px-8 rounded font-semibold">REGISTER</button>
        </div>

        {/* Form fields */}
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your Full name"
              className="p-3 rounded bg-gray-200 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-3 rounded bg-gray-200 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-3 rounded bg-gray-200 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Role</label>
            <select className="p-3 rounded bg-gray-200">
              <option>Editor</option>
              <option>Viewer</option>
              <option>Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 text-black py-3 rounded-2xl bg-blue-500 font-semibold hover:bg-gray-400"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
