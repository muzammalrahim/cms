import React from 'react';

const RolesConfigration = {
	settings: {
		layout: {
			add: {}
		}
	},
	routes: [
		{
			path: '/admin/auth/role/add',
			component: React.lazy(() => import('./Add'))
		},
		{
			path: '/admin/auth/role',
			exact: true,
			component: React.lazy(() => import('./List'))
		}
		
	]
};

export default RolesConfigration;
