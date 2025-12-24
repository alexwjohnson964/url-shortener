import "./App.css";

function App() {
  return (
    <>
      <div></div>
      <h1>URL Shortener</h1>
      <div className="card">
        <p>
          <form>
            <label htmlFor = "url">Enter a URL</label>
            <input name ="url" type="text"></input>
            <br></br>
            <button>Generate short URL</button>
          </form>
        </p>
      </div>
    </>
  );
}

export default App;
