import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  uri: "http://api.spacex.land/graphql/"
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>SpaceX</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
