import React from 'react'
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react"
import BackToHome from "../BackToHome"

function Login() {
    const domain = "dev-x8z8kod9.us.auth0.com";
    const client = "H2SQE8i87Ak3qC3ZziajBZLThF9PUTKm";
  return (
    <div className='h-screen gap-3 bg-gray-800 text-white flex flex-col items-center justify-center'>
    <Auth0Provider
    domain={domain}
    clientId={client}
    redirectUri="https://beginner-pi.vercel.app/Login"
    >
        <Profile />
        <LoginButton />
        <LogoutButton />
    </Auth0Provider>
    <BackToHome />
    </div>
  )
}

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const { isLoading } = useAuth0()

    if (isLoading) return <div>Loading...</div>

    return (
        !isAuthenticated && (
        <button className='w-[20vw] h-[10vh] bg-gray-900 rounded-md hover:scale-110 transition-all' onClick={() => loginWithRedirect()}>
            Log In
        </button>
    )
    )
}

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    
    return (
        isAuthenticated && (
        <button className='w-[20vw] h-[10vh] bg-gray-900 rounded-md hover:scale-110 transition-all' onClick={() => logout()}>
            Log out
        </button>
    )
    )
}

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div className='flex items-center justify-center flex-col gap-3'>
            <img src={user.picture} alt={user.name} className="w-[7rem] h-[7rem] rounded-full" />
            <h2 className='font-thin text-xl'>{user.name}</h2>
            <p className='font-thin text-xl'>{user.email}</p>
        </div>
    )
    )
}

export default Login