import * as firebase from "firebase";

export class AuthService {
  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(res => {
        console.log("response from signup", res);
      })
      .catch(error => {
        console.log("err in signup", error);
      });
  }
}
