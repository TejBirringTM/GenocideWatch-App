import { signInWithEmailAndPassword, signOut as _signOut, onAuthStateChanged, type User, sendPasswordResetEmail as _sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { ref } from "vue";

export const activeUser = ref<User>();

async function signIn(email: string, password: string) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        console.error(e);
    }
}

async function signOut() {
    try {
        await _signOut(auth);
    } catch (e) {
        console.error(e);
    }
}

async function sendPasswordResetEmail(email: string) {
    try {
        await _sendPasswordResetEmail(auth, email);
    } catch (e) {
        console.error(e);
    }
}

onAuthStateChanged(auth, (user)=>{
    if (user) {
        activeUser.value = user;
    } else {
        activeUser.value = undefined;
    }
});

export function useAuth() {
    return {
        activeUser,
        signIn,
        signOut,
        sendPasswordResetEmail
    }
}
