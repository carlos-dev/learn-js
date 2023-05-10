/**
 * 
 * Assim como no exemplo 008, aqui temos um caso comum
 * de condicional que pode ser substituído por objetos
 * 
 * TODO: Substituir condicionais por objeto
 * ? Esse script possui testes 
 */

 function updateUser(state, payload) {
  return 'atualizando usuario';
}

function createUser(state, payload) {
  return 'criando usuario';
}

function selectUser(state, payload) {
  return 'selecionando usuario';
}

function deleteUser(state, payload) {
  return 'deletando usuario';
}


const methods = {
  UPDATE_USER: updateUser,
  CREATE_USER: createUser,
  SELECT_USER: selectUser,
  DELETE_USER: deleteUser
}

export default function reducer(action, state) {
  return methods[action.type](state, action.payload)
}
