function App() {
  const isSuccess = true;

  return (
    <div>
      {isSuccess && <p>ეს პარაგრაფი ჩანს მხოლოდ მაშინ, როცა isSuccess = true</p>}

      {isSuccess ? (
        <p>ოპერაცია წარმატებით დასრულდა</p>
      ) : (
        <p>ოპერაცია ვერ შესრულდა</p>
      )}
    </div>
  );
}

export default App;
