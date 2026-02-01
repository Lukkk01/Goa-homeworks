function DisplayComponent() {
  const [data, setData] = useState(null);

  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("userData");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  };

  return (
    <div>
      <h2>Display Component</h2>

      <button onClick={getDataFromLocalStorage}>
        მონაცემების ჩვენება
      </button>

      <br /><br />

      {data && (
        <div>
          {data.name && <p>სახელი: {data.name}</p>}
          {data.email && <p>ელ. ფოსტა: {data.email}</p>}
          {data.age && <p>ასაკი: {data.age}</p>}
        </div>
      )}
    </div>
  );
}