import RoutesApp from "./routes";

import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
   <ChakraProvider>
     <RoutesApp/>
   </ChakraProvider>
  );
}