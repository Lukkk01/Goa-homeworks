import { useEffect, useState } from "react";

function App() {
    const [accounts, setAccounts] = useState([]);
    const [account, setAccount] = useState(null);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const storedAccounts = JSON.parse(localStorage.getItem("accounts"));
        const storedAccount = JSON.parse(localStorage.getItem("account"));
        const storedStudents = JSON.parse(localStorage.getItem("students"));

        if (storedAccounts) setAccounts(storedAccounts);
        if (storedAccount) setAccount(storedAccount);
        if (storedStudents) setStudents(storedStudents);
    }, []);

    useEffect(() => {
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }, [accounts]);

    useEffect(() => {
        localStorage.setItem("account", JSON.stringify(account));
    }, [account]);

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    const handleRegister = (e) => {
        e.preventDefault();

        const newAccount = {
            email: e.target.email.value,
            pass: e.target.pass.value,
        };

        const alreadyExists = accounts.some(
            (acc) => acc.email === newAccount.email
        );

        if (!alreadyExists) {
            setAccounts([...accounts, newAccount]);
            alert("Account successfully created!");
            e.target.reset();
        } else {
            alert("Account already exists");
        }
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        const credentials = {
            email: e.target.email.value,
            pass: e.target.pass.value,
        };

        const isLoggedIn = accounts.find(
            (acc) =>
                acc.email === credentials.email &&
                acc.pass === credentials.pass
        );

        if (isLoggedIn) {
            setAccount(isLoggedIn);
            alert("Login successful");
        } else {
            alert("Invalid credentials, please try again");
        }
    };

    const logout = () => {
        setAccount(null);
    };

    const addStudent = (e) => {
        e.preventDefault();

        const newStudent = {
            id: Date.now(),
            name: e.target.name.value,
            surname: e.target.surname.value,
            age: e.target.age.value,
        };

        setStudents([...students, newStudent]);
        e.target.reset();
    };

    const deleteStudent = (id) => {
        setStudents(students.filter((stud) => stud.id !== id));
    };

    return (
        <main>
            {account === null ? (
                <section>
                    <h2>Registration</h2>
                    <form onSubmit={handleRegister}>
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" name="pass" required />
                        <button>Register</button>
                    </form>

                    <h2>Sign In</h2>
                    <form onSubmit={handleSignIn}>
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" name="pass" required />
                        <button>Sign In</button>
                    </form>
                </section>
            ) : (
                <section>
                    <h1>Welcome {account.email}</h1>
                    <button onClick={logout}>Log out</button>

                    <h2>Add Student</h2>
                    <form onSubmit={addStudent}>
                        <input type="text" placeholder="Student Name" name="name" required />
                        <input type="text" placeholder="Student Surname" name="surname" required />
                        <input type="number" placeholder="Student Age" name="age" required />
                        <button>Add</button>
                    </form>

                    <table border="1" cellPadding="10">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((stud) => (
                                <tr key={stud.id}>
                                    <td>{stud.name}</td>
                                    <td>{stud.surname}</td>
                                    <td>{stud.age}</td>
                                    <td>
                                        <button onClick={() => deleteStudent(stud.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
        </main>
    );
}

export default App;