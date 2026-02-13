import StorageError from "@/errors/StorageError";
import ErrorHandler from "@/utils/ErrorHandler";

export interface AppModelStorageManager<TAppModel> {
    loadAll(): TAppModel[];
    save(model: TAppModel): void;
    edit(model: Partial<TAppModel> & { id: string }): void;
    remove(model: TAppModel): void;
}


export default class AppModelStorageHelper<TAppModel extends { id: string }>
implements AppModelStorageManager<TAppModel> {
    constructor (private readonly STORAGE_KEY: string) {}
    
    public loadAll(): TAppModel[] {
            try {
                const models: string | null = localStorage.getItem(this.STORAGE_KEY);
    
                return models ? JSON.parse(models) : [];
            }

            catch(e: unknown) {
                console.log(ErrorHandler.handle(e));
                
                return [];
            }
        }

        public save(newModel: TAppModel): void {
            try {
                const models: TAppModel[] = [ ...this.loadAll(), newModel ];
    
                this.setModelsInStorage(models);
            }

            catch(e: unknown) {
                console.log(ErrorHandler.handle(e));
            }
        }

        public edit(toEditProperties: Partial<TAppModel> & { id: string }): void {
            try {
                const models: TAppModel[] = this.loadAll();
                const modelIndex: number = this.getModelIndex(models, toEditProperties.id);
    
                models[modelIndex] = {
                    ...models[modelIndex],
                    ...toEditProperties
                };
    
                this.setModelsInStorage(models);
            }

            catch(e: unknown) {
                console.log(ErrorHandler.handle(e));
            }
        }

        public remove(toDelete: TAppModel): void {
            try {
                const models: TAppModel[] = this.loadAll();
                const modelIndex: number = this.getModelIndex(models, toDelete.id);
    
                models.splice(modelIndex, 1);
    
                this.setModelsInStorage(models);
            }

            catch(e: unknown) {
                console.log(ErrorHandler.handle(e));
            }
        }

        private setModelsInStorage(models: TAppModel[]): void {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(models));
        }

        private getModelIndex(models: TAppModel[], id: string): number {
            const modelIndex: number = models.findIndex((m) => m.id === id);

            if (modelIndex < 0) {
                throw new StorageError("Model not found in storage.");
            }

            return modelIndex;
        }
}