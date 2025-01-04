/* eslint-disable react/prop-types */


const SectionTitle = ({subTitle,title}) => {
    return (
        <div className="w-3/12 mx-auto my-10">
          <p className="text-[#D99904] mb-3 text-center">--- {subTitle} ---</p>
          <h3 className="text-3xl font-bold uppercase border-y-4 p-3 text-center">{title}</h3>  
        </div>
    );
};

export default SectionTitle;