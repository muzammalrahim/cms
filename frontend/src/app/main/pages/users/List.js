import React, {Component} from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { Button, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper } from '@material-ui/core';
import { fade, withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {list} from '../../../helper/api';
import {REACT_BASE_URL} from '../../../helper/static_data';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
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
		padding: theme.spacing(1),
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
});

class List extends Component {
	constructor(props){
		super(props);
		this.state={
			userList:[],
			page:0,
			rowsPerPage:25,
			columns : [
				{ id: 'id', label: '', minWidth: 5},
				{ id: 'name', label: 'UserName', minWidth: 170},
				{ id: 'email', label: 'Email', minWidth: 100 },
				{
					id: 'first_name',
					label: 'FirstName',
					minWidth: 170,
					align: 'right',
					format: value => value.toLocaleString('en-US')
				},
				{
					id: 'last_name',
					label: 'LastName',
					minWidth: 170,
					align: 'right',
					format: value => value.toLocaleString('en-US')
				},
				{
					id: 'is_staff',
					label: 'Staff Status',
					minWidth: 170,
					align: 'right',
					// format: value => value.toLocaleString('en-US')
				}
			],
			rows: []
		}
		this.getUsers();
	}
	getUsers(){
		list('adm/auth/user/').then((response)=>{
			this.setState({userList:response.data})
			let rows = [];
			response.data.map((row)=>{
				let id = <Checkbox
				// indeterminate={numSelected > 0 && numSelected < rowCount}
				// checked={rowCount > 0 && numSelected === rowCount}
				// onChange={onSelectAllClick}
				inputProps={{ 'aria-label': 'select all desserts' }}
			  />
				rows.push(this.createData(id, row.username, row.email, row.firstname, row.last_name, row.is_staff.toLocaleString()))
			})
		this.setState({rows});
		})
	}

	handleChangePage = (event, newPage) => {
		this.setState({page:newPage});
	};

	handleChangeRowsPerPage = event => {
		this.setState({rowsPerPage:event.target.value});
		this.setState({page:0});
	};
	createData(id,name, email, first_name, last_name, is_staff) {
		return {id, name, email, first_name, last_name, is_staff };
	}
	render(){
		const { classes } = this.props;
		let {userList, rowsPerPage, page, rows, columns} = this.state;
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
						<span>Users List</span>
						<InputBase
							style={{ border: '1px solid',margin:'2pc', borderRadius:'2px' }}
							placeholder="Search…"
							variant="outlined"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
						<Button variant="contained" color="primary" justifyContent="flex-end" onClick={()=>{this.props.history.push(`/${REACT_BASE_URL}/auth/user/add`)}}>
							Add User
						</Button>
					</div>
				}
				content={
					<div className="p-24">
						<Paper className={classes.root}>
							<TableContainer className={classes.container}>
								<Table stickyHeader aria-label="sticky table">
									<TableHead>
										<TableRow>
											{columns.map(column => {
												return <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} >
													{column.label}
												</TableCell>
											})}
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
											return (
												<TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
													{columns.map(column => {
														const value = row[column.id];
														return (
															<TableCell key={column.id} align={column.align} style={{color:column.id === "name" && 'blue', cursor:column.id === "name" && 'pointer'}} onClick={()=>{column.id === "name" && this.props.history.push(`/${REACT_BASE_URL}/auth/user/${row.id}`)}}>
																{column.format && typeof value === 'number'
																	? column.format(value)
																	: value}
															</TableCell>
														);
													})}
												</TableRow>
											);
										})}
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								rowsPerPageOptions={[10, 25, 50, 100]}
								component="div"
								count={rows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onChangePage={()=>{this.handleChangePage()}}
								onChangeRowsPerPage={()=>{this.handleChangeRowsPerPage()}}
							/>
						</Paper>
					</div>
				}
			/>
		);
	}
}

export default connect(null, null)(withStyles(styles)(List))
