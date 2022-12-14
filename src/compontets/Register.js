import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Register = () => {
	
	const {createUser}=useContext(AuthContext)

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.target;
		const name= form.name.value
		const email= form.email.value
		const password = form.password.value
		console.log(name, email, password)
		
		createUser(email, password)
			.then(result => {
				const user = result.user
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
						<h1 className="text-5xl font-bold">Please Registration now!</h1>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input type="text" name="name" placeholder="name" className="input input-bordered" required/>
							</div>
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
							</div>
							<div className="form-control mt-6">
								<button type="submit" className='btn btn-primary'>Register</button>
							</div>
							<label className="label">
								Already have an account?
									<Link to="/login" className="label-text-alt text-purple-700 link link-hover">Log In</Link>
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;