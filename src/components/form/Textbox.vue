<script setup lang="ts">
import { computed } from 'vue';

    const props = defineProps<{
        label: string,
        password?: boolean,
        modelValue: string,
        autocomplete?: string
    }>();

    const emit = defineEmits<{
        "update:modelValue": [value: string]
    }>();

    const type = computed(()=>{
        if (props.password) {
            return "password";
        } else {
            return "text";
        }
    })
</script>

<template>
    <input :type="type" :placeholder="label" class="input input-bordered w-full max-w-xs" @input="emit('update:modelValue', $event.target.value)" :name="autocomplete" :autocomplete="autocomplete"/>
</template>
