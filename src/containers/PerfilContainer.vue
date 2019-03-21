<template>
    <ThePerfil :perfil="perfil"/>
</template>
<script>

import {mapState} from 'vuex';
import ThePerfil from '@/components/ThePerfil';

export default {   
    computed: mapState({
        perfil: state => state.articles.perfil
    }),
    components: {ThePerfil },
}
</script>
<style>

</style>
