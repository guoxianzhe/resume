import "./index.scss";
import React, { memo, useEffect, useState, useRef, useMemo } from "react";
import { LottieElement } from "../LottieElement";
import chatBoxJson from "../../assets/json/chatbox.json";
import selfAvatar from "../../assets/img/self.jpeg";
import { timerInstace } from "../../constants/constants";

export interface ChatboxProps extends React.ComponentProps<any> {
  className: string;

  text: string;
  onClick?: () => unknown | void;
}
function ChatBox({ className, text, onClick }: ChatboxProps) {
  const [isShowLottie, setIsShowLottie] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowLottie(false);
    }, timerInstace.chatBoxLottieHideDelay);
  }, [text]);
  return (
    <div className={`Chat-box ${className}`}>
      <img className="avatar" src={selfAvatar} alt="郭贤哲" />
      {isShowLottie ? (
        <LottieElement
          animationData={chatBoxJson}
          className="chat-box-lottie"
        />
      ) : (
        <div className="text-container">
          <span>{text}</span>
        </div>
      )}
    </div>
  );
}
ChatBox.defaultProps = {
  onClick: null,
};

export default memo(ChatBox);
