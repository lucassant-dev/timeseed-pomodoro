import type Kad from "@/models/Kad";
import type { AppModelStorageManager } from "@/storage/appModelsStorage/AppModelStorageHelper";
import AppModelStorageHelper from "@/storage/appModelsStorage/AppModelStorageHelper";

export default class KadStorageManager implements AppModelStorageManager<Kad> {
    private readonly storageHelper = new AppModelStorageHelper("userKads");
    
    public loadAll = (): Kad[] => {
        return this.storageHelper.loadAll() as Kad[];
    }

    public save = (kad: Kad): void => {
        this.storageHelper.save(kad);
    }

    public edit = (kadProperties: Partial<Kad> & { id: string }): void => {
        this.storageHelper.edit(kadProperties);
    }

    public remove = (kad: Kad): void => {
        this.storageHelper.remove(kad);
    }

    public clearStorage = (): void => {
        this.storageHelper.clearStorage();
    }
}