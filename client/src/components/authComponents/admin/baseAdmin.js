import * as firebaseAdmin from "firebase-admin";
import "firebase-admin";


const Admin = firebaseAdmin.initializeApp({
  type: process.env.REACT_APP_FIREBASEADMIN_TYPE ,
  project_id: process.env.REACT_APP_FIREBASEADMIN_PROJECT_ID ,
  private_key_id: process.env.REACT_APP_FIREBASEADMIN_PRIVATE_KEY_ID ,
  private_key: process.env.REACT_APP_FIREBASEADMIN_PRIVATE_KEY ,
  client_email: process.env.REACT_APP_FIREBASEADMIN_CLIENT_EMAIL ,
  client_id: process.env.REACT_APP_FIREBASEADMIN_CLIENT_ID ,
  auth_uri: process.env.REACT_APP_FIREBASEADMIN_AUTH_URI ,
  token_uri: process.env.REACT_APP_FIREBASEADMIN_TOKEN_URI ,
  auth_provider_x509_cert_url: process.env.REACT_APP_FIREBASEADMIN_AUTH_PROVIDER_X509_CERT_URL ,
  client_x509_cert_url: process.env.REACT_APP_FIREBASEADMIN_CLIENT_X509_CERT_URL 

});

export default Admin;