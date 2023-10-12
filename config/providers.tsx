'use client';

import React, {createContext, useState} from 'react';
import {LayoutProps} from '../interfaces/pages';

export const CursorContext = createContext();

const Providers = ({children}: LayoutProps) => {
  const [cursor, setCursor] = useState({active: false});

  return (
    // @ts-ignore
    <CursorContext.Provider value={[cursor, setCursor]}>
      {children}
    </CursorContext.Provider>

  );
};
export default Providers;
