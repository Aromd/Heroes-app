import AppRouter from "./routers/AppRouter"
import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext"
import { authReducer } from "./auth/authReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

const HeroesApp = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
      localStorage.setItem('user', JSON.stringify( user ) );
    }, [user])

    return (
      <div>
        <AuthContext.Provider value={{ user, dispatch }}>
          <AppRouter />
        </AuthContext.Provider>
      </div>
    );
}

export default HeroesApp
