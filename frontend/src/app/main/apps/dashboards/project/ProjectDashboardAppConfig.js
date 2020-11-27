import React from 'react';
import {REACT_BASE_URL} from '../../../../helper/static_data';

const ProjectDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: `/${REACT_BASE_URL}`,
			exact: true,
			component: React.lazy(() => import('./ProjectDashboardApp'))
		}
	]
};

export default ProjectDashboardAppConfig;
