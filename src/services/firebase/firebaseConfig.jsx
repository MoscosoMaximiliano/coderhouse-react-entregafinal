// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getDocs, getDoc, setDoc, collection, query, where, getFirestore } from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export const GetProducts = () => {
    return getDocs(collection(db, 'products')).then(response => {
        return response.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
    }).catch(err => {
        console.log(err)
    })
}

export const GetFilteredProducts = (category) => {
    const queryString = query(collection(db, 'products'), where('category', '==', category))

    return getDocs(queryString).then(response => {
        return response.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
    }).catch(err => {
        console.log(err)
    })
}

export const GetDetailProduct = async (id) => {
    try {
        const docRef = doc(db, "products", id)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch (error) {
        console.log(error)
        return []
    }
}

export const InsertNewBuy = async (data) => {
    await setDoc(doc(db, 'buyTickets'), data)

    return true
}