import React, { useEffect, useState } from 'react';

import styles from './search.module.css';
import { Link } from 'react-router-dom';

const Search = () => {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');

	const [locations, setLocations] = useState([]);

	useEffect(() => {
		fetch('https://seyiadet.pythonanywhere.com/api/all-locations/')
			.then((res) => res.json())
			.then((data) => setLocations(data));
	}, []);

	const clearInput = () => {
		setSearch('');
		setData([]);
	};

	useEffect(() => {
		if (!search) {
			setData([]);
		} else {
			const fetchQueryData = async () => {
				try {
					let query = [];

					locations.forEach((location) => {
						let holder = location?.name?.toLowerCase().includes(search.toLowerCase());

						holder && query.push({ id: location?.id, name: location?.name });
					});

					setData(query);
				} catch (error) {
					console.log(error.message);
				}
			};

			fetchQueryData();
		}
	}, [search, locations]);

	return (
		<div className={styles['search-container']}>
			<input
				className={styles['search-input']}
				type="text"
				value={search}
				placeholder="Search for a destination..."
				onChange={(event) => setSearch(event.target.value)}
			/>
			<div className={styles.dropdown}>
				{search && data.length === 0 ? <span>No results</span> : ''}
				{data.length
					? data.map((val) => (
							<Link to={`/destination/${val?.id}`} onClick={clearInput} style={{ textDecoration: 'none' }}>
								<span key={val?.id}>{val?.name}</span>
							</Link>
					  ))
					: null}
			</div>
		</div>
	);
};

export default Search;
