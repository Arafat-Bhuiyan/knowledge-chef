import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full h-[450px] mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 h-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='text-xs font-semibold text-slate-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button><CiBookmark
                        onClick={() => handleBookmark(blog)}
                        className='ml-2'>
                    </CiBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl mb-4'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>{hash}</a></span>)
                }
            </p>
            <button className='text-purple-800 font-bold underline' onClick={() => handleReadingTime(id, reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default Blog;