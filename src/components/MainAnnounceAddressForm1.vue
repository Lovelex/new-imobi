<template>
  <v-form @submit.stop.prevent autocomplete="nope">
    <v-autocomplete
      autocomplete="disable"
      placeholder="Endereço do local"
      persistent-hint
      hint="EX:Rua São Paulo, 88 - Centro, Belo Horizonte - MG, 30170-130"
      id="autocomplete"
      v-model="address"
      :outlined="false"
      :rounded="true"
      :solo="true"
      :single-line="true"
      :hide-no-data="true"
      :allow-overflow="false"
    ></v-autocomplete>
    <div v-if="item.address">
      <span class="caption font-weight-medium">Sua localização:</span>
      <div class="d-flex align-start">
        <v-icon class="mr-2"> mdi-map-marker </v-icon>
        <span class="font-weight-bold">
          {{ item.address }}
        </span>
      </div>
    </div>
    <div class="d-flex justify-end">
      <v-btn @click="getGeocode" color="primary"> Buscar Endereço </v-btn>
    </div>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    address: "",
  }),
  computed: {
    item() {
      return this.$store.getters["mainAnnounce/getItem"];
    },
  },
  methods: {
    async getGeocode() {
      const resp = await axios(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.item.address}&key=AIzaSyBwoZrtw0Y0-XM-kocZDJflbS3U6FOkzzs`
      );
      console.log(resp.data);
      if (resp.data.status === "OK") {
        this.nextWindow();
      }
    },
    nextWindow() {
      this.$store.commit("mainAnnounce/nextWindow");
    },
  },
  mounted() {
    const input = document.querySelector("#autocomplete");
    this.autocomplete = new google.maps.places.Autocomplete(input, {
      types: ["geocode"],
    });
    this.autocomplete.setComponentRestrictions({
      country: ["br"],
    });

    const getAddressComponent = (place, addressType) => {
      return place.address_components.find((addressComponent) => {
        return addressComponent.types.includes(addressType);
      });
    };
    const addressTypes = {
      zip: "postal_code",
      state: "administrative_area_level_1",
      city: "administrative_area_level_2",
      district: "sublocality_level_1",
      road: "route",
      number: "street_number",
    };
    const setAddress = (place) => {
      this.item.zip = getAddressComponent(place, addressTypes.zip)
        ? getAddressComponent(place, addressTypes.zip).long_name
        : "";
      this.item.state = getAddressComponent(place, addressTypes.state)
        ? getAddressComponent(place, addressTypes.state).long_name
        : "";
      this.item.city = getAddressComponent(place, addressTypes.city)
        ? getAddressComponent(place, addressTypes.city).long_name
        : "";
      this.item.district = getAddressComponent(place, addressTypes.district)
        ? getAddressComponent(place, addressTypes.district).long_name
        : "";
      this.item.road = getAddressComponent(place, addressTypes.road)
        ? getAddressComponent(place, addressTypes.road).long_name
        : "";
      this.item.number = getAddressComponent(place, addressTypes.number)
        ? getAddressComponent(place, addressTypes.number).long_name
        : "";
    };

    this.autocomplete.addListener("place_changed", () => {
      let place = this.autocomplete.getPlace();
      this.item.addressComponents = place.address_components;
      this.item.address = place.formatted_address;
      this.item.lat = place.geometry.location.lat();
      this.item.lng = place.geometry.location.lng();

      setAddress(place);
    });
  },
};
</script>

<style>
</style>