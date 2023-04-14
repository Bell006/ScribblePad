import { MdOutlineClose } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import { Container } from '../NoteItem/styles';

export function NoteItem({ isNew, value, onClick, ...rest}) {
    return (
        <Container isNew={isNew}>
            <input
                type='text'
                value={value}
                readOnly={!isNew}
                {...rest}
            />
            <button
                type='button'
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                { isNew ? <AiOutlinePlus /> : <MdOutlineClose />}
            </button>
        </Container>
      );
}