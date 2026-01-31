import ApplicationError from "@/errors/ApplicationError";

export default class ContextError extends ApplicationError {
    public type: string = "context";
}