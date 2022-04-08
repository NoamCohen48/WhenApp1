import React, { useRef } from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';

function AddContact(props) {
    let chatContext = useChatContext();
    const usernameInput = useRef(undefined)
    const closeBtn = useRef(undefined)

    function addContact() {
        // validate input

        chatContext.addContact(usernameInput.current.value);

        closeBtn.current.click();
        usernameInput.current.value = ''
    }

    return (
        <div className="modal fade" id={props.id} tabindex={props.tabindex} aria-labelledby={props.aria_labelledby} aria-hidden={props.aria_hidden}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="AddContactModalLabel">Add Contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control" placeholder="User Name" ref={usernameInput} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeBtn}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={addContact}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact;