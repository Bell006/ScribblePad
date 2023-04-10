import { FiX } from 'react-icons/fi';
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
            >
                { isNew ? <AiOutlinePlus /> : <FiX />}
            </button>
        </Container>
      );
}