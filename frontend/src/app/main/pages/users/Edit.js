import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import React from 'react';
// import Buttons from './Buttons'
import Grid from '../groups/grids'

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
					<h4>Users</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<span>Edit User</span><Button variant="contained" color="primary" raised justifyContent="flex-end" style={{marginLeft:'30px'}}>
						History
					</Button>
                    <Button variant="contained" color="primary" raised justifyContent="flex-end" style={{marginLeft:'30px'}}>
						Delete User
					</Button>
				</div>
			}
			content={
				<div className="p-24">
					<form className={classes.root} autoComplete="off">
					<TextField id="outlined-basic" label="UserName" variant="outlined" fullWidth />
						<br />
						<br />
						<h4>Personal Info</h4><hr /><br />
						<TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth />
						<br />
						<br />
						<TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
						<br />
						<br />
						<TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth />
						<br />
						<br />
						<span>Permisions:</span><hr /><br />
						<FormGroup>
						<FormControlLabel
						control={
						<Checkbox
							color="primary"
						/>
						}
						label="Active"
					    />
						<FormControlLabel
						control={
						<Checkbox
							color="primary"
						/>
						}
						label="Staff Status"
					    />
						<FormControlLabel
						control={
						<Checkbox
							color="primary"
						/>
						}
						label="Superuser Status"
					    />
	 
					</FormGroup>
					<h4>Groups:</h4>
						<Grid /> <br />
						<Grid /> <br /> 
						<h4>Important Dates</h4><br /> <hr />

						<h5>Last Login:</h5>
						<h5>Date:</h5>
						<h5>Time:</h5>

						<h3>Date Joined:</h3>
						<h5>Date:</h5>
						<h5>Time:</h5>
						<hr />
						{/* <Buttons /> */}
					</form>
				</div>
			}
		/>
	);
}

export default Edit;
