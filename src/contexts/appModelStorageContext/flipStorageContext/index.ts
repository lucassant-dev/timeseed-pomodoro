import { createContext } from "react";
import FlipStorageManager from "@/storage/appModelsStorage/FlipStorageManager";

const FlipStorageContext = createContext<FlipStorageManager>(new FlipStorageManager());

export default FlipStorageContext;