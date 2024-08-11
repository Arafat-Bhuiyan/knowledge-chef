const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <div className="bg-slate-200 p-4 m-4 rounded-lg">
                <h3 className="text-lg">{title}</h3>
            </div>
        </div>
    );
};

export default Bookmark;