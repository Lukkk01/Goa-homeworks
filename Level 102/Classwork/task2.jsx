const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log("Theme changed:", state);
  }, [state]);

  const toggle = () => {
    setState(prev => !prev);
  };

  return [state, toggle];
};

export default function App() {
  const [isDarkMode, toggleTheme] = useToggle(false);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}