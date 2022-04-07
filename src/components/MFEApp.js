import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../scss/pages/MFEApp.scss";

export default () => {
  const ref = useRef(null);
  //const history = useHistory();

  useEffect(() => {
    // const { onParentNavigate } = mount(ref.current);
    //history.listen(onParentNavigate);
  }, []);

  return (
    <div className="micro-frontend" ref={ref}>
      <h1 className="micro-frontend__title">Micro Front Ends</h1>
      <p className="micro-frontend__description">
        Click one of the framework icons above to see their respective
        components
      </p>
    </div>
  );
};
