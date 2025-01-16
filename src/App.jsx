function App() {
  return (
    <div className="container">
      <h1>Digital Clock</h1>
      <Clock />
    </div>
  );
}

export default App;

function Clock() {
  return <div className="clock">00:00 PM</div>;
}
