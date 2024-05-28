"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { POLICY_CONTRACT_ADDRESS } from '@/utils/constantValues';
import { policyContractAbi } from '@/utils/policyContractABI';
import { useRouter } from 'next/navigation';

const ContractContext = createContext();

export const useContract = () => {
  return useContext(ContractContext);
};

export const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState(null);
  const router = useRouter()

  useEffect(() => {
    const initProvider = async () => {
    if (window.ethereum !== undefined) {
        console.log("Meta mask is not connected")
    } else {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner();
        const instance = new ethers.Contract(
          POLICY_CONTRACT_ADDRESS,
          policyContractAbi,
          signer
        );

        setContract(instance);
      } catch (error) {
        console.error('Error initializing contract: ', error);
        router.push("./error")
      }
    }
    };
    initProvider();
  }, []);

  return (
    <ContractContext.Provider value={contract}>{children}</ContractContext.Provider>
  );
};
