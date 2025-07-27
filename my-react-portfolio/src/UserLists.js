function UserLists(){
    const users = ["Tushar", "Alex", "John", "Ash", "Sam"];

    return(
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user, index) =>  (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserLists;