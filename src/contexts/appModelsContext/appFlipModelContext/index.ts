import { createContext, Dispatch, SetStateAction } from "react";
import type Flip from "@/models/Flip";

export type AppFlipModelContextType = {
    flipValues: Flip,
    setFlipValues: Dispatch<SetStateAction<Flip>>
};

const AppFlipModelContext = createContext<AppFlipModelContextType>({} as AppFlipModelContextType);

export default AppFlipModelContext;