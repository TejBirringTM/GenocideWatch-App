<script setup lang="ts">
    import Textbox from '@/components/form/Textbox.vue';
    import BigButton from '@/components/ui/BigButton.vue';
    import Link from '@/components/ui/Link.vue';
    import {validateInput} from '@/utils/validate';
    import { useAuth } from '@/libs/firebase/auth';
    import { computed, ref } from 'vue';
    import {z} from 'zod';

    const auth = useAuth();

    const emailAddress = ref("");
    const emailValid = validateInput(z.string().email(), emailAddress);
    const password = ref("");

    const emailSent = ref(false);
    async function sendPasswordResetEmail() {
        await auth.sendPasswordResetEmail(emailAddress.value);
        emailSent.value = true;
    }


</script>

<template>
    <div v-if="!auth.activeUser.value" class="max-w-sm mx-auto">
        <div class="card bg-base-200 mb-2">
            <div class="card-body">
                <h2 class="card-title">Log in to your account</h2>
                <div class="flex flex-col mt-4 gap-2">
                    <Textbox label="Email Address" autocomplete="email" v-model="emailAddress"/>
                    <Textbox label="Password" password v-model="password"/>
                </div>
            </div>
            <div class="card-actions justify-end">
                <BigButton text="Log In" icon="fi-ss-key" @click="auth.signIn(emailAddress, password)" size="regular" block color="primary"/>
            </div>
        </div>
        <Link class="ml-4 sm:ml-0" color="secondary" size="small" :disabled="!emailValid" @click="sendPasswordResetEmail" v-if="!emailSent">Forgot your password?</Link>
        <p class="text-secondary text-sm" v-else>Please check your inbox.</p>
    </div>

    <div class="card w-96 bg-base-200 mx-auto" v-else>
        <div class="card-body">
            <div class="text-center">
                <p>You are logged in as:</p>
                <p class="font-bold">{{ auth.activeUser.value.email }}</p>
            </div>
        </div>
        <div class="card-actions justify-end">
            <BigButton text="Log Out" @click="auth.signOut" size="regular" block color="primary"/>
        </div>
    </div>
</template>@/utils/validate