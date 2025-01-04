import featured from '../../assets/home/featured.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Featured = () => {
    return (
        <div className='my-10 pt-10 text-slate-50 bg-fixed' style={{backgroundImage: `url(${featured})`,backgroundPosition: 'center', backgroundSize:'cover'}}>
            <SectionTitle subTitle={'Check it Out'} title={'our featured item'}/>
            <div className='flex items-center justify-center p-16 gap-10'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div>
                    <p>20 August 2035</p>
                    <p>WHERE I CAN GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ullam velit ab similique magnam ut, quia aliquid sit quibusdam nihil placeat ratione sapiente? Temporibus vero atque dolor exercitationem ad est molestias, dolores mollitia sequi animi. Dolores iure tenetur autem voluptatibus.</p>
                    <button className='btn btn-outline border-0 border-b-4 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;