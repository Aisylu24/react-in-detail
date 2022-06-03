import React, {useState} from "react";

export default {
    title: 'React.memo',

};

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) =>
        <div key={i}>
            {u}
        </div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ai', 'Liza', 'Di'])

    const addUser = () => {
        let copy = [...users,'Zarina' + new Date().getTime()]
        setUsers(copy)
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>add User</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>

    </>
}