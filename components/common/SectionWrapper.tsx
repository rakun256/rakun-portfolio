import { ReactNode } from "react";
import Container from "./Container";

type Props = {
    id?: string;
    children: ReactNode;
    className?: string;
};

export default function SectionWrapper({ id, children, className = "" }: Props) {
    return (
        <section id={id} className={`py-20 md:py-32 ${className}`}>
            <Container>
                {children}
            </Container>
        </section>
    );
}