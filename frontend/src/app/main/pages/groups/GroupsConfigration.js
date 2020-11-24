import React from 'react';

const GroupsConfigration = {
	settings: {
		layout: {
			add: {}
		}
	},
	routes: [
		{
			path: '/admin/auth/group/add',
			component: React.lazy(() => import('./Add'))
		},
		{
			path: '/admin/auth/group',
			exact: true,
			component: React.lazy(() => import('./List'))
		}
		
	]
};

export default GroupsConfigration;
