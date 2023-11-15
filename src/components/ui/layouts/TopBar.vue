<script setup lang="ts">
    import Logo from "../Logo.vue"
    import BigButton from "../BigButton.vue"
    import { useAuth } from "@/libs/firebase/auth";
    const auth = useAuth();
</script>

<template>
    <div class="p-4 sm:flex sm:justify-between">
        <Logo/>
        <div class="w-full flex flex-col gap-4 sm:flex-row sm:justify-end sm:ml-4 mt-4 sm:mt-0">
            <BigButton text="Share" icon="fi-ss-share" size="regular" color="secondary"/>
            <BigButton v-if="!auth.activeUser.value" text="Log In" icon="fi-ss-key" @click="$router.push({name:'account'})" size="regular" color="secondary"/>
            <BigButton v-else text="Profile" icon="fi-ss-user" @click="$router.push({name:'account'})" size="regular" color="secondary"/>
            <!-- <BigButton text="Log Out" icon="fi-ss-door-open" class="hidden sm:block" @click="auth.signOut()" v-else/>
            <BigButton text="Menu" icon="fi-ss-menu-burger" class="block sm:hidden" />
            <BigButton text="Share" icon="fi-ss-share" size="small" color="secondary"/>
            <BigButton text="Share" icon="fi-ss-share" size="tiny" color="secondary"/> -->
        </div>
        
    </div>
</template>