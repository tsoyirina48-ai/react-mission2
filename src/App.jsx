import CategoryFilter from "./components/CategoryFilter";
import SearchForm from "./components/SearchForm";
import StudySummary from "./components/StudySummary";
import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import StudyList from "./components/StudyList";
import StudyInfo from "./components/StudyInfo";
import './App.css';
import reactData from "./data/data.json";
console.log(reactData);


function App() {

  const previousKeywordRef = useRef("");
  const renderCount = useRef(0);
  const searchInputRef = useRef(null);
 const [favoriteIds, setFavoriteIds] = useState([]);
const [favoriteOnly, setFavoriteOnly] = useState(false); 

const [level, setLevel] = useState("all");
const [category, setCategory] = useState("all");
const [keyword,setKeyword] = useState("");
const [selectedId, setSelectedId] = useState(null);
const handleSelect = (id) => {
  setSelectedId(id);

};
useEffect(() => {
  previousKeywordRef.current = keyword;
}, [keyword]);

const handleToggleFavorite = useCallback((id) => {
  setFavoriteIds((prev) => prev.includes(id) ? prev.filter((itemId) => 
  itemId !== id) : [...prev, id]
);
}, []);
 
  const filteredData = useMemo(() => {

    return reactData.filter((item) => { 
  const categoryMatch = category === "all" ||
   item.category === category;
    const keywordMatch = item.title
    .toLowerCase()
    .includes(
      keyword.toLowerCase());
      
      const favoriteMatch = !favoriteOnly || favoriteIds.includes(item.id);
       const levelMatch = level === "all" || item.level === level;

    return (
    categoryMatch && 
    keywordMatch && 
    favoriteMatch &&
    levelMatch
    );
 });
}, [keyword, category, favoriteOnly, favoriteIds, level]);

    const summary = useMemo(() => {
      return {
        total: reactData.length,
        visible: filteredData.length,
        favorite: favoriteIds.length,
      };
    }, [filteredData, favoriteIds]);

    const handleFocusSearch = () => {
      searchInputRef.current?.focus();
    };
    useEffect(() => {
      searchInputRef.current?.focus();
    }, []);
    renderCount.current += 1;
    const handleReset = () => {
      setKeyword("");
      setCategory("all");
      setFavoriteOnly(false);
      setLevel("all");
      previousKeywordRef.current = "";
      searchInputRef.current?.focus();
    };
   
 return (
  <>
  <p className="mission-title">React Basic Review Mission8</p>
  <h1>React Hooks 학습 목록 관리</h1>
  <p>useState, useMemo, useCallback, useRef를 활용한 복습 미션입니다.</p>
      
    <SearchForm
      keyword={keyword}
      setKeyword={setKeyword}
      searchInputRef={searchInputRef}
      previousKeywordRef={previousKeywordRef}
      onFocusSearch={handleFocusSearch}
      onReset={handleReset}
      />
  
    <CategoryFilter
       category={category}
       setCategory={setCategory}
       level={level}
       setLevel={setLevel}
       />
  
   <div className="favorite-filter">
   <button onClick={() => setFavoriteOnly((prev) => !prev)}>
    {favoriteOnly ? "전체 항목 보기" : "즐겨찾기만 보기"}
   </button>
  </div>
   
   <StudySummary summary={summary}
   renderCount={renderCount.current}
   />

     <h2>학습 목록</h2>
     {filteredData.length === 0 && (
      <p className="empty-message">조건에 맞는 학습 항목이 없습니다.</p>
     )}
     {filteredData.length > 0 && ( 
     <StudyList 
     items={filteredData}
     selectedId={selectedId}
     onSelect={handleSelect}
     favoriteIds={favoriteIds}
     onToggleFavorite={handleToggleFavorite}
      />
      )}
  </>
 );
}
export default App;
