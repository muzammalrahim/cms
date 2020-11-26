import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import React from 'react';
import Buttons from './Buttons'

const useStyles = makeStyles({
	layoutRoot: {}
});

function Add() {
	const classes = useStyles();

	return (
		<FusePageCarded
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="py-24">
					<h4>Users</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>Add User</h4>
				</div>
			}
			content={
				<div className="p-24">
					<form className={classes.root} autoComplete="off">
						<TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
						<br />
						<br />
						<TextField id="outlined-basic" type='password' label="Password" variant="outlined" fullWidth />
						<br />
						<br />
						<TextField id="outlined-basic" type='password' label="Confirm Password" variant="outlined" fullWidth />
						<br />
						<br />
						<hr />
						<Buttons />
					</form>
				</div>
			}
		/>
	);
}

export default Add;
