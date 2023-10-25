export default function Card(props) {
  return (
    <div className="Card">
      <img src={`${props.image}`} className="Image" />
      <h5 className="Title">{props.title}</h5>
      <h4 className="Country">{props.location}</h4>
      <h4>{props.startDate} - {props.endDate}</h4>
      <p className="Description">{props.description}</p>
      <a href={`${props.Url}`} className="Map">View on Google Maps</a>
    </div>
  );
}
