
const LoginForm = () => {
  return (
    <div className="min-w-[420px]  bg-white py-7 px-5 rounded-lg">
      <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">Login Form</h2>
      <form action="#" className="space-y-4">
        <div className="relative">
          <input type="email" className="w-full h-10 px-2 rounded-md border border-gray-200 hover:border-gray-100 peer " />
          <label htmlFor="email" className="text-sm font-medium absolute top-1/2 -translate-y-1/2 left-2 peer-focus:top-0 bg-white z-20 transition-all duration-300">Email</label>
        </div>
        <div className="relative">
          <input type="password" className="w-full h-10 px-2 rounded-md border border-gray-200 hover:border-gray-100 peer" />
          <label htmlFor="password" className="absolute top-1/2 -translate-y-1/2 left-2 peer-focus:top-0 bg-white z-20 transition-all duration-300">Password</label>
        </div>
        <button type="submit" className="py-2 w-full rounded-sm bg-sky-500 text-sm font-medium text-white">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;