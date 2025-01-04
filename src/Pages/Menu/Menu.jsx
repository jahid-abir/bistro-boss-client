import { Helmet } from "react-helmet";
import coverImg from '../../assets/menu/banner3.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hook/useMenu";
import Cover from "../../Shared/Cover";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const {menu,loading} = useMenu()
    if(loading){
        return <span className="loading loading-dots loading-md"></span>
    }
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={coverImg} title={'our menu'} />
            <SectionTitle subTitle={"don't miss" } title={"today's offer"}/>
            <MenuCategory item={offered}/>
            <MenuCategory item={dessert} img={dessertImg} title={'desert'} />
            <MenuCategory item={pizza} img={pizzaImg} title={'pizza'} />
            <MenuCategory item={salad} img={saladImg} title={'salad'} />
            <MenuCategory item={soup} img={soupImg} title={'soup'} />
        </div>
    );
};

export default Menu;