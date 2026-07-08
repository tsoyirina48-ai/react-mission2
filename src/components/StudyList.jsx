function StudyList({ items, selectedId, onSelect }) {
    return (
        <>
        {items.map((item) => (
            <div key={item.id}
            className={selectedId === item.id ? "active" : "card"}
            onClick={() => onSelect(item.id)}
            >
              <h2>{item.id}. {item.title}</h2>
              <p>{item.desc}</p>
              <p>분류: {item.category}</p>
              {selectedId === item.id && (
                <p>선택된 항목입니다</p>
              )}
            </div>
        ))}
        </>
    );
}

export default StudyList;