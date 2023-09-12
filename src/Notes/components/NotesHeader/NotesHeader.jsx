import "./NotesHeader.css";

export default function NotesHeader() {
  return (
    <header>
      <p className="username">Wei's notes</p>
      <div className="search-container">
        <input type="text" id="search-field" placeholder="Search note" />
        <button id="search-btn">Search</button>
      </div>
      <button>+ Add Note</button>
    </header>
  );
}
