<script setup lang="ts">
//Import Tools
import { useUserStore } from 'src/stores/user-store';
import { usePostsStore } from 'src/stores/post-store';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { ref } from 'vue';

//Logic
const userStores = useUserStore();
const postsStore = usePostsStore();
const router = useRouter();
const $q = useQuasar();
const loadding = ref(false);

const deletePost = async (id: string, category: string) => {
    loadding.value = true;
    await postsStore.deletePost(id);
    await postsStore.getAllPostsByCategory(category);
    loadding.value = false;
    $q.notify('Post Eliminado');
};

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
        <q-card-section v-if="userStores.loggedIn">
            <q-btn
                glossy
                color="primary"
                @click="deletePost(post?.id, post?.category)"
                label="Eliminar"
            />
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
