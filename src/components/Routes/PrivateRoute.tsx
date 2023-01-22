import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const { auth } = useAppSelector((store) => store.profileManager);

  if (auth) {
    return <div>{children}</div>
  }

  return <Navigate to="/login" />
};

export default PrivateRoute;
