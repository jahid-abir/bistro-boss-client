/* eslint-disable react/prop-types */


const MenuCard = ({menu}) => {
    const {name,recipe,image,price} = menu
    return (
        <div className="flex gap-3">
           <img className="h-24 w-28" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" /> 
           <div>
            <h3>{name}</h3>
            <p>{recipe}</p>
           </div>
           <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuCard;