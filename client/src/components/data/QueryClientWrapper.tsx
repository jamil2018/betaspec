import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

const queryClient = new QueryClient();

interface Props {
  children?: ReactNode;
  initialIsOpen?: boolean;
}

const QueryClientWrapper = ({ children, initialIsOpen = false }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={initialIsOpen} />
    </QueryClientProvider>
  );
};

export default QueryClientWrapper;
