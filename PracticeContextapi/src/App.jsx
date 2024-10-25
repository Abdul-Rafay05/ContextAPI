import UserContextProvider from "./context/UserContextProvider"
import Login from "./component/login"
import Profile from "./component/Profile"
function App() {
  return (
    <UserContextProvider>
      <h1>Abdul Rafay</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
