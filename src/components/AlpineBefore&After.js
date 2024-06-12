import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import Before from "../Assets-TP-Alpine-master/images/sources-homepage/conception/alpine-bone.jpg";
import After from "../Assets-TP-Alpine-master/images/sources-homepage/conception/alpine-skin.jpg";


const AlpineBeforeAfter = () => {
    const [hasError, setHasError] = useState(false);
  
    const handleOnError = (error, errorInfo) => {
      // You can handle errors here
      console.log("Error occurred:", error);
      setHasError(true);
      // You may also want to log errorInfo for more details about the error
      console.log("Error Info:", errorInfo);
    };
  
    return (
      <div className="contentWrapper">
        {hasError ? (
          <div>Oops! Something went wrong.</div>
        ) : (
          <ReactCompareImage
            leftImage={Before}
            rightImage={After}
            onError={handleOnError}
          />
        )}
      </div>
    );
  };
  
  export default AlpineBeforeAfter;