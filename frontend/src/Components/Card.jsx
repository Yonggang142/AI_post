


export default function Card({item, add_likes}) {

    function buttonClick() {

        add_likes()

    }

    return (
        <div className="card">
            <img 
                src={item.url}
                alt="amazing"
            />
            <h2>
                Likes: {item.likes}
            </h2>

            <button onClick={buttonClick}>
                like
            </button>

        </div>

    )


}