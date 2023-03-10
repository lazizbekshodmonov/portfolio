<script setup lang="ts">
import { ref } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map'

// const center = ref({ lat: -34.397, lng: 150.644 })
const center = { lat: 38.8382898, lng: 65.7930163 }

</script>

<template>
    <div class="map bg-white">
        <GoogleMap api-key="AIzaSyC-_D7tAHgWicxJ1oAWUb6sm5hgokC3DVI" style="width: 100%; height: 300px" :center="center"
            :zoom="15">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>


<style scoped lang="scss">
.map {
    width: 100%;
    height: 300px;
}
</style>