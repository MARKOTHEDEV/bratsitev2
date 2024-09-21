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
    <div>
      <div id="integrated-terminal" style={{
  width: "600px",height: "500px"
}}/>
    </div>
  );
};

export default WidgetTerminal;