/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
            className="mb-16 h-[700px] flex items-center justify-center"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} >
            <div className='h-[500px] max-w-5xl bg-black bg-opacity-40 flex items-center justify-center text-white'>
                <div className='text-center space-y-4'>
                    <h3 className='text-4xl font-bold uppercase '>{title}</h3>
                    <p className='w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;