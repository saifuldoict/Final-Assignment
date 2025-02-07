const Loader = () => {
    return (
        <section className="w-[100%] h-[100vh] bg-purple-100 bg-opacity-50 flex items-center justify-center absolute z-[999]">
            <div className="atom-spinner">
                <div className="spinner-inner">
                    <div className="spinner-line"/>
                    <div className="spinner-line"/>
                    <div className="spinner-line"/>
                    {/*Chrome renders little circles malformed :(*/}
                    <div className="spinner-circle">●</div>
                </div>
            </div>

        </section>
    );
};

export default Loader;