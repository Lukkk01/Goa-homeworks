function Info() {
  return (
    <p>Hello React</p>
  );
}

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(Info());