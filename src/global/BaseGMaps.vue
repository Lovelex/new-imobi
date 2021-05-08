<template>
  <div>
    <GmapMap
      :options="options"
      ref="mapRef"
      :zoom="18"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
      @click="changeImobileLatLng($event)"
      :center="{ lat: item.lat, lng: item.lng }"
    >
      <GmapMarker
        :position="{
          lat: location.lat || item.lat,
          lng: location.lng || item.lng,
        }"
        :clickable="true"
        :draggable="false"
      />
    </GmapMap>
    {{ item }} - {{ location }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    location: {
      type: Object,
      default: {
        lat: 0,
        lng: 0
      }
    }
  },
  
  computed: {
    options() {
      return {
        mapTypeId: "satellite",
        mapTypeIds: ["roadmap", "satellite"],
        mapTypeControl: true,
        clickableIcons: false,
        zoomControl: true,
        scaleControl: false,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUi: false,
      };
    },
  },

  methods: {
    changeImobileLatLng($event) {
      const mapRef = this.$refs.mapRef;
      this.location.lng = $event.latLng.lng();
      this.location.lat = $event.latLng.lat();
    },
  },
};
</script>