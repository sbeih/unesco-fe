import * as React from "react";
import axios, { AxiosInstance } from "axios";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const getAxiosClient = () => {
  const axiosClient = axios.create({
    baseURL: API_BASE,
  });

  return axiosClient;
};

export const AxiosContext = React.createContext<AxiosInstance>(axios);

export const AxiosProvider: React.FC = ({ children }) => {
  const axiosClient = getAxiosClient();
  return (
    <AxiosContext.Provider value={axiosClient}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxiosClient = () => {
  const axiosClient = React.useContext(AxiosContext);

  return axiosClient;
};

export type AxiosClient = AxiosInstance;
