import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <main>
      <div>This page is protected and must have a logout button</div>
      <div>{JSON.stringify(session)}</div>
      <LogoutButton>Logout</LogoutButton>
    </main>
  );
};

export default DashboardPage;
