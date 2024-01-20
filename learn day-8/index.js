async function fetchData() {
    try {
        const cName = document.getElementById("c-Name").value;
        const response = await fetch(`https://narutodb.xyz/api/character/search?name=${cName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const imageCharacter = data.images;
        const imgElement = document.getElementById("img-c");

        imgElement.src = imageCharacter;
        imgElement.style.display = "block";
        imgElement.style.width = "300px"
        imgElement.style.marginTop = "20px"
        
    } catch (error) {
        console.log(error);
    }
}