import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalSpinner } from "@/components";
import "./App.css";
import Router from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalSpinner />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
