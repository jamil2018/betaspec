import { ReactNode } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { store } from "../../data/client/store";

interface Props {
  children?: ReactNode;
  reduxStore?: Store;
}

const ReduxClientWrapper = ({ children, reduxStore = store }: Props) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};

export default ReduxClientWrapper;
