import { signInWithEmailAndPassword, signOut as _signOut, onAuthStateChanged, type User, sendPasswordResetEmail as _sendPasswordResetEmail, confirmPasswordReset as _confirmPasswordReset  } from "firebase/auth";
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

onAuthStateChanged(auth, (user)=>{
    if (user) {
        activeUser.value = user;
    } else {
        activeUser.value = undefined;
    }
});

async function sendPasswordResetEmail(email: string) {
    try {
        await _sendPasswordResetEmail(auth, email);
    } catch (e) {
        console.error(e);
    }
}

async function confirmPasswordReset(code: string, newPassword: string) {
    try {
        await _confirmPasswordReset(auth, code, newPassword);
    } catch (e) {
        console.error(e);
    }
}

export function useAuth() {
    return {
        activeUser,
        signIn,
        signOut,
        sendPasswordResetEmail,
        confirmPasswordReset
    }
}
