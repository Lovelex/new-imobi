// Auth
import getAuth from './authentication/getAuth'
import useAuth from './authentication/useAuth'
import user from './authentication/user'

// Firestore
import useAdd from './firestore/useAdd'
import useDel from './firestore/useDel'
import useUpdate from './firestore/useUpdate'

// Storage
import useStorage from './storage/useStorage'

export default { getAuth, useAdd, useAuth, useDel, useUpdate, useStorage, user }