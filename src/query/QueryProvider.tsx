import { type ReactNode } from "react";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";



interface QueryProps{
    children:ReactNode;
}


const QueryProvider=({children}:QueryProps)=>{

    const queryClient=new QueryClient();

    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}



export default QueryProvider;