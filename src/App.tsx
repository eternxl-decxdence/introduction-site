import "./styles/global.css";

import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import useBreakpoint from "./components/hooks/useBreakpoint";
import Mobile from "./components/layout/Mobile";
import Desktop from "./components/layout/Desktop";

function App() {
  const isDesktop = useBreakpoint(1280);
  return (
    <Provider store={store}>{isDesktop ? <Desktop /> : <Mobile />}</Provider>
  );
}

export default App;
