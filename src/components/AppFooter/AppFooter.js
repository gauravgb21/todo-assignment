import React, { useState } from 'react';

import emptyFunction from '../../Utilities/emptyFunction';
import './app_footer.scss';

const AppFooter = props => {
    const { action = emptyFunction } = props;

    const [inputText,setInputText] = useState('');
    const [showInputModal,setShowInputModal] = useState(false);

    const inputModalElement = showInputModal ? (
        <div className={'todo-input-modal'}>
               <input placeholder={'Enter Your Task..'} type={"text"} onKeyUp={(e) => setInputText(e.target.value)} />
        </div>
    ) : '';

    const handleBtnClick = () =>{
        if(showInputModal){
            setInputText('');
            setShowInputModal(false);
            action({
                type : 'ADD_TODO',
                payload : {
                    taskName : inputText,
                    taskDateTime : 'Monday'
                }
            });
        }
        else{
            setShowInputModal(true);
        }
    }

    return(
        <footer className={'todo-app-footer'}>
            {inputModalElement}
            <div className={'add-button'} onClick={() => handleBtnClick()}>
                Add Task
            </div>
        </footer>
    );
}

export default AppFooter;