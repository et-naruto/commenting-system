import "./App.css";
import { useState } from "react";

function App() {
  const [gmail, setGmail] = useState("")
  const [password, setPsw] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
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
    </div>

    
  )
}

export default App;
