<script setup lang="ts">
//Import Tools
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useUserStore } from 'stores/user-store';

//Logic
const $q = useQuasar();
const userStore = useUserStore();
const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const repassword = ref('');
const loadding = ref(false);
const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;
        await userStore.register(name.value, email.value, password.value);
        router.push('/');
        email.value = '';
        password.value = '';
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
            <h3>Bienvenido(a) a Bordo</h3>
            <q-form @submit.prevent="handleSubmit">
                <q-input
                    v-model="name"
                    label="Ingresa tu Nombre Completo"
                    type="text"
                    dark
                ></q-input>

                <q-input
                    v-model="email"
                    label="Ingrese email"
                    type="text"
                    dark
                    :rules="[
                        (val) =>
                            (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                            'Formato email incorrecto',
                    ]"
                ></q-input>

                <q-input
                    v-model="password"
                    label="Ingrese contraseña"
                    type="password"
                    dark
                    :rules="[
                        (val) =>
                            (val && val.length > 5) ||
                            'Contraseña mínimo 6 carácteres',
                    ]"
                ></q-input>

                <q-input
                    v-model="repassword"
                    label="Repita contraseña"
                    type="password"
                    dark
                    :rules="[
                        (val) =>
                            (val && val === password) ||
                            'No coinciden las contraseñas',
                    ]"
                ></q-input>

                <q-btn
                    label="Registrarme"
                    color="primary"
                    type="submit"
                ></q-btn>
                <q-spinner-pie color="primary" size="2em" v-if="loadding" />
            </q-form>
            <div class="q-mt-xl">
                <p>¿Ya tienes una cuenta?</p>
                <q-btn to="login" color="primary">Iniciar Sesión</q-btn>
            </div>
        </div>
    </q-page>
</template>

<style></style>
