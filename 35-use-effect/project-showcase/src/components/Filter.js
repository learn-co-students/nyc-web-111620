function Filter({ phase, setPhase, searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="filter">
        <button
          className={phase === "All" ? "active" : null}
          onClick={() => setPhase("All")}
        >
          All
        </button>
        <button
          className={phase === 5 ? "active" : null}
          onClick={() => setPhase(5)}
        >
          Phase 5
        </button>
        <button
          className={phase === 4 ? "active" : null}
          onClick={() => setPhase(4)}
        >
          Phase 4
        </button>
        <button
          className={phase === 3 ? "active" : null}
          onClick={() => setPhase(3)}
        >
          Phase 3
        </button>
        <button
          className={phase === 2 ? "active" : null}
          onClick={() => setPhase(2)}
        >
          Phase 2
        </button>
        <button
          className={phase === 1 ? "active" : null}
          onClick={() => setPhase(1)}
        >
          Phase 1
        </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
}

export default Filter;
