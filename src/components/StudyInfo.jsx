function StudyInfo({ title, desc, category }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>분류: {category}</p>
        </div>
    );
}

export default StudyInfo;