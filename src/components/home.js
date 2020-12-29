import { pages } from '../constants';
import { changeRoute } from '../helper';

function Home() {
	return (
		<div className="home">
			<div>
				{
					pages.map(page => {
						return (
							<button  key={page.route} onClick={() => changeRoute(page.route, page.label)}>
								{page.label}
							</button>
						)
					})
				}
			</div>
		</div>
	)
}

export default Home;
