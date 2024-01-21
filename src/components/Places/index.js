import React, { useEffect, useState } from 'react';

import Place from './Place';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import styles from './places.module.css';
import { Link } from 'react-router-dom';

const Places = () => {
	const [popularLocations, setPopularLocations] = useState([]);

	useEffect(() => {
		fetch('https://seyiadet.pythonanywhere.com/api/all-locations/')
			.then((res) => res.json())
			.then((data) => setPopularLocations(data?.filter((loc) => loc?.is_popular === true)));
	}, []);

	return (
		<>
			<div className={styles['places']}>
				<span>destinations</span>
				<h3 className="app-heading">Our most popular destinations</h3>
				<Link to="/destination">
					<ArrowRightIcon className={`h-6 w-6 text-gray-500 ${styles['destinations-link']}`} />
					<p>View all destinations</p>
				</Link>
			</div>

			{popularLocations.map((place, index) => (
				<Link to={`destination/${place.id}`} style={{ textDecoration: 'none' }}>
					<Place digit={index + 1} place={place.name} />
				</Link>
			))}
		</>
	);
};

export default Places;
