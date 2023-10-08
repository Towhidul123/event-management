import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Details from "./Details";


const CardDetails = () => {


    const [category, setCategory] = useState();

    const categories = useLoaderData();
    const { id } = useParams();
    

    useEffect(() => {
        const findCategory = categories?.find(category => category.id == id)

        setCategory(findCategory);

    }, [id, categories])

    console.log(category)



    return (
        <Details category={category}></Details>
    );
};

export default CardDetails;