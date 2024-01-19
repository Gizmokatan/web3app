// App.js
import React, { useEffect, useState } from "react";
import connectWeb3 from "./Web3Connector";

function App() {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      const web3Instance = await connectWeb3();
      setWeb3(web3Instance);
    };

    initWeb3();
  }, []);

  return (
    <div className="App">
      {web3 ? (
        <p>Connected to Web3</p>
      ) : (
        <p>Web3 not available or not connected</p>
      )}
    </div>
  );
}

export default App;
