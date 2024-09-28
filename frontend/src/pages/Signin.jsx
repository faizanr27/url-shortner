import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            name: name,
            password: password,
        };
    
        console.log('Data to be sent:', formData);
        try {
            const response = await fetch('https://url-shortner-9eps.onrender.com/api/authRoutes/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Signin failed');
            }
    
            const result = await response.json();
            console.log('Success:', result);
    
            // Store the token in localStorage
            localStorage.setItem('token', result.token);
            // setToken(result.token);
    
            // Redirect to a protected route
            navigate('/home');
    
        } catch (error) {
            console.error('Error during signin:', error);
        }
    
        setName('');
        setPassword('');
    };
      

    const handleNavigate = (e) => {
        navigate('/');
      };

    return(
        <div id="signin" className="relative flex flex-col font-doodle bg-white shadow-sm border border-slate-200 w-96 rounded-lg my-40 mx-auto" >
  <div className="relative m-2.5 items-center flex justify-center bg-custom-gray bg-custom-opacity text-white h-24 rounded-md bg-black">
    <h3 className="text-2xl">
      Sign in
    </h3>
  </div>
  <form onSubmit={handleSubmit}>
  <div className="flex flex-col gap-4 p-6">

  <div className="w-full max-w-sm min-w-[200px]">
        <label className="block mb-2 text-sm text-black">
          Username
        </label>
        <input type="text" onChange={handleNameChange} autoComplete="username" className="w-full bg-slate-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="UserName" />
    </div>
    {/* <div className="w-full max-w-sm min-w-[200px]">
        <label className="block mb-2 text-sm text-slate-600">
          Email
        </label>
        <input type="email" onChange={handleEmailChange} autoComplete="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
    </div>
     */}
    <div className="w-full max-w-sm min-w-[200px]">
      <label className="block mb-2 text-sm text-black">
        Password
      </label>
      <input type="password" onChange={handlePasswordChange} autoComplete="new-password" className="w-full bg-slate-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
    </div>
 
    <div className="inline-flex items-center mt-2">
      {/* <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
      </label> */}
      <a className="cursor-pointer ml-2 text-sm text-blue-400" >
        Forgot Password ?
      </a>
    </div>
  </div>
  <div className="p-6 pt-0">
    <button className="w-full rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm bg-custom-gray bg-custom-opacity text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">
      Sign in
    </button>
    <p className="flex justify-center mt-6 text-sm text-slate-600">
      Don't have an account?
      <a href="#" className="ml-1 text-sm font-semibold text-slate-700 underline" onClick={handleNavigate}>
        Sign Up
      </a>
    </p>
  
  </div>
  </form>
</div>
    )
}

export default Signin