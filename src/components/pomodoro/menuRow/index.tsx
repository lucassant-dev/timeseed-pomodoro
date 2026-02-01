import type { JSX, ReactNode } from "react";
import { MenuRowContainer } from "./styles";

type Props = {
    children: ReactNode,
    isHidden?: boolean
};

export default function MenuRow({ children, isHidden }: Props): JSX.Element | null {
    return (
        isHidden
            ? null
            : (<MenuRowContainer>
                {children}
              </MenuRowContainer>)
    );
}