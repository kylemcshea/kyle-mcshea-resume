export interface JobProps {
  position: string;
  company: string;
  start_date: string;
  end_date: string;
  location: string;
}

export const Jobs: JobProps[] = [
  {
    position: "Full-Stack Engineer",
    company: "Deutsche Bank",
    start_date: "3/22",
    end_date: "Present",
    location: "New York, NY",
  },
  {
    position: "Associate Consultant",
    company: "Capco",
    start_date: "8/21",
    end_date: "11/22",
    location: "New York, NY",
  },
  {
    position: "Chief Technology Officer",
    company: "DreamState Development",
    start_date: "6/21",
    end_date: "11/22",
    location: "New York, NY",
  },
  {
    position: "Back-End Engineer",
    company: "Freddie Mac",
    start_date: "9/21",
    end_date: "3/22",
    location: "New York, NY",
  },
  {
    position: "Technology Analyst",
    company: "Silicon Valley Bank",
    start_date: "8/21",
    end_date: "9/21",
    location: "New York, NY",
  },
  {
    position: "Full-Stack Engineer",
    company: "POSH",
    start_date: "1/21",
    end_date: "4/21",
    location: "Miami, FL",
  },
  {
    position: "Front-End Engineer (Intern)",
    company: "The Estée Lauder Companies",
    start_date: "7/20",
    end_date: "9/20",
    location: "Mahwah, NJ",
  },
  {
    position: "Information Security Analyst (Intern)",
    company: "K2 Integrity",
    start_date: "8/19",
    end_date: "12/19",
    location: "New York, NY",
  },
  {
    position: "Back-End Engineer (Intern)",
    company: "UPS",
    start_date: "6/19",
    end_date: "8/19",
    location: "Mahwah, NJ",
  },
];

export default Jobs;
