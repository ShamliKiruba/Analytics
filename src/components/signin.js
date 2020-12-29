import { changeRoute } from '../helper.js';

function Signin() {
	return (
		<div className="signin">
			<h3>SIGNIN</h3>
			<div>
				<label>Username</label>
				<input type="text" />
			</div>
			<div>
				<label>Password</label>
				<input type="password" />
			</div>
            <button onClick={() => changeRoute('home')}>Submit</button>
		</div>
	)
}

export default Signin;