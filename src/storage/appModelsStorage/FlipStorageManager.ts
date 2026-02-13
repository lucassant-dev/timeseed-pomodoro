import type Flip from "@/models/Flip";
import type { AppModelStorageManager } from "@/storage/appModelsStorage/AppModelStorageHelper";
import AppModelStorageHelper from "@/storage/appModelsStorage/AppModelStorageHelper";

export default class FlipStorageManager implements AppModelStorageManager<Flip> {
    private readonly storageHelper = new AppModelStorageHelper("userFlips");
    
    public loadAll(): Flip[] {
        return this.storageHelper.loadAll() as Flip[];
    }

    public save(flip: Flip): void {
        this.storageHelper.save(flip);
    }

    public edit(flipProperties: Partial<Flip> & { id: string }): void {
        this.storageHelper.edit(flipProperties);
    }

    public remove(flip: Flip): void {
        this.storageHelper.remove(flip);
    }
}