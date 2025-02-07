const Modal = ({ blog, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-8 w-3/4 h-3/4 overflow-auto rounded-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl font-bold"
                >
                    X
                </button>
                <h1 className="text-4xl font-bold mb-4">{blog.blogTitle}</h1>
                <img
                    src={`http://localhost:3000/file-upload/${blog.img}`}
                    alt={blog.blogTitle}
                    className="w-full h-80 object-cover mb-4"
                />
                <p className="text-lg">{blog.blogContent}</p>
            </div>
        </div>
    );
};

export default Modal;