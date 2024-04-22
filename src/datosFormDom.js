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

    const datosPersonas = datosArr.map(e => {
        return   `
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Nacimiento</th>
                                <th>Correo</th>
                                <th>Provincia</th>
                                <th>Localidad</th>
                                <th>Calle</th>
                                <th>Numero De Casa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="${e.id}">
                                <td>${e.nombre}</td>
                                <td>${e.apellido}</td>
                                <td>${e.edad}</td>
                                <td>${e.nacimiento}</td>
                                <td>${e.correo}</td>
                                <td>${e.provincia}</td>
                                <td>${e.localidad}</td>
                                <td>${e.calle}</td>
                                <td>${e.direccionNumero}</td>
                            </tr>
                        </tbody>
                    `;
    });
    containerDatos.innerHTML += datosPersonas.join("");

}