import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../config/firebaseconfig";
import { useDispatch } from "react-redux";
import { setUser, clearUser, setLoading } from "./services/authSlice";


const authWatcher = () => {
    let dispatch = useDispatch()


    useEffect(() => {
        // setting the loading state in the slice
        dispatch(setLoading(true))

        let unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({ uid: user.uid, email: user.email, displayName: user.displayName, photoUrl: user.photoURL }))
            } else {
                dispatch(clearUser())
            }
            dispatch(setLoading(false))
        });

        return () => unsubscribe()  // unmounting when logged out

    }, [dispatch]) // updation phase

    return null
}


export default authWatcher