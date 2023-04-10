import { Container } from "../TextArea/styles";

export function TextArea({ value, ...rest}) {
    return (
        <Container {...rest}>
            {value}
        </Container>
    );
}