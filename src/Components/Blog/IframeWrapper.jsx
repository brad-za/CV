import React from "react";
import Gist from "react-gist";
const IframeWrapper = ({ id }) => <Gist id={id.split("/")[1]} />;
export default IframeWrapper;
