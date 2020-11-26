import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core'
import React from 'react';
import Grid from './grids'
import Buttons from './Buttons'

const useStyles = makeStyles({
	layoutRoot: {}
});

function Edit() {
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
					<span>Add Group</span>
                    <Button variant="contained" color="primary" raised justifyContent="flex-end" style={{marginLeft:'30px'}}>
						History
					</Button>
                    <Button variant="contained" color="primary" raised justifyContent="flex-end" style={{marginLeft:'30px'}}>
						Delete
					</Button>
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
                        <br/>
						<hr />
						<Buttons />
					</form>
				</div>
			}
		/>
	);
}

export default Edit;