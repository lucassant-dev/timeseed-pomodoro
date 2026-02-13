export default class ErrorHandler {
    public static handle(e: unknown): string {
        const error = e instanceof Error ? e.message : String(e);
        console.log(error);
        return error;
    }
}