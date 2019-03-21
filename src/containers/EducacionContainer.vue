<template>
    <TheEducacion :educacionLista="educacion"/>
</template>

<script>
import TheEducacion from '@/components/TheEducacion';
import { mapState } from 'vuex';

export default {
     computed: mapState({
        educacion: state => state.articles.educacion
     }),
     components: { TheEducacion },
}
</script>

