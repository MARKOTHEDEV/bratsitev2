import { useEffect } from "react";

const WidgetTerminal = () => {

  useEffect(()=>{
    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      endpoint: "https://api.mainnet-beta.solana.com",
      
    });
    
  },[])

  return (
    <div
    onClick={e=>{
      e.stopPropagation()
      e.preventDefault()
     const popup = window.open('https://jup.ag/swap/SOL-YAKU', '_blank', 'noopener,noreferrer');
    }}
    >
      <div
    
    >
      <div id="integrated-terminal" style={{
  width: "600px",height: "500px"
}}/>
    </div>

    <div id="openMiniBrowser" />
    </div>
  );
};

export default WidgetTerminal;