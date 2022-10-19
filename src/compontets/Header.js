import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {

	const { user, logOut } = useContext(AuthContext)
	const handleLogOut = () => {
		logOut()
			.then(() => { })
		.catch(error=>console.error(error))
	}
	console.log(user)
	return (
		<div>
			<div className="navbar bg-primary text-primary-content">
				<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
				<NavLink className="mx-4" to="/">Home</NavLink>
				<NavLink className="mx-4" to="/order">Order</NavLink>
				<NavLink to="/login">Log In</NavLink>
				<NavLink className="mx-4" to="/register">Register</NavLink>
				{user && <span>{user.email}</span>}
				{
					user?.email ?
						<button className='btn btn-sm' onClick={handleLogOut}>Log Out</button>
						:
						<Link to='/login'><button className='btn btn-sm'>Log in</button></Link>
				}
			</div>	
		</div>
	);
};

export default Header;