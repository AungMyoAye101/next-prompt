"use client";

import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
