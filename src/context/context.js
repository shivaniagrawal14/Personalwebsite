import React from 'react';

const PortfolioContext = React.createContext({
  contact: {
    email: 'kutukmu@gmail.com',
  },
});

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
