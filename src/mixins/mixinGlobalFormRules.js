export default {
  data: () => ({
    inputRules: {
      required: v => (!!v && !!v.length ) || "O campo deve ser preenchido",
      fullName: v => (!!v && !!v.match(/\w+ \w+/g)) || "Você deve preencher seu nome completo",
      cepLength: v => (!!v && v.match(/\d/g).length === 8) || "CEP deve possuir 8 números",
      email: v => (!!v && /.+@.+\..+/.test(v)) || "E-mail precisa ser válido",
      min: v => (!!v && v.length >= 6) || "O senha dever ter no mínimo 6 caracteres",
      sms: v => !!v && v.match(/\d/g).length == 6 || "O código sms sevem ter 6 dígitos",
      ddd: v => (!!v && v.length === 2) || "DDD deve ter 2 dígitos",
      zip: v => (!!v && v.length === 8) || "CEP inválido",
      cpf: v => (!!v && v.match(/\d/g).length === 11) || "cpf inválido",
      onlyNumbers: v => (!(/\D/g.test(v))) || "Apenas números são permitidos",
      phone: v => {
        if(v && v.match(/\d/g)) {
          return (v.match(/\d/g).length === 10) || (v.match(/\d/g).length === 11) || 'Telefone Inválido'
        } else {
          return 'Telefone Inválido'
        }
      },
    }
  }),
}