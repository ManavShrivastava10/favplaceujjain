import React from "react";

const Imageholder = ({ url, description, title }) => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 d-flex flex-column m-5'>
      <div style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center", height: '300px' }} ></div>
      <div className="text-center"> 
        <p id="titleh">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Imageholder;
