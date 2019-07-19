import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "./actions";

const initialState = {
  counter: 0,
  status: "INITIAL",
  repos: []
};

const HomeStore = useGlobalHook(React, initialState, actions);

export default HomeStore;
