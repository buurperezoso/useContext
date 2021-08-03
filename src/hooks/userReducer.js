const usersReducer = (users, action) => {
    switch (action.type) {
        case 'SET':
            return action.users
        case 'TOGGLE_USER':
            return users.map((user) => {
                if (user.id === action.userID) {
                    user.active = !user.active;
                }
                return user;
            });
        case 'DELETE_USER':
            return users.filter((user) => user.id !== action.userID);
        default:
            throw new Error('Invalid action');
    }
}

export default usersReducer;
