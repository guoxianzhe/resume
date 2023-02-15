import React, { memo, useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
import "./index.scss";

export interface LottieProps extends React.ComponentProps<any> {
  className: string;

  hidden?: boolean;
  animationData: object;
  click?: any;
  children?: React.ReactNode;
}
function LottieElement({
  className,
  hidden,
  animationData,
  click,
  children,
}: LottieProps) {
  const container = useRef<HTMLDivElement | any>(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });
  }, [animationData]);
  return (
    <div
      className={`${className} ${hidden ? "hide" : ""}`}
      ref={container}
      onClick={click}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
LottieElement.defaultProps = {
  hidden: false,
  click: null,
  children: null,
};

export default memo(LottieElement);
