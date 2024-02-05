import "./styles.css";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Airlines from "./components/Airlines";
import airlines_information from "./airlines_information";

function createAirline(airline) {
	return (
		<div>
			<hr />
			<Airlines key={Math.random()} site={airline.site} logoURL={airline.logoURL} name={airline.name} />
		</div>
	);
}

function App() {
	return (
		<div>
			<div className="header">
				<div className="logo">
					<Logo />
				</div>
				<div>
					<Search />
				</div>
			</div>
			<div style={{ margin: "30px" }}>{airlines_information.map(createAirline)}</div>
		</div>
	);
}

export default App;
