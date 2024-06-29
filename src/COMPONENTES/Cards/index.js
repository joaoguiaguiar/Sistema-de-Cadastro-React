import './Card.css'


const Card = () => {

    return (

        <section className='sectionCard'>
            <h2>Marcas</h2>

            <div className="container container__cards row mx-auto" style={{ maxWidth: '800px' }}>
                <div className="col-6 col-xl-2 col-md-4 g-4">

                    <div className="card cards__mover">

                        <img src='./imagens-card/logo nike.png' alt='Logo nike' />
                        <div className="card-body">
                        </div>
                    </div>
                </div>

                <div className="col-6 col-xl-2 col-md-4 g-4">
                    <div className="card cards__mover">
                        <img src='./imagens-card/logo lacoste.png' alt='Logo lacoste ' />
                        <div className="card-body">
                        </div>
                    </div>
                </div>



                <div className="col-6 col-xl-2 col-md-4 g-4">
                    <div className="card cards__mover">
                        <img src='./imagens-card/logo adidas.png' alt='Logo Adidas ' />
                        <div className="card-body">
                        </div>
                    </div>
                </div>

                <div className="col-6 col-xl-2 col-md-4 g-4">
                    <div className="card cards__mover">
                        <img src='./imagens-card/puma.png' alt='Logo Puma ' />
                        <div className="card-body">
                        </div>
                    </div>
                </div>




            </div>


        </section>

    )
}

export default Card;