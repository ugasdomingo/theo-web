<script setup lang="ts">
//Import Tools
import { useUserStore } from 'src/stores/user-store';

//Logic
const userStores = useUserStore();

//Props
defineProps({
    post: Object,
});
</script>

<template>
    <q-card class="my-card cursor-pointer">
        <q-video :src="post?.url" />
        <q-card-section>
            <p class="q-py-xs text-black text-center nunito">
                {{ post?.title }}
            </p>
        </q-card-section>
    </q-card>
</template>

<style lang="scss" scoped>
p {
    font-weight: 600;
    padding: 0;
}
.my-card {
    width: 100%;
    max-width: 250px;
    max-height: 250px;
}
</style>
