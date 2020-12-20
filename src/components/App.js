import React, { useState } from 'react';

import AppHeader from './AppHeader/AppHeader';
import ListContainer from './ListContainer/ListContainer';
import AppFooter from './AppFooter/AppFooter';

import './app.scss';

const App = prosp => {
    const [todoData,setTodoData] = useState([]);
    const [userName,setUserName] = useState('Gaurav Bisht');
    
    const handleListContActions = (data) => {
        console.log('Action called is ',data);
        const { type = '' , payload = '' } = data;
        switch(type){
            case 'DELETE_TODO':
                const newTodoListData = [];
                todoData.forEach(item => item.id !== payload.taskId ? newTodoListData.push(item) : '');
                setTodoData(newTodoListData);
                break;

            default:
                console.log('No matching action found');
                break;
        }
    }

    const handleFooterActions = data => {
        console.log('Action called is ',data);
        const { type = '' , payload = '' } = data;
        switch(type){
            case 'ADD_TODO':
                const newTodoListData = todoData.map(item => ({...item}));
                const idT = newTodoListData.length + 1;
                newTodoListData.push({...payload, id : idT}); 
                setTodoData(newTodoListData);
                break;

            default:
                console.log('No matching action found');
                break;
        }
    }



    return(
        <main className={'todo-app-cont'}>
            <AppHeader userName={userName} taskCount={todoData.length}/>
            <ListContainer todoData={todoData} action={handleListContActions}/>
            <AppFooter action={handleFooterActions}/>
        </main>
    );
}

export default App;