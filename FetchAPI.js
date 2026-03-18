const fetchUserData = async () => {

    const response = await fetch('https://reqres.in/api/users/?pages=2')
    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    console.log(data)
}

fetchUserData();