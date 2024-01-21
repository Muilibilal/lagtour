import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Screens/Home';
import Destinations from './Screens/Destinations';
import PlaceInfo from './Screens/PlaceInfo';
import { NavBar, Footer, ScrollToTop } from './components';

import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />

				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/destination" element={<Destinations />} />
					<Route path="/destination/:id" element={<PlaceInfo />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
