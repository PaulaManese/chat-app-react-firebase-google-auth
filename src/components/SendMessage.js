import React from 'react';
import { auth, db } from '../firebase'
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


const style = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
};



const SendMessage = () => {
    const [input, setInput] = useState('');

const sendMessage = async (e) => {
    e.preventDefault()
    if (input === ''){
        alert('Please enter a valid messsage')
        return
    }

    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {

        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    // eslint-disable-next-line no-restricted-globals
    scroll.current.scrollIntoView({behavior : 'smooth'})
}

  return (
    <div>
      <form onSubmit={sendMessage} className={style.form}>
            <input className={style.input}
                    type="text" 
                    placeholder='Message'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
            <button className={style.button} type="submit">Send</button>
      </form>
    </div>
  )
}

export default SendMessage
