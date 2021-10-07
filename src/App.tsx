import { Forms } from './components/Forms';
import './styles/App.css';

export default function App() {
  return (
    <div className="App">
      <div className="content boxDefault">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutoriais is great, but understanding how developers think is invaluable.</p>
      </div>
      <Forms />
    </div>
  );
}