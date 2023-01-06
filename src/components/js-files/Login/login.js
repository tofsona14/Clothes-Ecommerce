import React from 'react'

const loginToShow = () => {
    return (
        console.log('hello')
    )
}
function Login() {
    return(
        <div>
            <h1>
                i am the Login Component
            </h1>
            <button onClick={loginToShow}>Login</button>
        </div>
    )
}

export default Login