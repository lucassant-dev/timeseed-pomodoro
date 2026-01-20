import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primary: {
            default: string,
            hover: string
        },
        
        background: {
            default: string,
            contrast: string,
            hover: string,
            disabled: string
        },
        
        page: string,
        text: string,
        icon: string
    }
}