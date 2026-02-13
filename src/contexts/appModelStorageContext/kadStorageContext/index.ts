import { createContext } from "react";
import KadStorageManager from "@/storage/appModelsStorage/KadStorageManager";

const KadStorageContext = createContext<KadStorageManager>(new KadStorageManager());

export default KadStorageContext;