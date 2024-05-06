import { collection, doc, DocumentData, Firestore, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { FirebaseApp } from 'firebase/app'
import app from './config';

export const firestore = (app?: FirebaseApp): Firestore => {
  if (app) {
    return getFirestore(app)
  } else {
    return getFirestore()
  }
}

export const docRef = (collectionName: string, id: string) => {
  const collection = collectionRef(collectionName)
  return doc(collection, id)
}

export const setDocument = async (collectionName: string, id: string, data: object) => {
  const document = docRef(collectionName, id)
  return await setDoc(document, data, { merge: true })
}

export const getDocument = async (collectionName: string, id: string):Promise<DocumentData | undefined> => {
  const document = await getDoc(docRef(collectionName, id))
  return document.data()
}

export const collectionRef = (collectionName: string) => {
  return collection(firestore(app), collectionName)
}

export const updateField = async (collectionName: string, id: string, data: any) => {
  const documentRef = docRef(collectionName, id);
  return await setDoc(documentRef, data, { merge: false });
}
