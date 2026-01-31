export default abstract class ApplicationError extends Error {
    public abstract type: string
}