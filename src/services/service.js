import { collection, getDocs, addDoc, query, where, serverTimestamp } from "firebase/firestore";
import { db } from '../db/firebase';

export const getList = async () => {
    const list = await getDocs(collection(db, "detail"));
    list.forEach(doc => {
        // console.log(`${doc.id} == ${doc.}`)
        console.log(doc.data())
    })
}

export const getListMonth = async () => {
    const q = query(collection(db, "detail"), where("type", "==", "incomes"));
    // const q = query(collection(db, "detail"), where("date",">=" ,"2022-04-15"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
        try {
            console.log(doc.data())
        }
        catch (e) {
            console.log(e)
        }
    })
}

export const addData = async (funds, description, type) => {
    const buyer = await addDoc(collection(db, "detail"), {
        'funds': funds,
        'description': description,
        'date': serverTimestamp(),
        'type': type
    });
    console.log("Document written with Id", buyer)
}
