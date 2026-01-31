import ApplicationError from "@/errors/ApplicationError";

export default class StorageError extends ApplicationError {
    public type: string = "storage";
}