<script setup lang="ts">
    import Logo from "../Logo.vue"
    import Button from "../Button.vue"
    import { useAuth } from "@/libs/firebase/auth";
    const auth = useAuth();
</script>

<template>
    <div class="p-4 sm:flex sm:justify-between">
        <Logo/>
        <div class="w-full flex flex-col gap-4 sm:flex-row sm:justify-end sm:ml-4 mt-4 sm:mt-0">
            <Button text="Share" icon="fi-ss-share" size="regular"/>
            <Button v-if="!auth.activeUser.value" text="Log In" icon="fi-ss-key" :click="()=>$router.push({name:'account'})" size="regular"/>
            <Button v-else text="Profile" icon="fi-ss-user" :click="()=>$router.push({name:'account'})" size="regular"/>
        </div>
    </div>
</template>