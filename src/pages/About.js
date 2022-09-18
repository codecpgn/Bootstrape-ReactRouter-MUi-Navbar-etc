import React, { useState } from 'react'

const About = () => {

  const [initvalue,updatevalue] = useState(0);

  const incrNum = () =>{
    
    updatevalue(initvalue + 1);

  };
const decrNum =()=>{
  if(initvalue>0){
  updatevalue(initvalue -1 );
  }
  else{
    initvalue(0);
  }
};

  return (
    <div>
      <div className="alert alert-warning" role="alert">
 <h1>About page</h1>
 <h2>{initvalue}</h2>
<div className="d-grid">
<button type="button" onClick={incrNum} class="btn btn-primary btn-sm">Incr(++)</button>
</div>

<br/>
<div className="d-grid">
          <button type="button" onClick={decrNum} className="btn btn-primary">Decr(--)</button>
</div>

    </div>
    </div>
  )
}

export default About
