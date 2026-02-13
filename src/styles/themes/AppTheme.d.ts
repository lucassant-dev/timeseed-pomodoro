export type AppThemeTextColors = {
    default: string,
    contrast: string
};

export type AppThemeMenuColors = {
    default: string,
    contrast: string
};

export type AppThemePageBackgroundGradientColors = {
    top: string,
    bottom: string
};

export type AppThemePageBackgroundGradient = {
    default: AppThemePageBackgroundGradientColors,
    contrast: AppThemePageBackgroundGradientColors
};

export type AppThemeColors = {
    primary: string,
    text: AppThemeTextColors,
    icon: string,
    menu: AppThemeMenuColors,
    background: AppThemePageBackgroundGradient
};

type AppTheme = {
    name: string,
    colors: AppThemeColors
};

export default AppTheme;