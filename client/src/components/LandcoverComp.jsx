import React from 'react'

export default function LandcoverComp({to}){
    
    React.useEffect(() => {
        window.location.href = to;
      }, []);
      console.log(to)
      return null;
}