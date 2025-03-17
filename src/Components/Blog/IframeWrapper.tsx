import React from "react";
import Gist from "react-gist";

interface IframeWrapperProps {
  id: string;
}

const IframeWrapper: React.FC<IframeWrapperProps> = ({ id }) => (
  <Gist id={id.split("/")[1]} />
);

export default IframeWrapper;
