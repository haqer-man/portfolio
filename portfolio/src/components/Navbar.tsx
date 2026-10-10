import React from 'react';
import '/src/components/Navbar.module.css';

export default function Navbar() {
	return (
	<header className="navbar" role="banner">
		<div className="navbar__container">
			<a href="/" className="navbar__brand" aria-label="Homepage">Home</a>

			{/* <button className="navbar__toggle"></button> */}

			<nav id="navbarMenu" className="navbar__menu" role="navigation" aria-labelledby="navbarToggle">
				<ul className="navbar__list">
					<li className="navbar__item">
						<a href="/photos" className="navbar__link">Gallery</a>
					</li>
					<li className="navbar__item">
						<a href="/photos/albums" className="navbar__link">Albums</a>
					</li>
					<li className="navbar__item">
						<a href="/photos/map" className="navbar__link">Locations</a>
					</li>
					<li className="navbar__item">
						<a href="/contact" className="navbar__link">Contact</a>
					</li>
					
				</ul>
			</nav>
		</div>
	</header>
	);
}