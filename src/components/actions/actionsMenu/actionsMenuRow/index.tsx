import type { JSX, ReactNode } from "react";
import { ActionsMenuRowDiv } from "./styles";

type ActionsMenuRowProps = {
    children: ReactNode,
    isHidden?: boolean
};

export default function ActionsMenuRow({ children, isHidden }: ActionsMenuRowProps): JSX.Element | null {
    return (
        isHidden
            ? null
            : (<ActionsMenuRowDiv>
                {children}
              </ActionsMenuRowDiv>)
    );
}