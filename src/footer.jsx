import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./index.css');
require("./home.css");
require('./footer.css')
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';

var Footer = React.createClass({
	render: function () {
		return (

		<div className="footer">
				
						<div className="credits">
							<h3>Art Dealers</h3>
							<li>Madame Melanie Williams</li>
							<li>Madame Dee Sterling</li>
							<li>Sir Luis Carbajal</li>
							<li>Sir Matt M. Jennings</li>
						</div>

						<div className="credits">
							<h3>Customer Service :<br/>1-800-123-4567</h3>
						</div>

						<div className="credits">
							<h3>31-00 47th Avenue <br/>
							 #1105 Long Island <br/>
							  City, NY 11101</h3>
						</div>

						<div className="credits1">
									<p>Copyright 2016 Amazing Art Gallery / Coalition For Queens</p>
						</div>

			</div>
		)
	}
});


// ReactDOM.render(<Footer />, document.getElementById('root'))
export default Footer;
