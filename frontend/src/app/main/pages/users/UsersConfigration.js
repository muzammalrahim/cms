import React from 'react';

const UsersConfigration = {
	settings: {
		layout: {
			add: {}
		}
	},
	routes: [
		{
			path: '/admin/auth/user/add',
			component: React.lazy(() => import('./Add'))
		},
		{
			path: '/admin/auth/user',
			exact: true,
			component: React.lazy(() => import('./List'))
		}
		
	]
};

export default UsersConfigration;
