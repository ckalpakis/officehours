import TutorCard from "../components/tutorcard";
import { Tutor } from "../types/tutor";

const sampleTutors: Tutor[] = [
  {
    id: 1,
    name: "Jane Doe",
    subject: "Math",
    rating: 4.9,
    bio: "Math tutor with 5+ years of experience.",
    availability: ["Monday", "Friday"],
  },
  {
    id: 2,
    name: "John Smith",
    subject: "Physics",
    rating: 4.5,
    bio: "PhD in Physics with 10 years of tutoring.",
    availability: ["Tuesday", "Thursday"],
  },
];

const Home = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Featured Tutors</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sampleTutors.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  </div>
);

export default Home;
