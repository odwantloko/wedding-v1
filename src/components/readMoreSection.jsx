import React, { useState, useEffect } from 'react';

const ReadMoreSection = ({ dataArray, maxLength, buttonText }) => {
  const [expanded, setExpanded] = useState(window.innerWidth > 600);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
      if (window.innerWidth <= 600) {
        setExpanded(false);
      }else{
        setExpanded(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <ul>
        {expanded
          ? dataArray.map((item, index) => (
            <div key={`${item.name}-${index}`} className="col-md-12">
                <div className="registry">
                <div className="registry-content">
                <div className="registry-meta"><h3>{item.name}</h3> </div>
                    <p>{item.text}</p>

                </div>
                </div>
            </div>
            ))
          : dataArray.slice(0, maxLength).map((item, index) => (
            <div key={`${item.name}-${index}`} className="col-md-12">
                <div className="registry">
                <div className="registry-content">
                <div className="registry-meta"><h3>{item.name}</h3> </div>
                    <p>{item.text}..</p>

                </div>
                </div>
            </div>

            ))}
      </ul>
      {isSmallScreen && dataArray.length > maxLength && (
        expanded? <br/> :
        <button onClick={handleToggle} className="btn btn-custom btn-lg page-scroll">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ReadMoreSection;
