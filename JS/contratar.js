const personas_oficios = [
    {
        "id": 1,
        "persona":"Elisa",
        "oficio": "Publicista"
    },
    {
        "id": 2,
        "persona":"Melisa",
        "oficio": "Abogada"
    },
    {
        "id": 3,
        "persona":"Aldo",
        "oficio": "Administrador"
    },
    {
        "id": 4,
        "persona":"Briana",
        "oficio": "Contador"
    },
    {
        "id": 5,
        "persona":"Damaris",
        "oficio": "Programador"
    },
    {
        "id": 6,
        "persona":"Julio",
        "oficio": "Publicista"
    },
    {
        "id": 7,
        "persona":"Rosa",
        "oficio": "Diseñador Web"
    },
    {
        "id": 8,
        "persona":"Magaly",
        "oficio": "Diseñador Gráfico"
    },
    {
        "id": 9,
        "persona":"Carmen",
        "oficio": "Relacionista"
    },
    {
        "id": 10,
        "persona":"Jenny",
        "oficio": "Enfermera"
    },
    {
        "id": 11,
        "persona":"Jorge",
        "oficio": "Psicóloga"
    },
    {
        "id": 12,
        "persona":"Derlene",
        "oficio": "Mecánico"
    },
    {
        "id": 13,
        "persona":"Lisa",
        "oficio": "Bombero"
    },
    {
        "id": 14,
        "persona":"Sandro",
        "oficio": "Seguridad"
    },
    {
        "id": 15,
        "persona":"Mateo",
        "oficio": "Recursos Humanos"
    },
    {
        "id": 16,
        "persona":"Abigail",
        "oficio": "Oficinista"
    }
];

function setContratos(){
    const contElement = document.getElementById("per_cont");
    let contenido = "";
    personas_oficios.forEach(function(perOficios) { 
        const template = `
            <div class="perOficios">
                <div class="dataPersonas">
                    <h3>${perOficios.persona}</h3>
                    <p>${perOficios.oficio}</p>
                </div>
                <div class="actions" data-id="${perOficios.id}">
                    <div class="buttonsend">
                        <button class="btn" id="sendBtn">
                            Contratar
                        </button>
                    </div>
                </div>
            </div>
        `;
        contenido = contenido + template;
    });
    contElement.innerHTML = contenido;
    actionsButtons();
}

function actionsButtons() {
    const buttons = document.querySelectorAll(".buttonsend button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            const personaId = event.target.parentElement.parentElement.dataset.id;
            const personaContratada = personas_oficios[personaId - 1];
            console.log("Contratado:", personaContratada.persona);
        });
    });
}

setContratos();
