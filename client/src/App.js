import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
	return (
		<Box>
			<Navbar />
			<Stack direction="row" spacing={2} justifyContent="flex-start">
				<Sidebar />
				<Main />
			</Stack>
		</Box>
	);
}

export default App;
