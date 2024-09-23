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
    //  const popup = window.open('https://jup.ag/swap/SOL-YAKU', '_blank', 'noopener,noreferrer');
    //  window.open('https://www.example.com', 'newWindow', 'width=800,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
    window.open('https://jup.ag/swap/SOL-USDC', 'newWindow', 'width=800,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
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

