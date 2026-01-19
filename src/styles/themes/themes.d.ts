import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        text: {
            primary: string,
            default: string,
            hover: {
                primary: string,
                neutral: string
            },
            disabled: string
        },

        background: {
            page: string,
            primary: string,
            neutral: {
                100: string,
                200: string,
                300: string,
                400: string,
                500: string,
                600: string,
                700: string,
                800: string,
                900: string
            },
            hover: {
                primary: string,
                neutral: string
            },
            status: {
                success: string,
                warning: string,
                error: string,
                danger: string,
                info: string
            },
            disabled: string
        },

        border: {
            primary: string,
            default: string,
            disabled: string
        },

        icon: {
            color: {
                primary: string,
                default: string,
                hover: {
                    primary: string,
                    neutral: string
                },
                disabled: string
            },
            stroke: {
                1: string,
                2: string
            }
        }
    }
}