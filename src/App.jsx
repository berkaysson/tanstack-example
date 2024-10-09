import "./App.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { Posts } from "./components/Posts";
import { queryClient } from "./api/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
      <ReactQueryDevtools initialIsOpen={false} position="top" />
    </QueryClientProvider>
  );
}

export default App;
