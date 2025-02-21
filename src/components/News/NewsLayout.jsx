import React from "react";
import { Link } from "react-router-dom";
import "./NewsLayout.css";

const Card = ({ image, category, title, description, id }) => {
  return (
    <div className="cards">
      <div className="card-image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <div className="card-content">
        <p className="card-category">{category}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-link">
          <Link to={`/article/${id}`}>Learn More</Link>
          <span className="arrow">→</span>
        </div>
      </div>
    </div>
  );
};

const NewsLayout = () => {
  const cards = [
    {
      id: 1,
      image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049883083.jpg?fit=721%2C414&ssl=1",
      category: "Personal Development",
      title: "6 Things the CX Pod Has Taught Us about Avoiding Burnout and Rejecting Hustle Culture",
      description: "Here's what the rich conversations on The Community Experience podcast have taught us about making our work more nourishing and sustainable.",
    },
    {
      id: 2,
      image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049934457.jpg?resize=720%2C480&ssl=1", 
      category: "Podcasting",
      title: "3 Podcasting Mistakes You Need to Avoid",
      description:
        "Let’s talk about three of the biggest podcasting myths and mishaps you can encounter when you’re starting your show, and how to avoid them.",
    },
    {
      id: 3,
      image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049940235.jpg?resize=720%2C480&ssl=1", 
      category: "Community",
      title:
        "The Only Two Programs You Need to Attract and Retain Community Members",
      description:
        "Whether you run an online or in-person community, you need to keep both new and old community members excited and engaged.",
    },
    {
      id: 4,
      image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049927361.jpg?resize=720%2C480&ssl=1", 
      category: "Gaming",
        title:
          "Qu'est-ce que le Lorem Ipsum?",
        description:
          "Here’s what the rich conversations on The Community Experience podcast have taught us about making our work more nourishing and sustainable.",
      },
      {
        id: 5,
        image: "https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2023/10/maken-ticde-lamarsa.jpg", 
        category: "Fitness",
        title: "lorem ipsum",
        description:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
  ];

  return (
    <div className="card-layout">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          category={card.category}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default NewsLayout;
