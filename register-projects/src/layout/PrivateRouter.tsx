import { Navigate } from "react-router-dom"

export function PrivateRouter(){
    
    const user = false
    
    return (
        <>
            {!user && <Navigate to='/login'/>}
        </>
    )
}