import './App.less';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './route/index';

function App() {
  return (
<div className="App">
<BrowserRouter>

                    {routes.map((route, i) => (
                        <Route
                            key={i}
                            path={route.path}
                            render={(props) => (
                                <route.component
                                    {...props}
                                />
                            )}
                        />
                    ))}
                    </BrowserRouter>
    </div>
  );
}

export default App;
