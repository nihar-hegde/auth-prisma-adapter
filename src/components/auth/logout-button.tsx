"use client";

import { logout } from "@/lib/actions/logout";
import { ReactNode } from "react";

interface LogoutButtonProps {
  children?: ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
