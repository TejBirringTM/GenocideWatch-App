<script setup lang="ts">
    const props = defineProps<{
        title?: string
    }>();
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title" v-if="title">{{ title }}</h1>
            <slot></slot>
            <div class="card-actions justify-end">
                <slot name="actions"></slot>
            </div>
        </div>
        
    </div>
</template>