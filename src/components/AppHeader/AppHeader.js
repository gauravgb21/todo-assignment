import React from 'react';

import './app_header.scss';

const AppHeader = props => {
    const { userName = '' , taskCount = 0 } = props;

    const welcomeNoteElement = (
        <div className={'welcome-note'}>
           {'Hello '+ userName}
        </div>
    );

    const taskCountElement = (
        <div className={'todo-count'}>
            {`You have ${taskCount} tasks`}
        </div>
    );

    const profileImg = (
        <div className={'img-cont'}>
        </div>
    );

    return(
        <header className={'todo-app-header'}>
            <div className={'header-text-cont'}>
                {welcomeNoteElement}
                {taskCountElement}
            </div>
            {profileImg}
        </header>
    );
}

export default AppHeader;