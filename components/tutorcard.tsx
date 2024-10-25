import { Tutor } from "../types/tutor";

const TutorCard = ({ tutor }: { tutor: Tutor }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold">{tutor.name}</h2>
    <p>{tutor.subject}</p>
    <p>{tutor.rating} ★</p>
  </div>
);

export default TutorCard;
