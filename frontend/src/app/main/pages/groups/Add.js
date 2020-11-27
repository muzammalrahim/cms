import FusePageCarded from '@fuse/core/FusePageCarded';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Checkbox } from '@material-ui/core'
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Grids from './grids'
import { post } from '../../_helper/api'

const styles = (theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			textAlign: 'right'
		},
	},
	layoutRoot: {},
});

class Add extends Component {
	constructor(props) {
		super(props);
		this.group = {
			groupname: '',
			permisions: ''
		}
		this.state = {
			group: this.group
		}
	}

	handleChange(e) {
		let { group } = this.state;
		let [key, value] = [e.target.id, e.target.value]
		group[key] = value;
		this.setState({ group })
	}
	handleSubmit(e) {
		let { groupname, permisions } = this.state.group;
		if (groupname !== "" && permisions !== "") {
			post('adm/auth/group/', { groupname, permisions }).then((response) => {
				if (e === "save_and_new") {
					let group = {
						groupname: '', permisions: ''
					}
					this.setState({ group })
					document.getElementById("add_new_group").reset();
				} else {
					this.props.history.push(e === 'save' ? '/admin/auth/group' : '/admin/auth/group')
				}
			})
		}

	}

	render() {
		const { classes } = this.props;

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

						<form id="add_new_group" className={classes.root} autoComplete="off">
							<TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
							<br />
							<br />
							<Grid item xs={12} style={{ textAlign: 'left' }}>
								<label>Permisions:</label>
							</Grid>
							<Autocomplete
								multiple
								id="checkboxes-tags-demo"
								options={this.group}
								disableCloseOnSelect
								getOptionLabel={option => option.title}
								renderOption={(option, { selected }) => (
									<React.Fragment>
										<Checkbox style={{ marginRight: 8 }} checked={selected} />
										{option.title}
									</React.Fragment>
								)}
								style={{ width: 500 }}
								renderInput={params => (
									<TextField {...params} variant="outlined" label="Permisions" helperText="Hold down “Control”, or “Command” on a Mac, to select more than one." />
								)}
							/>
							<hr />
							<div className={classes.root}>
								<Button variant="contained" onClick={() => { this.handleSubmit("save_and_new") }}>
									Save and add another
								</Button>
								<Button variant="contained" onClick={() => { this.handleSubmit("save_and_edit") }}>
									Save and continue editing
								</Button>
								<Button variant="contained" color="primary" onClick={() => { this.handleSubmit("save") }}>
									Save
								</Button>
							</div>
						</form>
					</div>
				}
			/>
		);
	}
}
export default connect(null, null)(withStyles(styles)(Add))
