import bg1 from '../../assets/home/chef-service.jpg'

const Description = () => {
    return (
        <div
        className="my-16 max-w-6xl bg-fixed mx-auto h-[400px] flex items-center justify-center"
        style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} >
            <div className='h-[300px] max-w-4xl bg-white flex items-center justify-center '>
                <div className='text-center space-y-4'>
                <h3 className='text-4xl font-bold '>Bistro Boss</h3>
                <p className='w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Description;