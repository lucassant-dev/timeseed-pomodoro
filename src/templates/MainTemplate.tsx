import type { JSX, ReactNode } from "react";
import Container from "@/components/container";
import Heading from "@/components/heading";

type Props = {
    children: ReactNode
};

export default function MainTemplate({ children }: Props): JSX.Element {
	return (	
        <>
            <Container>
                <Heading />
            </Container>

            {children}
        </>
    );
}