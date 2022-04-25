import { useState } from 'react'
import { collection, getDocs, addDoc, query, where, serverTimestamp } from "firebase/firestore";
import { db } from '../db/firebase';
import { IoLinkSharp } from 'react-icons/io5';

// export const getListMonth = async () => {
//     const q = query(collection(db, "detail"), where("type", "==", "income"));
//     // const q = query(collection(db, "detail"), where("date",">=" ,"2022-04"));
//     // console.log('data')
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach(doc => {
//         try {
//             // console.log(doc.data())
//             // console.log(doc.data().date.toDate().months())
//             let fecha = new Date(doc.data().date.toDate());
//             // console.log(fecha.getMonth())
//             return fecha
//         }
//         catch (e) {
//             console.log(e)
//         }
//     })

// }

export const addData = async (funds, description, type) => {
    const buyer = await addDoc(collection(db, "detail"), {
        'funds': funds,
        'description': description,
        'date': serverTimestamp(),
        'type': type
    });
    console.log("Document written with Id", buyer)
}


const initialState = () => {
    const [state, setState] = useState(null);

    const getList = async () => {
        const list = await getDocs(collection(db, "detail"))
        let array = [];

        list.forEach(doc => {
            let link = { ...doc.data() };
            array.push(link);
        })
        setState(array)
    }
    return {
        getList,
        state
    }
}

export default initialState
