import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import RocketList from './components/rocketList.js';


const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/"
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>SpaceX</h1>
        <RocketList />
      </div>
    </ApolloProvider>
  );
}

export default App;
