<template>
    <TheExperiencia :experienciaLista="experiencia"/>
</template>

<script>
import TheExperiencia from '@/components/TheExperiencia';
import { mapState } from 'vuex';

export default {
     computed: mapState({
        experiencia: state => state.articles.experiencia
     }),
    components: { TheExperiencia }
}
</script>

