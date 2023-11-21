<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{
        tags: string[],
        activeTag?: string
    }>();

    const emit = defineEmits<{
        "update:activeTag": [newTag: string]
    }>();

    const _activeTag = computed({
        get() {
            return props.activeTag ?? props.tags[0];
        },
        set(newTag: string) {
            emit("update:activeTag", newTag);
        }
    });
</script>

<template>
        <div role="tablist" class="tabs tabs-lifted tabs-lg">
            <a 
                v-for="t of props.tags" :key="t"
                role="tab" 
                class="tab"
                :class="[{'tab-active': (t === _activeTag)}]"
                @click="_activeTag = t"
            ><span class="font-bold">{{ t }}</span></a>
        </div>
        <div class="border-l border-b border-r p-4 border-base-300">
            <slot></slot>
        </div>
</template>