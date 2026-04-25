import React from 'react'
import Card from './components/Card'


const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Senior Software Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: 145,
    location: "Mountain View, CA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: 95,
    location: "Menlo Park, CA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full time",
    tag2: "Senior level",
    pay: 115,
    location: "Seattle, WA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: 85,
    location: "Cupertino, CA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Data Scientist",
    tag1: "Full time",
    tag2: "Senior level",
    pay: 160,
    location: "Los Gatos, CA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cybersecurity Analyst",
    tag1: "Full time",
    tag2: "Mid level",
    pay: 105,
    location: "Redmond, WA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "AI Research Scientist",
    tag1: "Full time",
    tag2: "Senior level",
    pay: 180,
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    companyName: "Tesla",
    datePosted: "1 day ago",
    post: "Autopilot Software Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: 130,
    location: "Austin, TX"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Developer (React)",
    tag1: "Contract",
    tag2: "Junior level",
    pay: 75,
    location: "San Jose, CA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    companyName: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: 110,
    location: "San Francisco, CA"
  }
];

  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} post={elem.post} date={elem.datePosted} logo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      })}
    </div>
  )
}

export default App



