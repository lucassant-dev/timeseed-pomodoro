import StorageError from "@/errors/StorageError";
import AppTheme from "@/styles/themes/AppTheme";
import ErrorHandler from "@/utils/errorHandler";

export type CustomUserThemeRecord = Record<string, AppTheme>;

export default class CustomUserThemeStorage {
    private static readonly CUSTOM_THEMES_KEY: string = "customUserThemes";

    public static getAllThemes(): CustomUserThemeRecord {
        try {
            const themes: string | null = localStorage.getItem(this.CUSTOM_THEMES_KEY);

            return themes ? JSON.parse(themes) : {};
        }

        catch(e: unknown) {
            ErrorHandler.handle(e);
            throw new StorageError("Error fetching themes.");
        }
    }

    public static setTheme(theme: AppTheme): void {
        try {
            const allThemes: CustomUserThemeRecord = this.getAllThemes();
            allThemes[theme.name] = theme;
        
            localStorage.setItem(this.CUSTOM_THEMES_KEY, JSON.stringify(allThemes));
        }

        catch(e: unknown) {
            ErrorHandler.handle(e);
            throw new StorageError("Error creating theme.");
        }
    }

    public static deleteTheme(theme: AppTheme): void {
        try {
            const allThemes: CustomUserThemeRecord = this.getAllThemes();
            delete allThemes[theme.name];
            
            localStorage.setItem(this.CUSTOM_THEMES_KEY, JSON.stringify(allThemes)); 
        }

        catch(e: unknown) {
            ErrorHandler.handle(e);
            throw new StorageError("Error deleting theme.");
        }
    }
}