//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

export const usePostsStore = defineStore('posts', () => {
    const userStore = useUserStore();

    const allPosts = ref([]);
    const allPostsByCategory = ref([]);

    const podcast = ref([]);
    const turismo = ref([]);
    const entrevistas = ref([]);
    const eventos = ref([]);
    const sketch = ref([]);

    const clasificated_post_by_category = () => {
        allPosts.value.map((item: any) => {
            if (item.category == 'PodCast') {
                if (podcast.value.length <= 1) {
                    podcast.value.push(item);
                }
            }
            if (item.category == 'Turismo') {
                if (turismo.value.length <= 1) {
                    turismo.value.push(item);
                }
            }
            if (item.category == 'Entrevistas') {
                if (entrevistas.value.length <= 1) {
                    entrevistas.value.push(item);
                }
            }
            if (item.category == 'Eventos') {
                if (eventos.value.length <= 1) {
                    eventos.value.push(item);
                }
            }
            if (item.category == 'Sketch') {
                if (sketch.value.length <= 1) {
                    sketch.value.push(item);
                }
            }
        });
    }

    const getAllPosts = async () => {
        try {
            const res = await api({
                url: '/posts',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });
            allPosts.value = res.data.map((item: any) => {
                return {
                    id: item._id,
                    title: item.title,
                    url: item.url,
                    category: item.category,
                    description: item.description,
                };
            });

            clasificated_post_by_category()
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getAllPostsByCategory =async (category: string) => {
        try {
            const res = await api({
                url: '/posts/category/' + category,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });
            allPostsByCategory.value = res.data.map((item: any) => {
                return {
                    id: item._id,
                    title: item.title,
                    url: item.url,
                    category: item.category,
                    description: item.description,
                };
            });
        } catch (error: any) {
            throw error.response?.data || error;
            
        }
    }

    const createPost = async (
        title: string,
        url: string,
        category: string,
        description: string
    ) => {
        try {
            const res = await api({
                url: '/posts',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
                data: {
                    title,
                    url,
                    category,
                    description,
                },
            });

        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const deletePost = async (id: string) => {
        try {
            const res = await api({
                url: 'posts/' + id,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            })
            console.log(res.data)
        } catch (error: any) {
            throw error.response?.data || error;
            
        }
    }

    return { createPost, allPosts, getAllPosts, deletePost, getAllPostsByCategory, allPostsByCategory, podcast, turismo, entrevistas, eventos, sketch };
});