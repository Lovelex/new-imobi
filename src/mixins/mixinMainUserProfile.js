export default {
  data: () => ({
    userProfileNavigations: [
      {
        icon: "mdi-cog",
        label: "Meu Perfil",
        to: "MainProfile",
      },
      {
        icon: "mdi-cog",
        label: "Meus Imóveis",
        to: "MainProfileUserImobiles",
      },
      {
        icon: "mdi-cog",
        label: "Minhas Indicações",
        to: "MainProfileUserIndications",
      },
      {
        icon: "mdi-cog",
        label: "Meus Agendamentos",
        to: "MainProfileUserSchedules",
      },
    ]
  })
}