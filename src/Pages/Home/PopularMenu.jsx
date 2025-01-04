import SectionTitle from '../../Components/SectionTitle';
import MenuCard from './MenuCard';
import useMenu from '../../hook/useMenu';
const PopularMenu = () => {
    const {menu,loading} = useMenu()
    if(loading){
        return <span className="loading loading-dots loading-md"></span>
    }
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div>
            <SectionTitle subTitle={'Check it Out'} title={'from our menu'}/>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
                {
                    popular.map(menu => <MenuCard key={menu._id} menu={menu}/>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;