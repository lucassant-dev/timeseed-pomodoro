import "styled-components";
import type { AppThemeColors } from "@/styles/themes/AppTheme";

declare module "styled-components" {
    export interface DefaultTheme extends AppThemeColors {}
}