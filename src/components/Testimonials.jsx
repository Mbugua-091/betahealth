import React from 'react';
import './Testimonials.css'; // Import your CSS file for styling

const Testimonials = () => {
  const reviews = [
    {
      name: "Martin Mwangi",
      review: "The staff at Beta Clinic are incredibly caring and professional. They made my recovery so much easier!",
      date: "Jan 10, 2025",
    },
    {
      name: "John Owino",
      review: "I was impressed by the cleanliness and organization of the clinic. Highly recommend their services!",
      date: "Feb 15, 2025",
    },
    {
      name: "Mary Wamboi",
      review: "From the moment I walked in, I felt welcomed. The doctors took their time to listen to my concerns.",
      date: "Apr 5, 2025",
    },
    {
      name: "James Wanyama",
      review: "The treatment I received was top-notch. The team is knowledgeable and caring!",
      date: "Mar 20, 2025",
    },
    {
      name: "Linda Nyambura",
      review: "Beta Clinic has the best staff! They truly care about their patients and it shows.",
      date: "Apr 18, 2025",
    },
    {
      name: "Michael Esinyen",
      review: "I appreciate how they followed up with me after my visit. It shows they genuinely care.",
      date: "May 22, 2024",
    },
    {
      name: "Jennifer Kyalo",
      review: "The facilities are state-of-the-art and the staff is incredibly friendly. A great experience!",
      date: "Feb 28, 2024",
    },
    {
      name: "David Mwaura",
      review: "My family and I have been coming here for years. Consistent quality care every time!",
      date: "Jul 14, 2024",
    },
    {
      name: "Patricia Nakhumicha",
      review: "I felt well-informed and supported throughout my treatment. Thank you, Beta Clinic!",
      date: "Aug 19, 2024",
    },
    {
      name: "Charles Otieno",
      review: "Excellent service from start to finish! Highly recommend to anyone in need of healthcare.",
      date: "Sep 2, 2024",
    },
    {
      name: "Alice Kamau",
      review: "The nurses were very attentive and friendly. I felt well taken care of during my visit.",
      date: "July 8, 2024",
    },
    {
      name: "Robert Karanja",
      review: "A fantastic clinic with professional staff. The wait time was minimal, and the care was exceptional!",
      date: "Nov 12, 2024",
    },
    {
      name: "Amina Hassan",
      review: "Huduma nzuri sana, nimeridhika na jinsi walinichukulia kwa upole. Nafurahia matibabu yao.",
      date: "Dec 1, 2024",
    },
    {
      name: "Peter Muiruri",
      review: "Kliniki hii imenisaidia sana kwa matibabu bora. Timu yao ni ya kipekee!",
      date: "Oct 3, 2024",
    },
    {
      name: "Njeri Wanjiku",
      review: "Nimekuwa hapa mara kadhaa na kila wakati huduma inakuwa bora zaidi.",
      date: "Nov 22, 2024",
    },
    {
      name: "Ahmed Yusuf",
      review: "Wafanyakazi wana utaalam mkubwa na ni wema sana. Nimependa jinsi walivyojali hali yangu.",
      date: "Jun 5, 2024",
    },
    {
      name: "Mwangi Kimani",
      review: "Huduma ya haraka na bora. Nitaendelea kuja hapa kwa matibabu yangu.",
      date: "Aug 30, 2024",
    },
    {
      name: "Salma Juma",
      review: "Nashukuru jinsi walivyofanya uchunguzi wangu kwa uangalifu mkubwa.",
      date: "May 19, 2024",
    },
    {
      name: "Francis Ndungu",
      review: "Beta Clinic ni mahali bora kwa huduma ya afya. Nitarudi tena kwa uhakika.",
      date: "Jul 22, 2024",
    },
    {
      name: "Josephine Nyambura",
      review: "Huduma bora sana. Madaktari wamenisaidia sana, na nimepona haraka.",
      date: "Oct 12, 2024",
    },
    {
      name: "Rachel Nakitare",
      review: "Nimependa jinsi walivyonishughulikia kwa haraka na uangalifu. Kliniki hii ni bora.",
      date: "Sep 25, 2024",
    },
  ];

  return (
    <div className="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <span className="date">{review.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Testimonials;
