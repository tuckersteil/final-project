import React, { useState } from "react";

function SignUpForm({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
            email: email
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user.bookings));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return (
        <form onSubmit={handleSubmit} className="davy">
            <label htmlFor="username"></label>
                <input 
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                placeholder="Username"
                className="trymee"
                onChange={(e) => setUsername(e.target.value)}
                />
            <label htmlFor="password"></label>
                <input 
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                className="trymee"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                />
            <label htmlFor="password"></label>
                <input 
                type="password"
                id="password_confirmation"
                placeholder="Password Confirmation"
                className="trymeee"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
                />
            <label htmlFor="email"></label>
                <input 
                type="text"
                id="email"
                autoComplete="off"
                value={email}
                placeholder="Email"
                className="trymeee"
                onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
            <button variant="fill" color="primary" type="submit" className="btn-primary">
                {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <div>
                {errors.map((err) => (
                    <p key={err} className="whitey">{err}</p>
                ))}
            </div>
        </form>
    )
}
export default SignUpForm;