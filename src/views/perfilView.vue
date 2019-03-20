<template>
  <div class="perfilView">
    <h1>Mi Perfil</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <PerfilContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import PerfilContainer from '@/containers/PerfilContainer';

export default {
  name: 'perfilView',
  components: {
    PerfilContainer
  }
}
</script>
