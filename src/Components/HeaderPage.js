import React from 'react';

function Header() {
    return (
        <header class="layout__header">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7d_CFcJu9-teL-cVfl_hQ5qGJZTTRLMpq3Q&usqp=CAU"
                            class="d-block w-100 img-carousel" alt="conejito 1" width="200px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://imagenes.20minutos.es/files/image_990_v3/files/fp/uploads/imagenes/2022/07/21/conejos-enanos.r_d.960-642-5156.jpeg"
                            class="d-block w-100 img-carousel" alt="conejito 2" width="200px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuAUuhbBxIij0A5FoIq1sW6EwWR-I66PlUg&usqp=CAU"
                            class="d-block w-100 img-carousel" alt="conejito 3" width="200px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i0.wp.com/lavozdigitalpr.com/wp-content/uploads/2021/03/Conejito-con-un-pollito.jpg?fit=1140%2C560&ssl=1"
                            class="d-block w-100 img-carousel" alt="conejito 4" width="200px"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </header>
    );
}

export default Header;
