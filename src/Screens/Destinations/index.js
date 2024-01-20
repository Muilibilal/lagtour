import { useEffect, useState } from 'react';
import { Hero } from '../../components';
import styles from './destinations.module.css';
import DestinationCard from '../../components/DestinationCard';

const Destinations = () => {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		fetch('https://seyiadet.pythonanywhere.com/api/all-locations/')
			.then((res) => res.json())
			.then((data) => setLocations(data?.filter((loc) => loc?.is_popular === true)));
	}, []);

	return (
		<div>
			<Hero image={false} heading="Destinations" subhead="Work and travel the world with a community of like-minded people." />

			<div className={styles['destination--wrapper']}>
				{locations.map((item) => (
					<DestinationCard key={item?.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default Destinations;
