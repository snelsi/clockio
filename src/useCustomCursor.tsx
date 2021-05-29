import { useEffect } from "react";
import kursor from "kursor";

const useCustomCursor = () => {
  useEffect(() => {
    new kursor({
      type: 1,
      color: "#fff",
      removeDefaultCursor: true,
    });
  }, []);
};

export default useCustomCursor;
