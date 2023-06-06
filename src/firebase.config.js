import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDxiC2EuJP4yCoXMydoQNSYdgR3teViHHs',
  authDomain: 'megamart-3bcb9.firebaseapp.com',
  databaseURL:
    'https://megamart-3bcb9-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'megamart-3bcb9',
  storageBucket: 'megamart-3bcb9.appspot.com',
  messagingSenderId: '64236305000',
  appId: '1:64236305000:web:0a4c20801d55184ebb59dd',
  measurementId: 'G-MJCWS623LX',
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
