import React from 'react';

import styles from './hero.module.css';

const Hero = ({ image, heading, subhead }) => {
	return (
		<div className={`${styles['hero--card']} ${image ? '' : styles['no-img']}`}>
			{image && <img src={image} alt="beach" />}

			<span className={`${styles['hero--text']}  ${image ? '' : styles['custom-text']}`}>
				<h1 className="app-heading">{heading}</h1>
				<p>{subhead}</p>
			</span>
		</div>
	);
};

export default Hero;
