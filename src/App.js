import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "components";
import store from "store";
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
