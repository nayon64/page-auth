import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Login = () => {
	const { signIn } = useContext(AuthContext)
	const navigate=useNavigate()
	const handleSubmit = event => {
		event.preventDefault();
		const form = event.target;
		const name= form.name.value
		const email= form.email.value
		const password = form.password.value
		console.log(name, email, password)
		const student = { name : "milton", job: "parctice", address: "bd" }
const {address ,...rest } = student;
		signIn(email, password)
			.then(result => {
				const user = result.user
				form.reset()
				navigate('/')
				console.log(user)
			})
			.catch(error => {
			console.error("error: ",error)
			})
		
	}
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col ">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Please Log In!</h1>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit} className="card-body">
							
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" name='email' placeholder="email" className="input input-bordered" required/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password" placeholder="password" className="input input-bordered" required/>
								<label className="label">
									<Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
								</label>
							</div>
							<div className="form-control mt-6">
								<button type="submit" className='btn btn-primary'>Log In</button>
							</div>
							<label className="label">
								Create an account?
									<Link to="/register" className="label-text-alt text-purple-700 link link-hover">Register</Link>
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;