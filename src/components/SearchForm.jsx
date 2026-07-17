function SearchForm({
    keyword,
    setKeyword,
    searchInputRef,
    previousKeywordRef,
    onFocusSearch,
    onReset,
}) {
    return (
        <>
          <h2>검색</h2>
   

  <div className="search-area">
  <input 
  type="text"
  ref={searchInputRef}
   placeholder="제목 검색"
   value={keyword} 
   onChange={(e) => {
    previousKeywordRef.current = keyword;
    setKeyword(e.target.value);
   }}
   />
   <button type="button" 
   onClick={onFocusSearch}>검색창으로 이동</button>
   <button type="button"
   onClick={onReset}>초가화</button>
   </div>
   
   <div className="keyword-info">
   <p>현재 검색어: {keyword || "없음"}</p>
   <p>이전 검색어: {previousKeywordRef.current || "없음"}</p>
   </div>
        </>
    );
}
export default SearchForm;