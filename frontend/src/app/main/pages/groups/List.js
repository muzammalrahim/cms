import React, {Component} from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { Button, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper, IconButton } from '@material-ui/core';
import { fade, withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {list} from '../../../helper/api';
import  SearchIcon from '@material-ui/icons/Search';



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
			width: '30ch'
		}
	}
});

class List extends Component {
	constructor(props){
		super(props);
		this.state={
			groupList:[],
			page:0,
			rowsPerPage:25,
			columns : [
				{ id: 'group', label: 'GroupName', minWidth: 170 },
			],
			rows: []
		}
		this.getGroups();
	}
	getGroups(){
		list('adm/auth/group/').then((response)=>{
			this.setState({groupList:response.data})
			let rows = [];
			response.data.map((row)=>{
				rows.push(this.createData(row.GroupName))
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
	createData(name) {
		return { name};
	}
	render(){
		const { classes } = this.props;
		let {groupList, rowsPerPage, page, rows, columns} = this.state;
		return (
			<FusePageCarded
				classes={{
					root: classes.layoutRoot
				}}
				header={
					<div className="py-24">
						<h4>Group</h4>
					</div>
				}
				contentToolbar={
					<div className="px-24" style={{width:'100%'}}>
						<span>Group List</span>
						<InputBase
						style={{margin:'2pc' }}
							className={classes.input}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							placeholder="Search Groups"
							inputProps={{ 'aria-label': 'search groups' }}
						/>
						<IconButton type="submit" className={classes.iconButton} aria-label="search">
							<SearchIcon />
						</IconButton>
						<span style={{float:'right', marginTop:'30px'}}>
						<Button variant="contained" color="primary" justifyContent="flex-end" onClick={()=>{this.props.history.push('/admin/auth/group/add')}}>
							Add Group
						</Button>
						<Button variant="contained" color="primary" justifyContent="flex-end" style={{marginLeft:'5px'}}>
							Delete Selected
						</Button>
						</span>
					</div>
				}
				content={
					<div className="p-24">
						<Paper className={classes.root}>
							<TableContainer className={classes.container}>
								<Table stickyHeader aria-label="sticky table">
									<TableHead>
										<TableRow>
											{columns.map(column => (
												<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
													{column.label}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
											return (
												<TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
													{columns.map(column => {
														const value = row[column.id];
														return (
															<TableCell key={column.id} align={column.align}>
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
