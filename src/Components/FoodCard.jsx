/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div className="card bg-base-100 rounded-none w-96 shadow-xl">
            <figure>
                <img className="w-full"
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="bg-black text-white absolute top-5 right-5 p-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 text-orange-600">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;