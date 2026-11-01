import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeModeProvider } from "../helpers/themeMode";
import { TooltipProvider } from "./Tooltip";
import { SonnerToaster } from "./SonnerToaster";
import { ScrollToHashElement } from "./ScrollToHashElement";
import { AuthProvider } from "../helpers/useAuth";

const queryClient = new QueryClient({
   10	  defaultOptions: {
   11	    queries: {
   12	      staleTime: 60 * 1000, // 1 minute “fresh” window
   13	    },
   14	  },
   15	});
   16	
   17	export const GlobalContextProviders = ({
   18	  children,
   19	}: {
   20	  children: ReactNode;
   21	}) => {
   22	  return (
   23	    <QueryClientProvider client={queryClient}>
   24	      <ThemeModeProvider>
   25	        <ScrollToHashElement />
   26	        <TooltipProvider>
   27	          <AuthProvider>{children}</AuthProvider>
   28	          <SonnerToaster />
   29	        </TooltipProvider>
   30	      </ThemeModeProvider>
   31	    </QueryClientProvider>
   32	  );
   33	};
   34	
