import { useCallback, useEffect, useState } from "react";

export interface WindowSize {
  width: number | undefined,
  height: number | undefined
}

const useWindowSize = () => {
  const isClient = typeof window === "object";

  const getSize = useCallback(
    function () {
      return {
        height: isClient ? window.innerHeight : undefined,
        width: isClient ? window.innerWidth : undefined,
      };
    },
    [ isClient ]
  );

  const [ windowSize, setWindowSize ] = useState<WindowSize>(getSize);

  useEffect(() : any => {
    if (!isClient) {
      return false;
    }

    const handleResize = () : void  => {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ getSize, isClient ]);

  return windowSize;
};

export default useWindowSize