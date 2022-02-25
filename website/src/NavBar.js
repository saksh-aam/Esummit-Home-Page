import React from 'react'
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand,
    Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
function App() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div style={{
			display: 'block', width:"100%", padding: 30
		}}>
			<Navbar  expand='md'>
				<NavbarBrand href="/">E-SUMMIT'22</NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} id="togglebutton" >=</NavbarToggler>
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="#">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Team</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Events</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Speaker</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Sponsors</NavLink>
						</NavItem>
					</Nav>
                </Collapse>
                <Button id='registration'>Register</Button>
			</Navbar>
		</div >
	);
}

export default App;
