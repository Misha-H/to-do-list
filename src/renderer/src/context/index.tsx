import { createContext } from 'react';

import { data } from '../data';

import type { FC, PropsWithChildren } from 'react';

export const DataContext = createContext(data);

export const DataContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
