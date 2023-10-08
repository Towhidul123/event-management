import { NavLink } from "react-router-dom";


const CardYoga = ({yogaCard}) => {

    const {id, img, title, categories, category_bg, card_bg, text_button_bg, description, price  } = yogaCard || {}
    console.log(yogaCard)

    return (
        <div>
             <div className="flex  items-center justify-center object-center ">
            
                <div  className="relative flex w-[312px] flex-col rounded-xl  ">
                    <div className="relative  h-48 overflow-hidden rounded-xl ">
                        <img className="object-cover w-full h-full " src={img} alt="" />
                    </div>
                    <div  className="flex justify-between py-6">
                        
            
                        <p  className="block text-2xl font-bold  ">
                           {title}
                        </p>
                         
                        <p  className="  text-sm font-medium  py-1  ">
                              <span  className="px-[10px] py-[4px] rounded-sm">Price:${price}</span>
                            </p>
                        
                    </div>


                    <div>
                    <p  className="block text-lg font-semibold  ">
                           {description}
                        </p>
                    </div>


                    <div>
                        <NavLink to={`/card/${id}`}>    <button className="btn btn-primary">Details</button></NavLink>

                    </div>

                </div>
           
        </div>
        </div>
    );
};

export default CardYoga;