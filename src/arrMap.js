
const ArrMap = () => {
    const IplData = [
        {
            team: "royal challenges banglore",
            cups: 0,
            jerseyimg: "https://i.pinimg.com/236x/a6/40/a6/a640a6cd05dc2dfb58ce3ff3467df677.jpg",
            players: 11,
            runners: 4

        },
        {
            team: "chenni super kings",
            cups: 5,
            jerseyimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4c_Ksfgz7Y3VtxgR9vltd1MSvk0Xkp0dJA&s",
            players: 11,
            runners: 6

        },
        {
            team: "mumbai indians",
            cups: 5,
            jerseyimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uHlpxBQqBsckpOwzV8XV6qvsm4Ep4Fmzhst7lUtKQruJJAQ_xfrEAZ9peiHKbJfnti0&usqp=CAU",
            players: 11,
            runners: 6

        },

        {
            team: "Rajasthan royals",
            cups: 2,
            jerseyimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYb1zMpzFMI5K-yKFjDORQpliGHhxMooW94Q&s",
            players: 11,
            runners: 3
        }
    ]
    const batch = IplData.map((every) => (

        <div key={every.team} style={{ backgroundColor: "#f2f2f2", width: "300px", textAlign: "center", color: "rgb(255, 151, 29)", borderRadius: "15px" }}>
            <h1>{every.team}</h1><br />
            <img src={every.jerseyimg} alt={"manu"} />
            <p>tropy  : {every.cups}</p>
        </div>))



    return (

        <div>
            {batch}

        </div>

    )
}

export default ArrMap
