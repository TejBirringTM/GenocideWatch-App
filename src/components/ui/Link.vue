<script setup lang="ts">
    import { computed } from 'vue';
    const props = defineProps<{
        disabled?: boolean,
        color: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "link" | "info" | "success" | "warning" | "error",
        size: "large" | "regular" | "small" | "tiny",
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
</script>

<template>
    <a class="link" :class="classes" href="#">
        <slot></slot>
    </a>
</template>