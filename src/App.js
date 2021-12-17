import './App.css';
import { connect } from 'react-redux';
import { setLogout, setLogin } from  './redux/reducers/loginReducer'

function App(props) {
  const handleLogout = () => {
    console.log({props})
    props.logout()
  }

  const handleLogin = () => {
    props.login({
      username: 'Gaston',
      token: 'asdftoken12345asdf'
    })
  }

  return (
    <div className="App">
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleLogout()}>Logout</button>
      <p>User is loggedIn: {props.loginReducer.username}</p>
      
    </div>
  );
}

const mapStateToProps =  (state) => {
  console.log(state)
  return {
    loginReducer: state.loginReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(setLogout()),
    login: (user) => dispatch(setLogin(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
