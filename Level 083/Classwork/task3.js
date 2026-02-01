async function getTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!response.ok) {
            throw new Error("Server response was not OK");
        }

        const data = await response.json();
        console.log("TODOS DATA:", data);

    } catch (error) {
        console.log("ERROR:", error.message);
    }
}

getTodos();
