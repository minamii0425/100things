import { ReactNode, useContext } from "react";
import { SessionContext } from "../pages/_app";
import Header from "../pages/Header";

export interface LayoutProps {
  children: ReactNode;
  username?: string;
}

const Layout = (props: LayoutProps) => {
  // const session = useContext(SessionContext);
  // console.log(`Layoutから見たsession: ${session}`);

  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
