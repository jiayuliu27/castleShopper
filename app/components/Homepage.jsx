import React from 'react';
import Navbar from './Navbar'
import Star from './Star'
import { Link } from 'react-router';

import HomepageContainer from '../containers/HomepageContainer'
export default ({allCastles, filter, handleChange}) => (
	<div className="home" id="homepage-main">
		<div className="form-group">
			<input
				placeholder="Filter castles by name"
				className="form-control"
				value={filter}
				onChange={handleChange}
				/>
			</div>
		<h1 id="header">CASTLESHOPPER</h1>
		<div className="list-group">
      {
				allCastles && allCastles.map(function(castle) {
					return (
						<div key={castle.id} className="col-xs-6 col-md-3" id="image-div">
							<a href={`/castles/${castle.id}`} className="img-thumbnail" id="castle-photo">
							<img src="http://www.reidsguides.com/images/destinations/europe/germany/baden-wurttemberg/swabia/hohenzollern-thumb.jpg" />
							</a>
							<p className="description" id="castle-title">{castle.name}</p>
							<p>{castle.description}</p>
							<a href="#" className="category">{ castle.category ? castle.category.map(cat => cat) : null }</a>
							<Star />
						</div>
					)
				})
			}
    </div>
	</div>
);



// src={`images/${this.props.image}`}