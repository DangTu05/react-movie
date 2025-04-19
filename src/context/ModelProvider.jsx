import { useEffect, useMemo, useState } from "react";
import PropTypes from 'prop-types';
import { ModalContext } from "./ModalContext";

const ModelProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShow]);

  const openPopup = (content) => {
    setIsShow(true);
    setContent(content);
  };
  const value = useMemo(
    () => ({
      setIsShow,
      setContent,
      openPopup,
    }),
    [],
  );
  
  return (
    <ModalContext.Provider value={value}>
      {children}

      {isShow && (
        <div className="fixed inset-0">
          <button
            className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
            onClick={() => setIsShow(false)}
          >
            {content}
          </button>
        </div>
      )}
    </ModalContext.Provider>
  );
};

ModelProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModelProvider;
