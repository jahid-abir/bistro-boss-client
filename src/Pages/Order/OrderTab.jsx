/* eslint-disable react/prop-types */
import FoodCard from '../../Components/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-6 my-10'>
            {
                items.map(item => <FoodCard key={item._id} item={item}/>)
            }
        </div>
    );
};

export default OrderTab;