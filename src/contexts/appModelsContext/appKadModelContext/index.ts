import { createContext, Dispatch, SetStateAction } from "react";
import type Kad from "@/models/Kad";

export type AppKadModelContextType = {
    kadValues: Kad,
    setKadValues: Dispatch<SetStateAction<Kad>>  
};


const AppKadModelContext = createContext<AppKadModelContextType>({} as AppKadModelContextType);

export default AppKadModelContext;