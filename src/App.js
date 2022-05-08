import "./App.css";
import { useState } from "react";
import * as Realm from "realm-web";

function App() {
  const app = new Realm.App({ id: "application-0-nwkmi"});
  const [gmail, setGmail] = useState("")
  const [password, setPsw] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const user = await loginEmailPassword(gmail, password);
    console.log("Successfully logged in!", user);
  }

  async function loginEmailPassword(email, password) {
    // Create an anonymous credential
    const credentials = Realm.Credentials.emailPassword(email, password);
    try {
      // Authenticate the user
      const user = await app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      console.assert(user.id === app.currentUser.id);
      return user;
    } catch (err) {
      console.error("Failed to log in", err);
      alert("This account does not exist. Please register a new account before signing in.")
    }
  }
  
 
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <label>
              Enter your gmail:
              {/* <input
                className="input border-2 border-blue-500 bg-white text-gray-900 appearance-none rounded-md py-3 focus:outline-none"
                placeholder="Email"
                value={inputs.username || ""}
                onChange={handleChange}
                type="text"
                name="gmail"
              /> */}
              <input
                type="text"
                className="input border-2 border-blue-500 bg-white text-gray-900 appearance-none rounded-md py-3 focus:outline-none mt-3"
                name="gmail"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Enter your password:
              {/* <input
                className="input border-2 border-blue-500 bg-white text-gray-900 appearance-none rounded-md py-3 focus:outline-none mt-3"
                placeholder="Password"
                value={inputs.age || ""}
                onChange={handleChange}
                type="text"
                name="password"
              /> */}
              <input
                type="text"
                className="input border-2 border-blue-500 bg-white text-gray-900 appearance-none rounded-md py-3 focus:outline-none mt-3"
                name="password"
                value={password}
                onChange={(e) => setPsw(e.target.value)}
              />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          <a href="/register">Register a new account.</a>
    </div>

    
  )
}

export default App;
