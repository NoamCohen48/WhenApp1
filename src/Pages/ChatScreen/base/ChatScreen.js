import './ChatScreen.css'
import DialogScreen from '../ChatDialog/DialogScreen.js';
import SideBar from '../SideBar/SideBar.js';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';

function ChatScreen(props) {
    let chatContext = useChatContext();

    // TODO: find a solution for fetching contacts, 
    // now doing it here, putting in context and extracting in side bar
    // Need a way to tell this parent that side bar is loading. 

    if (chatContext.curUser === undefined) {
        return (
            <div className='container-lg chat-container c-shadow'>
                <img className='loading' src='https://media1.giphy.com/media/o0vwzuFwCGAFO/giphy.gif?cid=790b761134e48271ad5c493da81e35ff316e9569c83fa42c&rid=giphy.gif&ct=g' alt='' />;
            </div>
        )
    }

    return (
        <>
            <div className='container-lg chat-container c-shadow'>
                <div className='row'>
                    <div className="col-4 side-bar" >
                        <SideBar />
                    </div>
                    <div className="col-8 dialog-screen" >
                        <DialogScreen />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatScreen;