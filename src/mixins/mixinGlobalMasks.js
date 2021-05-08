export default {
  data: () => ({
    mask: {
      cpf: {
        placeholder: '___.___.___-__',
        mask: '###.###.###-##',
      },
      cnpj: {
        placeholder: '__.___.___/____-__',
        mask: '##.###.###/####-##',
      },
      phone: {
        placeholder: '(__) _____-____',
        mask: '(##) ####-####'
      },
      cell: {
        placeholder: '(__) _____-_____',
        mask: '(##) #####-####'
      },
      date: {
        placeholder: '__/__/____',
        mask: '##/##/####'
      },
      cep: {
        placeholder: '_____-___',
        mask: '#####-###'
      },
      bankAccount: {
        placeholder: '________-_',
        mask: '########-#'
      },
      bankAgency: {
        placeholder: '____',
        mask: '####'
      },
      smsConfirm: {
        placeholder: '___ ___',
        mask: '### ###'
      }

    }
  })
}