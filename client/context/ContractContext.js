"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { POLICY_CONTRACT_ADDRESS } from '@/utils/constantValues';
import { policyContractAbi } from '@/utils/policyContractABI';
import { redirect } from 'next/dist/server/api-utils';


const ContractContext = createContext();

export const useContract = () => {
  return useContext(ContractContext);
};

export const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initProvider = async () => {
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
        redirect("./error")
      }
    };
    initProvider();
  }, []);

  return (
    <ContractContext.Provider value={contract}>{children}</ContractContext.Provider>
  );
};
