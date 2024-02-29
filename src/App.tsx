import SignIn from "./components/SignIn";
import TodoList from "./components/TodoList";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/todo" element={<TodoList />} />
			</Routes>
			<GlobalStyle />
		</BrowserRouter>
	);
}

export default App;
