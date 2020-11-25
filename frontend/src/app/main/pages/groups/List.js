import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Button, InputBase } from '@material-ui/core';
import React from 'react';
import Tables from './Tables'

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	inputRoot: {
		color: 'inherit'
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	}
}));

function List() {
	const classes = useStyles();

	return (
		<FusePageCarded
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="py-24">
					<h4>Groups</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<span>Groups List</span>
					<InputBase
            placeholder="Search…"
            color='primary'
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput
						}}
						inputProps={{ 'aria-label': 'search' }}
					/>
					<Button variant="contained" color="primary" raised justifyContent="flex-end">
						Add Group
					</Button>
				</div>
			}
			content={
				<div className="p-24">
					<Tables />
				</div>
			}
		/>
	);
}

export default List;
