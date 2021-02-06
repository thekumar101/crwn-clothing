import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDOcument } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDOcument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            user: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });

          console.log(this.state)
        });
      }
      this.setState({user: userAuth});
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
