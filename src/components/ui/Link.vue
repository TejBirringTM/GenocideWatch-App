<script setup lang="ts">
    import { computed } from 'vue';
    const props = defineProps<{
        disabled?: boolean,
        color: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "link" | "info" | "success" | "warning" | "error",
        size: "large" | "regular" | "small" | "tiny",
        click?: Function
    }>();

    const classes = computed(()=>{
        const _classes : string[] = [];
        _classes.push(`text-${props.color}`);
        if (props.disabled) {
            _classes.push(`disabled`);
        }
        switch (props.size) {
            case "large":
                _classes.push("text-2xl");
                break;
            case "small":
                _classes.push("text-sm");
                break;
            case "tiny":
                _classes.push("");
                break;
            default:
                _classes.push("text-lg")
        }
        return _classes;
    });

    function onClick() {
        if (props.disabled) return;
        if (props.click) {
            props.click();
        }
    }
</script>

<template>
    <a class="link" :class="classes" href="#" @click="onClick">
        <slot></slot>
    </a>
</template>