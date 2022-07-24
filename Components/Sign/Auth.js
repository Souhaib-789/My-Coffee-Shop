// import auth from '@react-native-firebase/auth';



// const SignUp=( name , email, password)=>{
//     if(!name || !email || !password){
//       alert('Error ! , Please fill all fields')
//     }
//     return auth().createUserWithEmailAndPassword(email, password)
//     .then( cred => {
//       const {uid} = cred.user;
  
//       auth(),currentUser.updateProfile({
//         displayName : name
//       })
//       return uid;
//     })
//     .catch(
//       err => alert(err.code , err.message)
//     )}
    







  
//     const SignIn=(  email, password)=>{
//       if( !email || !password){
//         alert('Error ! , Please fill all fields')
//       }
//       return auth().signInWithEmailAndPassword(email, password)
//       .then(()=> { })
        
//       .catch(
//         err => alert(err.code , err.message)
//       )}
  






//       const SignOut=()=>{
//         return auth.SignOut()
//       }


//       const Auth={
//           SignIn,
//           SignOut,
//           SignUp
//       }
      
//       export default Auth;