import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Validation from "./components/validation";
import store from "./store/store";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Provider store={store}>
          <Validation />
        </Provider>
      </div>
    </div>
  );
};

export default App;
