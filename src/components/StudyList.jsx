import StudyItem from "./StudyItem";

function StudyList({ items, selectedId, onSelect, favoriteIds, onToggleFavorite }) {
    return (
        <>
        {items.map((item) => (
           <StudyItem
           key={item.id}
           item={item}
           isSelected={selectedId === item.id}
           onSelect={onSelect}
           isFavorite={favoriteIds.includes(item.id)}
           onToggleFavorite={onToggleFavorite}
           />
        ))}
        </>
    );
}

export default StudyList;