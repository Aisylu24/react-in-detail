import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo',

};


export const DifficultCounting = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA
    let resultB = 1

    resultA = useMemo<number>(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={e => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) =>
        <div key={i}>
            {u}
        </div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsTpReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ai', 'Liza', 'Di'])

    const newArray = useMemo(() => {
        return users.filter(u => u.indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        let copy = [...users, 'Zarina' + new Date().getTime()]
        setUsers(copy)
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => {
            addUser()
        }}>add User
        </button>
        {counter}
        <Users users={newArray}/>
    </>
}

type BooksSecretParams = {
    addBook: () => void };

const BooksSecret = (props: BooksSecretParams) => {
    return <div>
        <button onClick={() => {
          props.addBook()
        }}>add book
        </button>
    </div>
}

const Books = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Js', 'Css'])

    const newArray = useMemo(() => {
        return books.filter(b => b.indexOf('a') > -1)
    }, [books])

    const memoizedAddBook = useCallback(()=> {

                let copy = [...books, 'Html' + new Date().getTime()]
                setBooks(copy)

    }, [books])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>

        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
}