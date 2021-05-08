import { auth } from '../plugins/firebase'

import MainHome from '@/views/main/MainHome'
import MainLogin from '@/views/main/MainLogin'
import MainProfile from '@/views/main/MainProfile'
import MainProfileUserInfo from '@/views/main/MainProfileUserInfo'
import MainProfileUserIndications from '@/views/main/MainProfileUserIndications'
import MainProfileUserSchedules from '@/views/main/MainProfileUserSchedules'
import MainProfileUserProposals from '@/views/main/MainProfileUserProposals'
import MainProfileUserImobiles from '@/views/main/MainProfileUserImobiles'
import MainAnnounce from '@/views/main/MainAnnounce'

export default [
  {
    path: '',
    name: 'MainHome',
    component: MainHome
  },
  {
    beforeEnter(to, from , next) {
      !auth.currentUser ? next() : next({ name: "MainProfile" })
    },
    path: '/login',
    name: 'MainLogin',
    component: MainLogin
  },
  {
    beforeEnter(to, from , next) {
      auth.currentUser ? next() : next({ name: "MainLogin" })
    },
    path: '/meu-perfil',
    component: MainProfile,
    children: [
      {
        path: "",
        name: "MainProfile",
        component: MainProfileUserInfo
      },
      {
        path: "minhas-indicacoes",
        name: "MainProfileUserIndications",
        component: MainProfileUserIndications
      },
      {
        path: "meus-agendamentos",
        name: "MainProfileUserSchedules",
        component: MainProfileUserSchedules
      },
      {
        path: "minhas-propostas",
        name: "MainProfileUserProposals",
        component: MainProfileUserProposals
      },
      {
        path: "meus-imoveis",
        name: "MainProfileUserImobiles",
        component: MainProfileUserImobiles
      },
    ]
  },
  {
    path: "/anunciar",
    name: "MainAnnounce",
    component: MainAnnounce
  }
]