import { Card, ButtonGroup, Button } from '@material-ui/core';
import React from 'react';
import TransferList from './grids';
// import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<h3>Add group</h3>
			<Card>
				<form>
					<h3>Name:</h3>
					<input type="text" name="name" />
					<h6>PERMISSIONS:</h6>
					<div display="inline">
						<TransferList />
					</div>{' '}
					<hr />
					<ButtonGroup variant="text" color="" align="right" aria-label="text primary button group">
						<Button>Save and add another</Button>
						<Button>Save and continue editing</Button>
						<Button>Save</Button>
					</ButtonGroup>
				</form>
			</Card>
		</div>
	);
}
