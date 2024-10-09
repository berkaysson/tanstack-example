import { QueryClient } from "@tanstack/react-query";

const queryClientOptions = {
  defaultOptions: {
    queries: {
      retry: 3,
    },
    mutations: {
      retry: 3,
    },
  },
};

export const queryClient = new QueryClient(queryClientOptions);
