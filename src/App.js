import './App.css';
import { pages } from './constants';

function App() {
	return (
		<div className="App">
			<div>
				{
					pages.map(page => {
						return (
							<button>
								{page}
							</button>
						)
					})
				}
			</div>
		</div>
	)
}

export default App;
