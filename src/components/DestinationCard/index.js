import styles from './destination.module.css';
import { Link } from 'react-router-dom';

const DestinationCard = ({ item: { id, location_image, name, subheading } }) => {
	return (
		<Link to={`/destination/${id}`} className={styles['dest--card']}>
			<div className={styles.card}>
				{<img src={`https://seyiadet.pythonanywhere.com${location_image}`} alt="people" />}

<<<<<<< HEAD
const Destination = ({ item: { id, location_image, name, subhead } }) => {
  return (
    <Link to={`/destination/${id}`} className={styles["dest--card"]}>
      <div className={styles.card}>
        {<img src={location_image} alt="card-img" />}

        <span className={styles["card--text"]}>
          <h1 className={generalStyle["small--heading"]}>{name}</h1>
          <p>{subhead}</p>
        </span>
      </div>
    </Link>
  );
=======
				<span className={styles['card--text']}>
					<h1 className="app-small--heading">{name}</h1>
					<p>{subheading}</p>
				</span>
			</div>
		</Link>
	);
>>>>>>> 946a4cf9268056181914a4613a5d9441c5847a2a
};

export default DestinationCard;
