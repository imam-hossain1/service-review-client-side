import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { userContext } from '../../Context/AuthContext';
import { useTitle } from '../../hooks/useTittle';


const Register = () => {
	useTitle('Register')
	const navigate = useNavigate();

    const {registerAuth} = useContext(userContext)
    const singUpHandler = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
		console.log(email , name, password);
        form.reset()
		registerAuth(email ,password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
			navigate('/login')
			toast.success('Register Successfully')
			})
			.catch(error=> 
				toast.error(error.message , {
					position: toast.POSITION.TOP_CENTER
				})
				
			) 
    }


    return (
        <div>
            <div onSubmit={singUpHandler}  style={{backgroundColor:'#111827'}} className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 text-white mt-5 mx-auto">
	<h1 className="text-2xl font-bold text-center ">Register</h1>
	
	<form noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label forhtml="username" className="block ">Full Name</label>
			<input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label forhtml="username" className="block ">Email</label>
			<input type="email" name="email" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label forhtml="password" className="block ">Password</label>
			<input type="password" name="password" id="password" placeholder="password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
			
		</div>
		
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400" >Register</button>
	</form>
	

	<p className="text-md text-center sm:px-6 ">Already have an  account?

		<Link rel="noopener noreferrer" to='/login' className="underline dark:text-gray-100"> Log in</Link>
	</p>
</div>
            
        </div>
    );
};

export default Register;