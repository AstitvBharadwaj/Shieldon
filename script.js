function fetchPackets() {
    fetch('http://127.0.0.1:5000/get_packets')
        .then(response => response.json())
        .then(data => {
            let tableBody = document.getElementById("packetTable");
            tableBody.innerHTML = "";
            data.forEach(packet => {
                let row = `<tr>
                    <td>${packet.src}</td>
                    <td>${packet.dst}</td>
                    <td>${packet.protocol}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error("Error fetching packets:", error));
}
