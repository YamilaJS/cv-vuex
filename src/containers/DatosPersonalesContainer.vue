<template>
    <TheDatosPersonales :DatosPersonalesLista="datosPersonales"/>
</template>


<script>

import TheDatosPersonales from '@/components/TheDatosPersonales';
import { mapState } from 'vuex';

export default {
    components: { TheDatosPersonales },
    computed: mapState({
        datosPersonales: state => state.articles.datosPersonales
     }),
}
</script>
