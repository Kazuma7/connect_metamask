import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [account, setAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [metaMaskFlag, setMetaMaskFlag] = useState(false);

  useEffect(() => {
    const tmpFlag = window.ethereum && window.ethereum.isMetaMask;
    setMetaMaskFlag(tmpFlag);
  }, []);

  const connectWallet = () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => {
        setAccount(result[0]);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="App">
      <div>{account}</div>
      <div>
        {account ? (
          <button>Connected</button>
        ) : (
          <button onClick={connectWallet}>Connected Wallet</button>
        )}
      </div>
    </div>
  );
};

export default App;
