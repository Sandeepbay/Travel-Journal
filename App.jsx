import Navbar from "./Navbar"
import Card from "./Card"
import "./styles.css"
import data from "./data.js"

export default function App() {

    const completeData = data.map(item => {
        return (
            <Card
                key={item.id}
                title = {item.title}  
                location = {item.location}
                Url = {item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                image = {item.imageUrl}
            />
        )
    })


    return (
        <div>
            <Navbar/>
            <section className="Section">
                {completeData}
            </section>
        </div>
    )
}