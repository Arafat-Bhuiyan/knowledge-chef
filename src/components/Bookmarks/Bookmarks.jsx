import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h2 className="text-lg text-center bg-slate-200 p-4 rounded-lg m-4">Spent time on read: {readingTime} min</h2>
            </div>
            <h2 className="text-lg text-center bg-slate-200 p-4 rounded-lg m-4">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;