import React, {useState, useEffect} from 'react';
import logo from './flixnet.jpg';
import wiwt from './wiwt.jpg';
import './Navbar.css';

const Navbar = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if(window.scrollY > 100) handleShow (true)
			else handleShow(false);
		});
		return () =>  window.removeEventListener('scroll')
	}, []);
	return(
		<div className = {`navbar ${show && 'navbar_black'}`}>
		 <img className = 'nav_logo' src = {logo} alt = 'flixnet-logo' />
		 <img className = 'nav_avatar' src = {wiwt} alt = 'flixnet-logo' />
		</div>
	);
}
export default Navbar;