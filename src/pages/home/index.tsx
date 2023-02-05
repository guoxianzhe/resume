import "./index.scss";
import React, { memo, useEffect, useState } from "react";
import { LottieElement } from "../../components/LottieElement";
import loadingJson from "../../assets/json/loading.json";
import { chatBoxResumeList, timerInstace } from "../../constants/constants";
import { ChatBox } from "../../components/ChatBox";
import { useInterval } from "../../utils/interval";

function Home() {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [currentChatBoxResumeList, setCurrentChatBoxResumeList] = useState<
    string[]
  >([chatBoxResumeList[0]]);
  const [chatBoxIndex, setChatBoxIndex] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      setIsFirstLoad(false);
    }, timerInstace.firstLoadingDelay);
  }, []);
  const intervalDelay = () => {
    if (isFirstLoad) {
      return (
        timerInstace.chatBoxLottieHideDelay + timerInstace.firstLoadingDelay
      );
    }
    if (isRunning) {
      return timerInstace.chatBoxLottieHideDelay;
    }
    return null;
  };
  useInterval(() => {
    currentChatBoxResumeList.push(chatBoxResumeList[chatBoxIndex]);
    setChatBoxIndex(chatBoxIndex + 1);
    setCurrentChatBoxResumeList(currentChatBoxResumeList);
    if (chatBoxIndex >= chatBoxResumeList.length - 2) {
      setIsRunning(false);
    }
  }, intervalDelay());
  const closeLoading = () => {
    setShowLoading(false);
  };
  return (
    <div className="App">
      {showLoading ? (
        <div
          className="loading-container"
          onClick={closeLoading}
          aria-hidden="true"
        >
          <LottieElement
            animationData={loadingJson}
            className="loading-lottie"
          />
        </div>
      ) : (
        currentChatBoxResumeList.map((item) => (
          <div className="chat-container" key={item}>
            <ChatBox text={item} className="left" />
          </div>
        ))
      )}
    </div>
  );
}

export default memo(Home);
