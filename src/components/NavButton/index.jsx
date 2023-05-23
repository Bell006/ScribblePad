import {  MdTag, MdAllInclusive } from "react-icons/md";
import { Container } from "./styles";

export function NavButton({all, title, isActive, ...rest}) {
    return(
        <Container
        type="button"
        isActive={isActive}
        all={all}
        {...rest}
        >
            {all ? <MdAllInclusive size={15}/> : <MdTag size={20} />}
            { title }
        </Container>
    );
}