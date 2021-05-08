import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBwoZrtw0Y0-XM-kocZDJflbS3U6FOkzzs',
    libraries: 'places', 
  },

})