import constants from "../../constants"

const setUsers = (users) => {
    return {
        type: constants.reduxType.set,
        payload: { users }
    }
}

const toggleUser = (userID) => {
    return {
        type: constants.reduxType.toggleUser,
        payload: { userID }
    }
}

const deleteUser = (userID) => {
    return {
        type: constants.reduxType.deleteUser,
        payload: { userID }
    }
}


const usersActions = {
    setUsers,
    toggleUser,
    deleteUser,
}

export default usersActions;
