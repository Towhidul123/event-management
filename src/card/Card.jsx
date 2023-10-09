import CardYoga from "../cardyoga/CardYoga";


const Card = ({yogaCard}) => {

    console.log(yogaCard);
    return (
        <div className="mt-96 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {
             yogaCard ?.map((yogaCard)=>(<CardYoga key={yogaCard.id} yogaCard={yogaCard}></CardYoga>))
            }
        </div>
    );
};

export default Card;