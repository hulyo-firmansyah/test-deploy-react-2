import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'

import Sidebar from './components/Sidebar.js'
import Navbar from './components/Navbar.js'
import Content from './components/Content.js'

class App extends Component {
	
	
	render ()
	{
		const img = process.env.PUBLIC_URL + '/logo192.png'

		return (
			<BrowserRouter>
				<div id="wrapper">
					<Sidebar />
					<div id="content-wrapper" className="d-flex flex-column">
						<div id="content">
							<Navbar image={img} />
							<Content />
						</div>
						<footer className="sticky-footer bg-white">
							<div className="container my-auto">
								<div className="copyright text-center my-auto">
								<span>Copyright © Your Website 2019</span>
								</div>
							</div>
						</footer>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
