//we will be adding our db queries and functions 
import {db} from "../Firebase"; //firestore instance
//firestore functions
import { doc, setDoc, Timestamp, collection, getDocs, addDoc, query, onSnapshot } from "firebase/firestore"; 

//creates a document for the user in our users collection
export const createUserOnRegister=(user, username)=>{
    //document reference: doc(firestore init, collection name, optional - id of the document (name/id))
    const userRef = doc(db, "users", user.uid);

    //create data document
    const userData={
        email:user.email,
        username:username,
        dateCreated: Timestamp.fromDate(new Date())
    }
    //set a document setDoc(dumument reference, data we want to set, any additional options like merge)
    return setDoc(userRef, userData); //pass the correect one 
}

//get all the user documents
export const getAllUsers= async ()=>{
    //return a list of users
    const users=[];
    //snapshot for our users collection
    const querySnapshot = await getDocs(collection(db, 'users'));

    //need to loop through snapshot and get each document's data
querySnapshot.forEach((doc)=>{
    let user ={...doc.data(), uid:doc.id}
    users.push(user);
})

return users;
}

// set our profile data - updaye
export const updateProfile =(uid, data)=>{
    const userRef = doc(db, "users", uid);
    return setDoc(userRef, data, {merge:true}); // add the option to merge document andnot overwrite 
    
}
//create a new project function
export const newProject=(project)=>{
        return addDoc(collection(db, 'projects'), project);
}

// //listening for real time updates to the data
// export const listenToAllProjects=()=>{
// const q = query(collection(db, 'projects'));

// const project=[];

// const unsubscribe = onSnapshot(q, (querySnapshot)=>{
// project=[];
//     querySnapshot.forEach((doc)=>{
//         project.push(doc.data());
//     })
// })
// return unsubscribe;
// }

//get all the user documents
export const listenToAllProjects= async ()=>{
    //return a list of users
    const projects=[];
    //snapshot for our users collection
    const querySnapshot = await getDocs(collection(db, 'projects'));

    //need to loop through snapshot and get each document's data
querySnapshot.forEach((doc)=>{
    let project ={...doc.data(), uid:doc.id}
    projects.push(project);
})
return projects;
}