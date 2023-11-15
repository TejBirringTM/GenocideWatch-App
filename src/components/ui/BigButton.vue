<script setup lang="ts">
import { computed } from 'vue';

    const props = defineProps<{
        text?: string,
        icon?: string,
        outline?: boolean,
        active?: boolean,
        wide?: boolean,
        square?: boolean,
        circle?: boolean,
        block?: boolean,
        loading?: boolean,
        size: "large" | "regular" | "small" | "tiny",
        color: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "link" | "info" | "success" | "warning" | "error"
    }>();

    const btnClasses = computed(()=>{
        const classes : string[] = [];
        if (props.outline) {
            classes.push("btn-outline");
        }
        if (props.active) {
            classes.push("btn-active");
        }
        if (props.wide) {
            classes.push("btn-wide");
        }
        if (props.square) {
            classes.push("btn-square");
        }
        if (props.circle) {
            classes.push("btn-circle");
        }
        if (props.block) {
            classes.push("btn-block");
        }
        switch (props.size) {
            case "large":
                classes.push("btn-lg");
                break;
            case "small":
                classes.push("btn-sm");
                break;
            case "tiny":
                classes.push("btn-xs");
                break;
        }
        classes.push(`btn-${props.color}`);
        return classes.join(" ");
    })

    const iconClasses = computed(()=>{
        const classes : string[] = [];
        switch (props.size) {
            case "large":
                classes.push("text-2xl");
                break;
            case "small":
                classes.push("text-sm");
                break;
            case "tiny":
                classes.push("");
                break;
            default:
                classes.push("text-lg")
        }
        return classes;
    })

    const textClasses = computed(()=>{
        const classes : string[] = [];
        switch (props.size) {
            case "large":
                classes.push("text-3xl");
                break;
            case "small":
                classes.push("text-xl tracking-wider");
                break;
            case "tiny":
                classes.push("tracking-widest");
                break;
            default:
                classes.push("text-2xl tracking-wider")
        }
        return classes;
    })
</script>

<template>
    <button class="btn" :class="btnClasses">
            <span class="loading loading-spinner mr-3" v-if="loading"></span>
            <i class="fi" :class="[icon, {'opacity-40':loading}, ...iconClasses]" v-if="icon"></i>
            <span class="font-display tracking-wide" :class="[{'ml-3':icon}, {'opacity-40':loading}, ...textClasses]" v-if="text">{{ text }}</span>
    </button>
    
</template>