import React from 'react'

const MainHeading = ({heading}) => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl text-carpetMoss">{ heading? heading:"Heading" }</h1>
    </div>
  );
}

export default MainHeading