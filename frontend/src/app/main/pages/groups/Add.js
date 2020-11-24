import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import React from 'react';
import Grid from './grids'
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
					<h4>Groups</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>Add Group</h4>
				</div>
			}
			content={
				<div className="p-24">
					
					<form className={classes.root} autoComplete="off">
						<TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
						<br />
						<br />
						<h4>Permisions:</h4>
						<Grid />
						<hr />
						<Buttons />
					</form>
				</div>
			}
		/>
	);
}

export default Add;
