import React from "react";

// Add react-live imports you need here
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
let components = {};

if (ExecutionEnvironment.canUseDOM) {
  components = require("@incubator/core/dist");
}
const ReactLiveScope = {
  React,
  ...React,
  ...components,
};

export default ReactLiveScope;
