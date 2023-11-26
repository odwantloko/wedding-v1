import React, { useState, useEffect } from 'react';

const AccomHelper = ({ dataArray, maxLength, buttonText }) => {
  const [expanded, setExpanded] = useState(false);
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
            <div key={index} className="col-sm-6 col-md-3 col-lg-3">
                <br/>
            <div className="card">
                <h3><a href={item.link}
                        className="btn btn-custom btn-lg page-scroll"
                        >{item.title}
                        </a>
                    </h3>
                    <p> 
                    <a href={item.map}> {item.distance} </a>
                    <br/>
                    Contact no: {item.contact}
                    </p>
                    <img src={item.smallImage} className="img-responsive" alt={item.title} />{" "}
                </div>
           
            </div> 
            ))
            
          : 
          <></>
        }
      </ul>
      {dataArray.length > maxLength && (
        expanded? <br/> :
        <button onClick={handleToggle} className="btn btn-custom btn-lg page-scroll">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default AccomHelper;
