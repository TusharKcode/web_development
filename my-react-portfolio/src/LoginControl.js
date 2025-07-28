import { useState } from "react";

function LoginControl(){
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    
    const toogleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return(
        <div style={{ marginTop: "20px" }}>
            {isLoggedIn ? (
                <>
                    <h3>Welcome back, Tushar</h3>
                    <button onClick={toogleLogin}>Logout</button>
                </>
            ) : (
                <>
                    <h3>Please Log In to continue</h3>
                    <button onClick={toogleLogin}>Login</button>
                </>
            )}
        </div>
    );
}

export default LoginControl;