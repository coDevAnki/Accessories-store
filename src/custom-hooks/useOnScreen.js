import { useEffect, useState } from "react";

const useOnScreen = (options = {}, once = true) => {
  const [visible, setVisible] = useState(null);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    let intersectionObserver = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        if (once) setVisible(true);
        else setVisible(entry[0].isIntersecting);
      }
    }, options);

    if (!!ref) {
      intersectionObserver.observe(ref);
    }
    return () => {
      if (!once && !!ref) {
        intersectionObserver.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [visible, setRef];
};

export default useOnScreen;
