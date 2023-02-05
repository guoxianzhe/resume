import React, { useState, useEffect, useRef } from "react";

export function useInterval(callback: any, delay: any) {
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => null;
  }, [delay]);
}
