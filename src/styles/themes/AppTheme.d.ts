export type AppThemeColors = {
    primary: string,
    text: string,
    icon: string,
    menu: string,
    contrast: string,
    backgroundTop: string,
    backgroundBottom: string
}

type AppTheme = {
    name: string,
    colors: AppThemeColors
};

export default AppTheme;