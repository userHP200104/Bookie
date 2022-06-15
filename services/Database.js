//we will be adding our db queries and functions 
import { db, auth } from "../Firebase"; //firestore instance
//firestore functions
import { doc, setDoc, Timestamp, collection, getDocs, getDoc, addDoc, query, onSnapshot, where } from "firebase/firestore";

//creates a document for the user in our users collection
export const createUserOnRegister = (user, username) => {
    //document reference: doc(firestore init, collection name, optional - id of the document (name/id))
    const userRef = doc(db, "users", user.uid);

    //create data document
    const userData = {
        email: user.email,
        username: username,
        dateCreated: Timestamp.fromDate(new Date()),
        money: 100
    }
    //set a document setDoc(dumument reference, data we want to set, any additional options like merge)
    return setDoc(userRef, userData); //pass the correect one 
}

// create a betCount
export const addBet = (betData) => {
    return addDoc(collection(db, 'bets'), betData)
}

// get all availabel bets made
export const getAllAvailableBets = async () => {

    const availableBets = [];
    //get snapshot of our users collection
    const querySnapshot = await getDocs(collection(db, 'bets'));

    //need to loop through snapshot and get each document's data
    querySnapshot.forEach((doc) => {

        let bet = { ...doc.data(), uid: doc.id }
        if (bet.available == true && bet.userId != auth.currentUser.uid) {

            availableBets.push(bet);
        }
    })

    return availableBets;

}

// get all made bets made
export const getAllMadeBets = async () => {

    const madeBets = [];
    //get snapshot of our users collection
    const querySnapshot = await getDocs(collection(db, 'bets'));

    //need to loop through snapshot and get each document's data
    querySnapshot.forEach((doc) => {

        let bet = { ...doc.data(), uid: doc.id }
        if (bet.available == false && bet.userId != auth.currentUser.uid) {

            madeBets.push(bet);
        }
    })

    return madeBets;

}

// get all current users bets made
export const getAllCurrentUsersBets = async () => {

    const currentUsersBets = [];
    //get snapshot of our users collection
    const querySnapshot = await getDocs(collection(db, 'bets'));

    //need to loop through snapshot and get each document's data
    querySnapshot.forEach((doc) => {

        let bet = { ...doc.data(), uid: doc.id }
        if (bet.userId == auth.currentUser.uid) {

            currentUsersBets.push(bet);
        }
    })

    return currentUsersBets;
}

export const getCurrentUserMoney = async () => {

    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().money;
    }


}

export const makePayment = async (newMoney, betData, betName) => {

    const id = auth.currentUser.uid;

    const userRef = doc(db, 'users', id);
    const userSnap = await getDoc(userRef);

    console.log("New Money: ", newMoney);
    console.log("Old Money: ", userSnap.data().money);

    if (parseInt(userSnap.data().money) > 0) {
        setDoc(userRef, { money: (parseInt(userSnap.data().money) - parseInt(newMoney)) }, { merge: true });
        console.log("Money Taken!!");

        recordBet(betData);
        changeBetAvailability(betName);

    } else {
        console.log("no monneyy")
    }
}

export const recordBet = async (betData) => {

    const id = auth.currentUser.uid;

    const collectionRef = collection(db, 'users/' + id + '/betsMade')
    addDoc(collectionRef, betData);
}

export const changeBetAvailability = async (betName) => {

    const id = auth.currentUser.uid;
    let betId = 0;

    const q = query(collection(db, "bets"), where("betName", "==", betName));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        betId = doc.id;
    });

    const betRef = doc(db, 'bets', betId);
    const betSnap = await getDoc(betRef);

    setDoc(betRef, { available: false }, { merge: true });
    console.log("Not Available!!");

}