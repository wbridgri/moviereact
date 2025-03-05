

import Card from "./Card"




const Movies = (props) => {



    const cardComponents = props.data.map(item => {


        return (
            <Card 
                key={item.id}
                id={item.id}
                imgUrl={item.imgUrl}
                director={item.director}
                title={item.title}
            />
        )
    })

    console.log(props)
return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        {cardComponents}

        </div>
    </div>
)


}

export default Movies