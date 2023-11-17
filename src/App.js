import './App.css';
import Price1 from './Price1..jsx';

function App() {
  return (
  <section class="pricing py-5">
  <div class="container">
    <div class="row">

    <Price1 plan="FREE" prices="$0" user="single" Storage="1gb" Projects="limited" Access="limited"></Price1>
    <Price1 plan="PLUS" prices="$25" user="5 USER"Storage="4gb" Projects="unlimited" Access="unlimited"></Price1>
    <Price1 plan="PRO" prices="$50" user="UNLIMITED"Storage="12gb" Projects="unlimited" Access="unlimited"></Price1>
    </div>
    </div>
    </section>
  );
}

export default App;
