import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

type Props = {
  children: React.ReactNode;
};

const AdminRoute = ({ children }: Props) => {
  const { adminAuth } = useAppSelector((store) => store.profileManager);

  if (adminAuth) {
    return <div>{children}</div>;
  }

  return <Navigate to="/login" />;
};

export default AdminRoute;
