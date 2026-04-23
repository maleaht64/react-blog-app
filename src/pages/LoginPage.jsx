import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function LoginPage() {
    const {login} = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(username, password);

        if(success) {
            setError("");
            navigate("/posts");
        } else {
            setError("Please enter both username and password.");
        }
        
    }
   return (
       <div>
           <h2>Login</h2>   
              <form onSubmit={handleSubmit}>   
                     <div>  
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
              </form>
       </div>
   );
}

export default LoginPage;