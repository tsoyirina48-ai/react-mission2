function CategoryFilter({
    category,
    setCategory,
    level,
    setLevel,
}) {
    return (
        <>
        <h2>카테고리 필터</h2>
    <div className="filter-buttons">
   <button onClick={() => setCategory("all")}>전체</button>
   <button onClick={() => setCategory("concept")}>concept</button>
   <button onClick={() => setCategory("library")}>library</button>
   <button onClick={() => setCategory("hook")}>hook</button>
   </div>


       <h2>난이도 필터</h2>
   <div className="level-buttons">
    <button onClick={() => setLevel("all")}>전체 난이도</button>
    <button onClick={() => setLevel("basic")}>basic</button>
    <button onClick={() => setLevel("intermediate")}>intermediate</button>
   </div>
   
        </>
    );
}
export default CategoryFilter;