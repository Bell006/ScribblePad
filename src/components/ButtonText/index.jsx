import { Container } from "./styles";

export function ButtonText({ title, color, ...rest}) {
    return (
        <Container
            style={{ color }}
            type="button"
            {...rest}
        >
            { title }
        </Container>
    );
};