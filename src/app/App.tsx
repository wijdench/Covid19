import { Route } from 'react-router-dom';
import { RouteStats } from './constants/route'
import Stat from './routes/Stat';

function App(): JSX.Element {

  return (
    <Route component={Stat} exact path={RouteStats}></Route>
  );
}
export default App;