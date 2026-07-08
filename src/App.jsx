
import { useState } from "react";
import StudyList from "./components/StudyList";
import StudyInfo from "./components/StudyInfo";
import './App.css';
import reactData from "./data/data.json";
console.log(reactData);


function App() {

const [category, setCategory] = useState("all");
const [keyword,setKeyword] = useState("");
const [selectedId, setSelectedId] = useState(null);
const handleSelect = (id) => {
  setSelectedId(id);

};
 
  const filteredData = reactData.filter((item) => {
  const categoryMatch = category === "all" ||
   item.category === category;
    const keywordMatch = item.title
    .toLowerCase()
    .includes(
      keyword.toLowerCase());
      return categoryMatch && keywordMatch;
});




 return (
  <>
  <h1>React Basic Review Mission2</h1>
  <p>전체 학습 항목 수:{reactData.length}개</p>
  <h2>첫 번째 데이터 출력</h2>
  <h2>카테고리 필터</h2>
  

  <div className="filter-buttons">
   <button onClick={() => setCategory("all")}>전체</button>
   <button onClick={() => setCategory("concept")}>concept</button>
   <button onClick={() => setCategory("library")}>library</button>
   <button onClick={() => setCategory("hook")}>hook</button>
  </div>

  <h2>검색</h2>
  <input 
  type="text"
   placeholder="제목 검색"
   value={keyword} 
   onChange={(e) => setKeyword(e.target.value)}
   />

  <StudyInfo
     title={reactData[0].title}
     desc={reactData[0].desc}
     category={reactData[0].category}
     />
     <h2>학습 목록</h2>
     <StudyList 
     items={filteredData}
     selectedId={selectedId}
     onSelect={handleSelect}
      />
  </>
 );
}
export default App;
