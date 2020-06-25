import { users } from './users.js'

// Genera el html para las filas de la tabla para mostrar los usuarios
function htmlRowsUsers() {
    let num=0;
    const html = users.map(function(user) {
        
        return `<tr>
                    <td>${num=num+1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.gender == 'female' ? 'femenimo' : 'masculino'}</td>
                    <td>
                        <button class="btn btn-danger" onclick="eliminar(${num})">Eliminar</button>
                    </td>
                </tr>`
    })
    return html.join("")
}
// devuelve el body 
function getTablebody() {
    return document.getElementById('table-body')
}
// Imprime los usuarios en el documento
function printUsers() {
    const htmlDataUsers = htmlRowsUsers()
    // Con esta función obtenemos el body de la tabla
    const tableBody = getTablebody()
    // Mete el html generafo por la función htmlRowsUsers() en el body de la tabla
    tableBody.innerHTML = htmlDataUsers
}
// Obtiene los datos del nuevo usuario
function getNewUser () {
    const inputName = document.getElementById('input-name')
    const inputEmail = document.getElementById('input-email')
    const inputAge = document.getElementById('input-age')
    const inputGender = document.getElementById('select-age')
    const newUser = {
        name: inputName.value,
        email: inputEmail.value,
        age: inputAge.value,
        gender: inputGender.value
    }
    return newUser
}
// Imprime los datos de un usuario nuevo en el documento
function addUser() {
    const newUser = getNewUser()
    users.unshift(newUser)
    // orderIDs()
     printUsers()
      
}

// Asigna el id correcto a cada elemento
// function orderIDs() {
//     users.forEach(function(user, index) {
//         user.id = index + 1
//     })
// }

function eliminar(codigo){
    users.splice (codigo-1,1)
    printUsers()
    // alert(id)
}
// Llamadas al cargar la página
 printUsers()
// Volvemos la función addUser parte del objeto window
window.addUser = addUser
window.eliminar=eliminar


// Ejercicios:
// Asingar el id del nuevo usuario
// Agregar el nuevo usuario al inicio
// Hacer que funcione el botón eliminar

let usuarioFiltrados= "";
function htmlRowsUsers2(usuarioFiltrados) {

    let num=0;
    const html = usuarioFiltrados.map(function(user) {
        
        return `<tr>
                    <td>${num=num+1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.gender == 'female' ? 'femenimo' : 'masculino'}</td>
                    <td>
                        <button class="btn btn-danger" onclick="eliminar(${num})">Eliminar</button>
                    </td>
                </tr>`
    })
    return html.join("")
}
function printFilteredUsers() {
    const htmlusuarios=htmlRowsUsers2(usuarioFiltrados)
    const tableBody = getTablebody()
    tableBody.innerHTML = htmlusuarios
   
 
}

function filter() {
    let element= document.getElementById("select-filter")
    let valor= element.value
    if (valor=="female"){

        let mujeres= users.filter(function(user) {
            return user.gender == 'female' 
            
        })
          usuarioFiltrados=mujeres;
         printFilteredUsers();
       
        
    }
     else if (valor=="academlo"){
          
        let academlo= users.filter(function(user) {
            return  user.email.includes('@academlo.com')
        }) 
         usuarioFiltrados=academlo;
         printFilteredUsers();
      
        
    }

    else if  (valor=="sort"){
        //  let usuarios= users.name.toLowerCase()
          let ordenados= users.sort((a, b) =>{
              if  (a.name.toLowerCase() > b.name.toLowerCase()){
                  return 1;
              } 
                else{
                    return -1;
                }
            }

          );
          
          usuarioFiltrados=ordenados;
         printFilteredUsers();
          return ordenados;
          
         
    }
        
    
}
window.filter = filter


// Ejercicio - aplicar filtros
// Hacer que funcione el botón eliminar