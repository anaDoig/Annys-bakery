import { useCallback, useContext } from "react";
import Context from "./userContext";

const useUser = () => {
    const {jwt, setJWT} = useContext(Context)

    const login = useCallback(() => {
        setJWT('test')
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        login 
    }

}

export default useUser;