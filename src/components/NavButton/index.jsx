import { MdArticle } from "react-icons/md"
import { Container } from "./styles";

export function NavButton({icon: Icon, title, ...rest}) {
    return(
        <Container
        type="button"
        {...rest}
        >
            {Icon && <Icon size={20} />}
            { title }
        </Container>
    );
}