import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArticlePage.css';

// This will simulate our database of articles
const articlesData = [
  {
    id: 1,
    heroImage: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049883083.jpg?fit=721%2C414&ssl=1",
    category: "Personal Development",
    title: "6 Things the CX Pod Has Taught Us about Avoiding Burnout and Rejecting Hustle Culture",
    publishDate: "August 24, 2023",
    readTime: "8 min",
    leadParagraph: "Here's what the rich conversations on The Community Experience podcast have taught us about making our work more nourishing and sustainable.",
    content: [
      {
        title: "1. Recognize the Signs of Burnout",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title: "2. Set Healthy Boundaries",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  },
  {
    id: 2,
    heroImage: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049934457.jpg?resize=720%2C480&ssl=1",
    category: "Podcasting",
    title: "3 Podcasting Mistakes You Need to Avoid",
    publishDate: "August 25, 2023",
    readTime: "6 min",
    leadParagraph: "Let's talk about three of the biggest podcasting myths and mishaps you can encounter when you're starting your show, and how to avoid them.",
    content: [
      {
        title: "1. Poor Audio Quality",
        content: "The first and most critical mistake is neglecting audio quality. Invest in a good microphone and learn basic audio editing."
      },
      {
        title: "2. Inconsistent Publishing",
        content: "Maintaining a consistent publishing schedule is crucial for building and retaining an audience."
      }
    ]
  },
  {
    id: 3,
    heroImage: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049940235.jpg?resize=720%2C480&ssl=1",
    category: "Community",
    title: "The Only Two Programs You Need to Attract and Retain Community Members",
    publishDate: "August 26, 2023",
    readTime: "7 min",
    leadParagraph: "Whether you run an online or in-person community, you need to keep both new and old community members excited and engaged.",
    content: [
      {
        title: "1. Onboarding Program",
        content: "A strong onboarding program helps new members feel welcome and understand how to get the most value from the community."
      },
      {
        title: "2. Engagement Program",
        content: "Regular engagement activities keep existing members active and help create lasting connections within the community."
      }
    ]
  },
  {
    id: 4,
    heroImage: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049940235.jpg?resize=720%2C480&ssl=1",
    category: "Gaming",
    title: "Qu'est-ce que le Lorem Ipsum?",
    publishDate: "August 26, 2023",
    readTime: "7 min",
    leadParagraph: "Whether you run an online or in-person community, you need to keep both new and old community members excited and engaged.",
    content: [
      {
        title: "1. D'où vient-il?",
        content: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire."
      },
      {
        title: "2. Où puis-je m'en procurer?",
        content: "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard."
      }
    ]
  },
  {
    id: 5,
    heroImage: "https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2023/10/maken-ticde-lamarsa.jpg",
    category: "Fitness",
    title: "lorem ipsum",
    publishDate: "August 26, 2023",
    readTime: "7 min",
    leadParagraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat quos laboriosam reprehenderit laudantium quas officia eius dolore dolor nulla libero totam inventore ad tempore, soluta aliquam perferendis, a fugiat!",
    content: [
      {
        title: "1. lorem ipsum dolor sit amet",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est adipisci ea aut aliquam architecto ullam soluta alias illum recusandae ducimus fuga explicabo voluptatum ipsa, iste sint! Possimus, voluptatem expedita!"
      },
      {
        title: "2. Lorem ipsum dolor",
        content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }
    ]
  }
];

export default function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Find the article that matches the ID from the URL
    const foundArticle = articlesData.find(article => article.id === parseInt(id));
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      // If no article is found, navigate back to the main page
      navigate('/');
    }
  }, [id, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  if (!article) return <div>Loading...</div>;

  return (
    <div className="page-wrapper">
      <button 
        className={`back-button ${isScrolled ? 'scrolled' : ''}`}
        onClick={handleBack}
      >
        ← Back
      </button>

      <article className="article-container">
        <div className="hero-section">
          <img 
            src={article.heroImage || "/placeholder.svg"}
            alt={article.title}
            className="hero-image"
          />
          <div className="image-overlay"></div>
        </div>
        
        <div className="article-content">
          <div className="article-header">
            <span className="category">{article.category}</span>
            
            <h1>{article.title}</h1>
            
            <div className="meta">
              <div className="meta-left">
                <span className="publish-date">Published on {article.publishDate}</span>
                <span className="read-time">• {article.readTime} read</span>
              </div>
              <div className="share-buttons">
                <button className="share-btn">Share</button>
                <button className="share-btn">Tweet</button>
              </div>
            </div>
          </div>

          <p className="lead">{article.leadParagraph}</p>

          <div className="article-body">
            {article.content.map((section, index) => (
              <section key={index}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}