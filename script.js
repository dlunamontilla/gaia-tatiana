
let producto = document.querySelectorAll(".producto");
let cars = document.querySelectorAll(".car");
let prod_car = document.querySelector('.prod');
let contador = document.querySelector('.contador');
let more = document.getElementById('more');
let borrar = document.querySelectorAll('.delete');

let info = [];
let cantidad = 0;
let cant2 = 0;

localStorage.clear();

cars.forEach(car => {
    car.addEventListener("click", () => {
        // localStorage.setItem(car.parentNode.children[1].textContent, [car.parentNode.children[2].textContent, car.parentNode.children[3].value])
        // info = [localStorage.getItem(car.parentNode.children[1].textContent).split(".")]

        if (parseInt(car.parentNode.children[3].value) > 0) {
            //aumentar el valor del contador en 1

            cantidad++
            contador.textContent = cantidad;
            prod_car.innerHTML += `
                            <div>
                                <div>
                                <p id="name" class="list_prod">
                                    ${car.parentNode.children[1].textContent}
                                </p>
                                <img src="${car.parentNode.children[0].src}" alt="flor" class="image">
                                </div>
                                <p id="price" class="list_prod">
                                ${car.parentNode.children[2].textContent}
                                </p>
                                <p id="cant" class="list_prod">
                                ${car.parentNode.children[3].value}
                                </p>
                                <div>
                                    <input type="submit" id="delete" value="-">
                                    <input type="submit" id="more" value="+">
                                </div>
                            </div>
`
        } else {
            alert("No ingreso cantidad");
        }
    })


})

borrar.forEach(bor => {
    bor.addEventListener('click', () => {
        let cant = document.querySelectorAll('#cant');
        cant2 = parseInt(bor.parentNode);
        console.log(cant2)
            // cant.textContent = cant2--;
    })
})





function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}

