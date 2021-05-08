const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp()

const adminClain = { isAdmin: false }

async function createCustomClaim(uid, customClaim) {
  try {
    return await admin.auth().setCustomUserClaims(uid, customClaim)
  } catch (e) {
    console.log(e)
  }
}

exports.createUserOnDb = functions.auth.user().onCreate(async user => {
  await createCustomClaim(user.uid, adminClain)
  const docRef = admin.firestore().collection("users").doc(user.uid)

  const newUser = {
    id: user.uid,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    phone: user.phoneNumber || "",
    email: user.email || "",
    name: "",
    bankName: "",
    bankAgency: "",
    bankAccount: "",
    cpf: "",
    userImobiles: [],
    userIndications: [],
    userSchedules: [],
    userProposals: []
  }
  docRef.set(newUser)
})

exports.deleteUserOnDb = functions.auth.user().onDelete(async user => {
  const docRef = admin.firestore().collection("users").doc(user.uid)
  docRef.delete()
})

exports.isUserAdmin = functions.https.onCall((data, context) => {
  return admin
    .auth()
    .getUser(context.auth.uid)
    .then((userRecord) => {
      return userRecord.customClaims['isAdmin']
    });
})

exports.createImobile = functions.https.onCall(async (data, context) => {
  const docRef = admin.firestore().collection("imobiles").doc()
  const dataItems = [data.address, data.state, data.city, data.district, data.road, data.number, data.lat, data.lng]
  const isDataValid = dataItems.every(dataItem => dataItem)
  if(!context.auth) {
    throw new functions.https.HttpsError("permission-denied", "Usuário deve estar logado.")
  }
  if(!isDataValid) {
    throw new functions.https.HttpsError("invalid-argument", "Todos os campos obrigatórios devem ser preenchidos.")
  }

  const dataFromFrontEnd = {
    address: data.address,
    zip: data.zip || "",
    state: data.state,
    city: data.city,
    district: data.district,
    road: data.road,
    number: data.number,
    addressComponents: data.addressComponents,
    lat: data.lat,
    lng: data.lng
  }
  
  return docRef.set({
    ...dataFromFrontEnd,
    status: "creating",
    fromUser: context.auth.uid,
    schedulesFrom: [],
    proposalsFrom: [],
    imobileType: ""
  })
})