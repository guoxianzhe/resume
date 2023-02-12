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
    {
      showAnimationWithCss: boolean;
      text: string;
      chatBoxLottieHideDelay: number;
    }[]
  >([chatBoxResumeList[0]]);
  const [chatBoxIndex, setChatBoxIndex] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      setIsFirstLoad(false);
    }, timerInstace.firstLoadingDelay);
    const element = document.querySelector("#root");
    const resizeObserver = new ResizeObserver((entries) => {
      window.scrollTo(0, entries[0].target.clientHeight);
    });
    if (element instanceof HTMLElement) {
      resizeObserver.observe(element);
    }
    return () => {
      if (element instanceof HTMLElement) {
        resizeObserver.unobserve(element);
      }
    };
  }, []);
  const intervalDelay = () => {
    if (isFirstLoad) {
      return (
        chatBoxResumeList[chatBoxIndex - 1].chatBoxLottieHideDelay +
        timerInstace.firstLoadingDelay
      );
    }
    if (isRunning) {
      return (
        chatBoxResumeList[chatBoxIndex - 1].chatBoxLottieHideDelay +
        (chatBoxResumeList[chatBoxIndex - 1].showAnimationWithCss
          ? 0
          : chatBoxResumeList[chatBoxIndex - 1].text.length *
            timerInstace.typingSpeed) +
        timerInstace.typingDelay
      );
    }
    return null;
  };
  useInterval(() => {
    currentChatBoxResumeList.push(chatBoxResumeList[chatBoxIndex]);
    setChatBoxIndex(chatBoxIndex + 1);
    setCurrentChatBoxResumeList(currentChatBoxResumeList);
    if (chatBoxIndex >= chatBoxResumeList.length - 1) {
      setIsRunning(false);
    }
  }, intervalDelay());
  const closeLoading = () => {
    setShowLoading(false);
  };
  // useEffect(() => {
  //   const scrollTop = document.documentElement.scrollTop
  //     ? document.documentElement.scrollTop
  //     : document.body.scrollTop;
  //   const element =
  //     document.getElementsByClassName("Chat-box")[chatBoxIndex - 1];
  //   if (element instanceof HTMLElement) {
  //     // setTimeout(() => {
  //     // console.log(scrollTop, element.offsetTop, element.scrollHeight);
  //     // window.scrollTo(0, element.offsetTop);
  //     // }, timerInstace.typingDelay);
  //     setTimeout(() => {
  //       window.scrollTo(0, scrollTop);
  //     }, timerInstace.typingDelay + chatBoxResumeList[chatBoxIndex - 1].chatBoxLottieHideDelay);
  //   }
  // }, [chatBoxIndex]);
  return (
    <div className="Home">
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
          <div className="chat-container" key={item.text}>
            <ChatBox itm={item} className="left" />
          </div>
        ))
      )}
    </div>
  );
}

export default memo(Home);
