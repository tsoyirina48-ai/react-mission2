import { memo } from "react";

function StudyItem({
    item,
    isSelected,
    onSelect,
    isFavorite,
    onToggleFavorite,
}) {
    console.log(`${item.title} 렌더링`);
    return (
        <li className={`card ${isSelected ? "active" : ""}`}
        onClick={() => onSelect(item.id)}>

            <div className="card-content">
            <h3>{item.id}. {item.title}</h3>
            <p>{item.desc}</p>
            <p className="item.meta">분류: {item.category} / 난이도: {item.level}</p>
            {isSelected && <p>선택된 항목입니다</p>}
          </div>  
            <button type="button"
            onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(item.id);
            }}>
                {isFavorite ? "★ 즐겨찾기 해제" : "☆ 즐겨찾기"}
            </button>
        </li>
    );
}
export default memo(StudyItem);