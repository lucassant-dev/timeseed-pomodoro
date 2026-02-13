import type AppTheme from "@/styles/themes/AppTheme";
import StorageError from "@/errors/StorageError";
import ErrorHandler from "@/utils/ErrorHandler";

export default class SelectedUserThemeStorage {
    private static readonly SELECTED_THEME_KEY = "selectedUserTheme";

    public static setTheme(theme: AppTheme): void {
        try {
            localStorage.setItem(this.SELECTED_THEME_KEY, JSON.stringify(theme));
        }

        catch(e: unknown) {
            ErrorHandler.handle(e);
            throw new StorageError("Error setting selected user theme.");
        }
    }

    public static getTheme(): AppTheme | null {
        try {
            const theme: string | null = localStorage.getItem(this.SELECTED_THEME_KEY);

            return theme ? JSON.parse(theme) : null;
        }

        catch(e: unknown) {
            ErrorHandler.handle(e);
            throw new StorageError("Error getting selected user theme.");
        }
    }
}