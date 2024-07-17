"use client";

import { signIn, signOut } from "next-auth/react";

export const AuthButton = () => {
  return <button onClick={() => signIn()}>Login</button>;
};

export const Logout = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};
