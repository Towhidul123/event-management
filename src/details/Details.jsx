

const Details = ({category}) => {

    const {id, img, title, categories, category_bg, card_bg, text_button_bg, description, price ,big } = category || {}
    console.log(category)

    return (
        <div>
            <div>
            <div className="   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <figure className="">
                    <img className="h-[700px] w-full object-cover object-center" src={img} alt="" />
                </figure>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                     {big}
                    </p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Details;