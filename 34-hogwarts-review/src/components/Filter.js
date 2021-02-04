function Filter({ showGreased, setShowGreased }) {
  return (
    <div>
      <label>
        Show Greased Only?
        <input
          type="checkbox"
          checked={showGreased}
          onChange={(e) => setShowGreased(e.target.checked)}
        />
      </label>
    </div>
  );
}

export default Filter;
