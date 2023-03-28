import React, { useState } from "react";

function LoginForm({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
    return (
        <form onSubmit={handleSubmit} className="davy">
            <label htmlFor="username" ></label>
                <input
                type="text"
                 id="username"
                autoComplete="off"
                value={username}
                placeholder="Username"
                className="tryme"
                maxLength="20"
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password"></label>
                <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                placeholder="Password"
                className="tryme"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button variant="fill" color="primary" type="submit" className="btn-primary">
                {isLoading ? "Loading..." : "Login"}
            </button>
            <div>
                {errors.map((err) => (
                    <p className="whitey" key={err}>{err}</p>
                ))}
            </div>

        </form>
    )
}
export default LoginForm