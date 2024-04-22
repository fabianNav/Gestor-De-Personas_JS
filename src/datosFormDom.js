
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const nacimiento = document.getElementById('nacimiento');
const correo = document.getElementById('correo');
const provincia = document.getElementById('provincia');
const localidad = document.getElementById('localidad');
const calle = document.getElementById('calle');
const direccionNumero = document.getElementById('direccion');
const containerDatos = document.getElementById('containerDatos');

export function insertarDatosDom() {
    let datosArr = [];
    let personasArr = [];

    const nuevaPersona = {
        id: (Math.random() * 200).toString(32).slice(3),
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value,
        nacimiento: nacimiento.value,
        correo: correo.value,
        provincia: provincia.value,
        localidad: localidad.value,
        calle: calle.value,
        direccionNumero: direccionNumero.value
    }

    datosArr.unshift(nuevaPersona);
    function datosEnDOM() {
        const datosPersonas = datosArr.map(e => {
            if ((e.id &&
                e.nombre &&
                e.apellido &&
                e.edad &&
                e.nacimiento &&
                e.correo &&
                e.provincia &&
                e.localidad &&
                e.calle &&
                e.direccionNumero !== "")) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Persona agregada",
                    showConfirmButton: false,
                    background: 'var(--background)',
                    color: 'var(--text)',
                    showConfirmButton: true,
                    timer: 1500
                });
                return `
                        
                            <tr class="trTbody">
                                <td class="tdTable">${e.nombre}</td>
                                <td class="tdTable">${e.apellido}</td>
                                <td class="tdTable">${e.edad}</td>
                                <td class="tdTable">${e.nacimiento}</td>
                                <td class="tdTable">${e.correo}</td>
                                <td class="tdTable">${e.provincia}</td>
                                <td class="tdTable">${e.localidad}</td>
                                <td class="tdTable">${e.calle}</td>
                                <td class="tdTable">${e.direccionNumero}</td>
                                <td><button id="${e.id}" class="eliminar">X</button></td>
                            </tr>
                    `;
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Parece que hay datos sin llenar",
                    footer: 'Todos los datos son obligatorios',
                    background: 'var(--background)',
                    color: 'var(--text)',
                    timer: 2000
                });
            }
        });
        containerDatos.innerHTML += datosPersonas.join("");
    }



    const buttonDelete = document.querySelectorAll('.eliminar');
    
        buttonDelete.forEach((button) => {
            button.addEventListener('click', (e) => {
                const idButton = button.getAttribute('id');
                datosArr = datosArr.filter((event) => event.id !== idButton);
                datosEnDOM();
            })
        });
    
    datosEnDOM()
}
