import Vue from 'vue'
import { CurrencyDirective } from 'vue-currency-input'
import VueCurrencyInput from 'vue-currency-input'
import {mask} from 'vue-the-mask'

const pluginOptions = {
  /* see config reference */
  globalOptions: { currency: 'BRL' }
}

Vue.use(VueCurrencyInput, pluginOptions)

Vue.directive('mask', mask)
Vue.directive('currency', CurrencyDirective)