<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { usePostsStore } from 'stores/post-store';
import { useRouter } from 'vue-router';

//Setup Ref for collect data
const title = ref('');
const category = ref('');
const url = ref('');
const description = ref('');
const loadding = ref(false);

//Activate tools
const $q = useQuasar();
const postsStore = usePostsStore();
const router = useRouter();

//Categorys Options for input
const categorys = ['PodCast', 'Turismo', 'Entrevistas', 'Eventos', 'Sketch'];

const handleSubmit = async () => {
    try {
        loadding.value = true; //Display loadding animation

        await postsStore.createPost(
            title.value,
            url.value,
            category.value,
            description.value
        );

        loadding.value = false; //Cancel loadding animation
        $q.notify('Post Guardado');

        //Clean data from stores
        title.value = '';
        category.value = '';
        url.value = '';
        description.value = '';
    } catch (error: any) {
        console.log('error', error);
        if (error.error) {
            alertDialogBackend(error.error);
        } else if (error.errors[0].msg) {
            alertDialogBackend(error.errors[0].msg);
        } else {
            alertDialogBackend();
        }
    }
};
const alertDialogBackend = (message = 'Error en el servidor') => {
    $q.dialog({
        title: 'Error',
        message,
    });
};
</script>

<template>
    <q-page class="row col-12 justify-center">
        <div class="col-12 col-sm-6 col-md-6 q-ml-md">
            <h3>Subir Post</h3>
            <q-form @submit.prevent="handleSubmit">
                <q-input
                    v-model="title"
                    label="Título:"
                    type="text"
                    dark
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>

                <q-select
                    v-model="category"
                    label="Categoría:"
                    :options="categorys"
                    dark
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-select>

                <q-input
                    v-model="url"
                    label="URL del vídeo:"
                    type="text"
                    dark
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>

                <q-input
                    v-model="description"
                    label="Descripción:"
                    type="text"
                    dark
                ></q-input>

                <div class="q-my-xl">
                    <q-btn label="Subir" color="primary" type="submit"></q-btn>
                    <q-spinner-pie color="primary" size="2em" v-if="loadding" />
                </div>
            </q-form>
        </div>
    </q-page>
</template>
