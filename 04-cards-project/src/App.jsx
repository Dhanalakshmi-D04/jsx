import React from "react";
import Card from "./components/Card"; 


const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx) {
        return <div key={idx}>
        <Card company ={elem.companyName} brandLogo = {elem.brandLogo} datePosted = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}/>
        </div>  
      })}
    </div>


    

  )
}
export default App;