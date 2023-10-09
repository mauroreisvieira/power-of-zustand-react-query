import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Pages
import { Users } from './Users';

const queryClient = new QueryClient();

function App(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
