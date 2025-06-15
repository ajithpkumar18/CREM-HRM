import { useRecoilState, useRecoilValue } from "recoil";
import { Navigate } from "react-router-dom";
import { authState } from "../../data/atom";
import { JSX } from "react";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const user = useRecoilValue(authState);
    console.log(user);
    return user ? children : <Navigate to="/signin" replace />;
}

export const RedirectIfLoggedIn = ({ children }: { children: JSX.Element }) => {
    const user = useRecoilValue(authState);
    return user ? <Navigate to="/dashboard" replace /> : children;
}

