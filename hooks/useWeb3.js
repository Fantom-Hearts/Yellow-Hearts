import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

const injector = new InjectedConnector({
  supportedChainIds: [Number(process.env.NEXT_PUBLIC_CHAIN_ID)],
});

const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);

  const {
    active,
    activate: web3Activate,
    deactivate,
    account,
  } = useWeb3React();

  const activate = async () => {
    try {
      await web3Activate(injector);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      setWeb3(new ethers.providers.Web3Provider(window.ethereum, "any"));
    } else {
      toast.error("Please install MetaMask", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored",
      });
    }
  }, []);

  return {
    activate,
    deactivate,
    active,
    account,
    web3,
  };
};

export default useWeb3;
