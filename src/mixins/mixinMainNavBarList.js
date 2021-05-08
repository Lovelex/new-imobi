export default {
  data: () => ({
    drops: [
      {
        name: "Alugar",
        menus: [
          {
            name: "Buscar imóveis",
            to: "MainSearchImobile",
          },
          {
            name: "Saber mais sobre alugar",
            to: "MainAboutRent",
          },
        ],
      },
      {
        name: "Anunciar",
        menus: [
          {
            name: "Anunciar imóvel",
            to: "MainAnnounce",
          },
          {
            name: "Saber mais sobre anunciar",
            to: "MainAboutAnnounce",
          },
        ],
      },
      {
        name: "Indicar",
        menus: [
          {
            name: "Indicar imóvel",
            to: "MainIndicate",
          },
          {
            name: "Saber mais sobre indicar",
            to: "MainAboutIndicate",
          },
        ],
      },
    ],
    items: [
      {
        name: "Sobre",
        to: "MainAbout",
      },
      {
        name: "Contato",
        to: "MainContact",
      },
    ],
  }),

}