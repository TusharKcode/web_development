function StudentList(){
    const students = ["Ash", "Alex", "Sam", "Bob"];

    return(
        <ol>
            {students.map((students, index) => (
                <li key={index}>Students name: {students}</li>
            ))}
        </ol>
    );
}

export default StudentList;