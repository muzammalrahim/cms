import FuseExample from '@fuse/core/FuseExample';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import {REACT_BASE_URL} from '../../../../helper/static_data'

/* eslint import/no-webpack-loader-syntax: off */

function GoogleMapReactDoc() {
	return (
		<FusePageSimple
			header={
				<div className="flex flex-1 items-center justify-between p-24">
					<div className="flex flex-col">
						<div className="flex items-center mb-16">
							<Icon className="text-18" color="action">
								home
							</Icon>
							<Icon className="text-16" color="action">
								chevron_right
							</Icon>
							<Typography color="textSecondary">Documentation</Typography>
							<Icon className="text-16" color="action">
								chevron_right
							</Icon>
							<Typography color="textSecondary">3rd Party Components</Typography>
						</div>
						<Typography variant="h6">Google Map React</Typography>
					</div>
					<Button
						className="normal-case"
						variant="contained"
						component="a"
						href="https://github.com/google-map-react/google-map-react"
						target="_blank"
						role="button"
					>
						<Icon>link</Icon>
						<span className="mx-4">Reference</span>
					</Button>
				</div>
			}
			content={
				<div className="p-24 max-w-2xl">
					<Typography className="mb-16" component="p">
						<code>google-map-react</code> is a component written over a small set of the Google Maps API.
					</Typography>

					<hr />

					<Typography className="text-32 mt-32 mb-8" component="h2">
						Example Usages
					</Typography>

					<FuseExample
						className="mb-64"
						component={require('./examples/simple.js').default}
						raw={require('!raw-loader!./examples/simple.js')}
					/>

					<Typography className="text-32 mt-32 mb-8" component="h2">
						Demos
					</Typography>

					<ul>
						<li className="mb-8">
							<Link to={`/${REACT_BASE_URL}`}>Analytics Dashboard</Link>
						</li>
					</ul>
				</div>
			}
		/>
	);
}

export default GoogleMapReactDoc;
