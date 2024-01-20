import styles from './destination.module.css';
import { Link } from 'react-router-dom';

const DestinationCard = ({ item: { id, location_image, name, subheading } }) => {
	return (
		<Link to={`/destination/${id}`} className={styles['dest--card']}>
			<div className={styles.card}>
				{<img src={`https://seyiadet.pythonanywhere.com${location_image}`} alt="people" />}

				<span className={styles['card--text']}>
					<h1 className="app-small--heading">{name}</h1>
					<p>{subheading}</p>
				</span>
			</div>
		</Link>
	);
};

export default DestinationCard;
