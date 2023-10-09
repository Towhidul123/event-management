import CardYoga from "../cardyoga/CardYoga";


const Card = ({ yogaCard }) => {

    console.log(yogaCard);
    return (
        <div><div>
            <h2 className="text-3xl font-bold text-center py-14 ">Choose a course <br />that fits your needs</h2>
        </div>
            <div className=" gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    yogaCard?.map((yogaCard) => (<CardYoga key={yogaCard.id} yogaCard={yogaCard}></CardYoga>))
                }
            </div>
        </div>
    );
};

export default Card;