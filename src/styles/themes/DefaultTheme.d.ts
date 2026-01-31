import "styled-components";
import { AppThemeColors } from "@/styles/themes/AppTheme";

declare module "styled-components" {
    export interface DefaultTheme extends AppThemeColors {}
}