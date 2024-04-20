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

    datosArr = datosArr.push(nuevaPersona);

    const datosPersonas = datosArr.map(elemento => {
        return `
                                    <tr id="${elemento.id}">
                                        <td>${elemento.nombre}</td>
                                        <td>${elemento.apellido}</td>
                                        <td>${elemento.edad}</td>
                                        <td>${elemento.nacimiento}</td>
                                        <td>${elemento.correo}</td>
                                        <td>${elemento.provincia}</td>
                                        <td>${elemento.localidad}</td>
                                        <td>${elemento.calle}</td>
                                        <td>${elemento.direccionNumero}</td>
                                    </tr>
    
                            
                    `
    })
    containerDatos.innerHTML += datosPersonas.join("");

}