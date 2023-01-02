import React from "react";
import LoadingStyle from "./Loading.module.css";
import styled, {keyframes} from "styled-components";
const Loading = () => {
  return (
    <div className={LoadingStyle.div}>
        <div className={LoadingStyle.animation}></div>
    </div>
  );
};

export default Loading;
