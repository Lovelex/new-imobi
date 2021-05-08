import Vue from 'vue'
import mixinGlobalForm from '@/mixins/mixinGlobalFormRules'
import mixinGlobalmasks from '@/mixins/mixinGlobalMasks'
import mixinGlobalUser from '@/mixins/mixinGlobalUser'
import mixinGlobalVuetify from '@/mixins/mixinGlobalVuetify'

Vue.mixin(mixinGlobalForm)
Vue.mixin(mixinGlobalmasks)
Vue.mixin(mixinGlobalUser)
Vue.mixin(mixinGlobalVuetify)