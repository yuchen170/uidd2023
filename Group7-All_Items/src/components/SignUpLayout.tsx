import React, { FC, ReactNode } from "react";
type Props = {
    children: ReactNode;
  };

const SignUpLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>{children}</div>
    </div>
  );
};

export default SignUpLayout;