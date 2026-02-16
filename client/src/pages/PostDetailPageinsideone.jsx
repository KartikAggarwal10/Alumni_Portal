import React, { useState, useEffect } from 'react';
import styles from './PostDetailPageinsideone.module.css';
import { useParams } from "react-router-dom";

export default function PostDetailPageinsideone() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const { id } = useParams();
  
  const posts = [
    {
      id: 1,
      title: "From Sonipat Skies to the Indian Air Force",
      subtitle: "Vedika Gupta, UG 2017",
      date: "February 10, 2026",
      readTime: "8 min read",
      views: "2,847",
      likes: 342,
      heroImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1200&h=600&fit=crop",
      content: `Some journeys are defined not by where they begin, but by how boldly they rise. For Vedika Gupta, a UG 2017 graduate, the journey from the classrooms of IIIT to the cockpit of the Indian Air Force was powered by discipline, resilience, and an unshakable dream of flying high.

## Her Early Days at IIIT

When Vedika arrived on campus as a first-year undergraduate, she was known for her quiet confidence and sharp analytical mind. Coming from a middle-class family in Sonipat, she carried with her not just textbooks, but a childhood fascination with aircraft and the skies.

While many of her peers were focused on coding competitions and placements, Vedika balanced her technical academics with physical fitness routines, NCC participation, and leadership activities. She believed early on that excellence required multidimensional preparation — mental, emotional, and physical.

Her professors recall her as someone who asked thoughtful questions, stayed back after lectures to clarify concepts, and never hesitated to volunteer for responsibility. During her second year, she led a technical fest team, coordinating over 60 students — an early sign of her leadership potential.

## Discovering Her Calling

The turning point came during a campus seminar hosted by defense officers. Listening to a woman officer speak about serving the nation ignited something powerful within her. That day, Vedika made a decision — she would attempt the Services Selection Board (SSB) and pursue a career in the armed forces.

Balancing GATE preparation pressures and SSB preparation was not easy. Her days began at 5 AM with endurance runs and ended past midnight revising technical concepts. There were moments of self-doubt. There were failed mock interviews. But there was never a moment when she considered giving up.

## Cracking the SSB

Clearing the SSB is known to be one of the most rigorous selection processes in the country. Over five intense days, candidates are evaluated not only on intelligence but also on leadership, emotional stability, teamwork, and situational awareness.

Vedika approached it with calm composure. During group tasks, she focused not on dominating conversations but on enabling collaboration. During psychological tests, she stayed authentic. Her preparation met opportunity — and she was recommended.

When the final medical clearance came through, she called her parents with tears in her eyes. Years of preparation had culminated in one defining moment.

## Training: Forged in Discipline

The Air Force Academy transformed Vedika from a determined graduate into a disciplined officer. The physical training was demanding. The technical instruction was precise and unforgiving. Every maneuver required absolute concentration.

There were days of exhaustion, bruised confidence, and relentless drills. But there were also days of first solo flights, of mastering navigation systems, and of standing proudly in uniform during ceremonial parades.

She often reflects that IIIT prepared her in ways she only understood later — structured thinking, calm problem-solving under pressure, and analytical clarity became her strengths in flight training.

## Serving with Purpose

Today, Flying Officer Vedika Gupta serves in the Indian Air Force, contributing to operations that demand both technical precision and moral courage.

For her, service is not just a profession — it is a responsibility. Whether coordinating missions or mentoring junior cadets, she carries the same humility she had as a student.

She credits her time at IIIT for building the foundation of resilience and intellectual rigor that the Air Force further sharpened.

## Lessons for Young Aspirants

Vedika's message to current students is simple yet powerful:

"Dreams are not enough. Discipline gives them direction. Preparation gives them power."

She encourages students — especially young women — to pursue careers in defense, aviation, and leadership without hesitation. She believes the new generation carries immense potential, and institutions like IIIT provide the ecosystem to nurture it.

## Looking Ahead

Even as she continues to grow in her career, Vedika remains deeply connected to her alma mater. She frequently volunteers for alumni interaction sessions and career guidance programs, sharing candid insights about the SSB process, defense life, and personal growth.

Her journey reminds us that ambition, when paired with integrity and relentless preparation, can truly take flight.

From the quiet corridors of campus to the vast skies of service — Vedika Gupta's story is not just about flying aircraft.

It is about rising above limits, leading with courage, and serving with honor.`,
      author: {
        name: "Vedika Gupta",
        role: "Indian Air Force Officer",
        batch: "UG 2017",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      tags: ["Air Force", "Leadership", "Women in Defense"],
      relatedPosts: [
        {
          id: 2,
          title: "Building, Not Just Starting",
          date: "February 6, 2026",
          image: "https://images.pexels.com/photos/7944231/pexels-photo-7944231.jpeg"
        }
      ]
    },
    {
      id: 2,
      title: "Building, Not Just Starting",
      subtitle: "Anamitra Ghosh",
      date: "February 6, 2026",
      readTime: "6 min read",
      views: "1,245",
      likes: 190,
      heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
      content: `In a world obsessed with launching startups overnight, Anamitra Ghosh chose a different philosophy — build deeply, build patiently, and build systems that last.

A UG 2018 graduate, Anamitra's journey from campus innovator to startup founder is not a story of shortcuts or viral moments. It is a story of systems thinking, long nights, failed prototypes, and relentless iteration.

## From Campus Curiosity to Entrepreneurial Clarity

During his early days at IIIT, Anamitra was not the loudest voice in the room — but he was often the most observant. While many classmates focused on placements or competitive programming rankings, he was fascinated by inefficiencies.

Why did student organizations struggle with coordination?
Why were processes always reactive instead of proactive?
Why did projects fail because of poor structure rather than lack of talent?

These questions slowly shaped his mindset. He began seeing problems not as isolated incidents but as systemic gaps waiting to be redesigned.

In his second year, he co-founded a small student initiative aimed at digitizing internal workflows for campus clubs. It was modest, experimental, and imperfect — but it planted the seed of entrepreneurship.

## The First Attempt — And Failure

After graduating in 2018, Anamitra turned down a conventional job offer to pursue a startup idea focused on workflow automation for small businesses.

The first version of the product failed.

It was over-engineered.
It lacked clear user validation.
It tried to solve too many problems at once.

The experience was humbling. Revenue was minimal. Investor conversations stalled. Team members left. But instead of quitting, Anamitra did something many founders avoid — he paused to study failure.

He interviewed former users.
He analyzed drop-off metrics.
He rebuilt the product roadmap from scratch.

That period, he says, taught him more than any classroom ever could.

## Building Systems, Not Just Products

Anamitra's second attempt was radically different.

Instead of chasing scale immediately, he focused on:

- Clear problem definition  
- Narrow user segment  
- Strong feedback loops  
- Sustainable growth over rapid expansion  

The result was a lean SaaS platform designed specifically for mid-sized operational teams struggling with task coordination.

Rather than marketing hype, he relied on data-backed improvements. Every feature release was tested. Every metric was tracked. Every assumption was validated.

Slowly, traction began to build.

## Leadership Through Structure

As the company grew, so did his responsibilities. Moving from coder to founder meant learning:

- Team hiring  
- Conflict resolution  
- Investor communication  
- Financial planning  
- Long-term strategic thinking  

Anamitra believes leadership is less about charisma and more about clarity. He implemented transparent documentation processes, structured weekly reviews, and measurable KPIs long before the team scaled beyond ten members.

His approach created a culture where ideas were debated logically, not emotionally.

## Lessons from the IIIT Ecosystem

Looking back, Anamitra credits IIIT for instilling in him a deep respect for structured problem-solving.

Assignments taught rigor.
Group projects taught collaboration.
Hackathons taught rapid iteration.
Technical debates taught resilience under scrutiny.

He often says that entrepreneurship is simply applied engineering — identifying constraints, optimizing resources, and continuously improving systems.

## Redefining Success

Today, Anamitra's startup serves hundreds of businesses across multiple cities. Revenue is steady. The team has expanded. Investors have shown interest.

But for him, success is not defined by valuation.

It is defined by:

- Building something durable  
- Creating jobs  
- Solving real problems  
- Growing responsibly  

He actively mentors student founders and speaks at alumni events, often challenging young aspirants with a simple thought:

"Don't start for the sake of starting. Build because the problem truly deserves a solution."

## Advice to Aspiring Entrepreneurs

To students dreaming of launching their own ventures, Anamitra offers grounded advice:

1. Validate before you build.
2. Focus on systems, not hype.
3. Expect failure — and learn from it.
4. Protect your mental resilience.
5. Play the long game.

He emphasizes that entrepreneurship is not glamorous — it is disciplined, structured, and emotionally demanding.

## The Road Ahead

As technology evolves and markets shift, Anamitra continues refining his company's vision. Expansion plans are thoughtful, not rushed. Partnerships are strategic, not impulsive.

His story is a reminder that entrepreneurship is not about how fast you launch — it is about how long you endure.

From campus corridors filled with ideas to boardrooms filled with strategy, Anamitra Ghosh represents a generation of builders who choose depth over noise, systems over shortcuts, and purpose over popularity.

He didn't just start.

He built.`,
      author: {
        name: "Anamitra Ghosh",
        role: "Startup Founder",
        batch: "UG 2018",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      tags: ["Startup", "Innovation"],
      relatedPosts: []
    },
    {
      id: 3,
      title: "Fueling the Future from Ghaziabad to VC",
      subtitle: "Ritvik Sharma, UG 2020",
      date: "February 2, 2026",
      readTime: "7 min read",
      views: "980",
      likes: 150,
      heroImage: "https://images.pexels.com/photos/7942520/pexels-photo-7942520.jpeg",
      content: `Not all builders create companies. Some build ecosystems.
  
For Ritvik Sharma, UG 2020, the journey from Ghaziabad to the world of venture capital was fueled by curiosity, analytical precision, and a deep belief in backing bold ideas.
  
## Early Curiosity and Campus Foundations
  
At IIIT, Ritvik was known for his fascination with emerging technologies and startup case studies. While others focused on coding marathons, he spent evenings analyzing funding rounds, studying product-market fit, and understanding why certain startups scaled while others collapsed.
  
He participated in entrepreneurship cells, moderated founder talks, and interned at two early-stage startups — experiences that shaped his understanding of risk and innovation.
  
## Entering the Startup Ecosystem
  
After graduation in 2020, Ritvik joined a fast-growing fintech startup as a strategy analyst. There, he witnessed firsthand the chaos and creativity of early-stage growth.
  
He worked closely with founders, handled investor reports, and learned how financial models translated into real-world execution. It was here that he discovered his calling — not necessarily to found a startup, but to empower founders.
  
## Transition into Venture Capital
  
Breaking into venture capital is no small feat. It demands pattern recognition, market foresight, and relentless research.
  
Ritvik spent months building investment theses, publishing startup analyses on LinkedIn, and networking within the ecosystem. Eventually, he secured an associate role at a venture capital firm focused on early-stage technology companies.
  
Today, he evaluates dozens of pitches each month — assessing market size, founder capability, scalability, and competitive differentiation.
  
## Investing in Vision
  
Ritvik believes venture capital is not about chasing trends but about identifying conviction.
  
He looks for:
  
- Founders with deep domain understanding  
- Clear problem-solution alignment  
- Sustainable unit economics  
- Ethical leadership  
  
His portfolio includes startups in climate-tech, ed-tech, and AI-driven SaaS platforms.
  
## Lessons from IIIT
  
Ritvik credits IIIT for teaching him structured thinking and technical depth. Understanding technology from first principles allows him to evaluate startups beyond buzzwords.
  
He often tells students:
  
"Technology evolves quickly, but fundamentals never change. Master the basics."
  
## Looking Ahead
  
As he continues building his career in venture capital, Ritvik remains committed to mentoring student founders and helping them refine their pitch decks and financial models.
  
From Ghaziabad classrooms to boardroom investment committees, his journey is proof that impact can be created not just by building companies — but by fueling them.`,
      author: {
        name: "Ritvik Sharma",
        role: "Venture Capital Associate",
        batch: "UG 2020",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      tags: ["Venture Capital", "Startups", "Investment", "Leadership"]
    },
    {
      id: 4,
      title: "Ashokans' Spice-Trail Adventure: Jaipur's Walled City Wonders",
      subtitle: "Alumni Community Travel Series",
      date: "January 21, 2026",
      readTime: "5 min read",
      views: "760",
      likes: 120,
      heroImage: "https://images.pexels.com/photos/7942469/pexels-photo-7942469.jpeg",
      content: `Alumni connections extend far beyond classrooms and careers — sometimes, they lead to unforgettable journeys.
  
Earlier this year, a group of Ashokan alumni gathered for a vibrant travel experience through the historic lanes of Jaipur's Walled City.
  
## Rediscovering Heritage
  
From the moment the group entered the pink-hued streets, nostalgia mixed with excitement. Conversations ranged from campus memories to current careers, proving that shared history creates lifelong bonds.
  
The tour began at Hawa Mahal, followed by immersive walks through bustling bazaars filled with handcrafted jewelry, textiles, and traditional sweets.
  
## A Culinary Spice Trail
  
True to its name, the adventure became a spice-trail exploration. Alumni sampled authentic Rajasthani cuisine — from dal baati churma to ghewar and masala chai served in clay cups.
  
The shared dining experiences sparked laughter, storytelling, and renewed friendships.
  
## Beyond Tourism — Strengthening the Network
  
What made this trip unique was not just sightseeing, but community building. Informal mentoring conversations took place over lunch. Career advice was exchanged during evening walks.
  
Senior alumni offered guidance to recent graduates. Entrepreneurs discussed collaborations. The trip became a moving networking session wrapped in cultural exploration.
  
## Why Alumni Engagement Matters
  
Events like these reinforce the strength of the alumni network. They create safe spaces for:
  
- Collaboration  
- Mentorship  
- Professional growth  
- Personal reconnection  
  
The Jaipur trip was a reminder that alumni engagement is not limited to seminars and webinars — it thrives in shared experiences.
  
## Looking Forward
  
Encouraged by the success of this gathering, the alumni association plans to organize similar regional meet-ups across India.
  
Because sometimes, the most meaningful connections are strengthened not in conference rooms — but in vibrant streets filled with history, culture, and spice.`,
      author: {
        name: "Alumni Relations Team",
        role: "Community Engagement",
        batch: "Official Alumni Network",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      tags: ["Alumni Network", "Community", "Jaipur", "Travel"],
      relatedPosts: [
        {
          id: 1,
          title: "From Sonipat Skies to the Indian Air Force",
          date: "February 10, 2026",
          image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"
        }
      ]
    }
  ];

  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <div className={styles.postDetailPage}>
      {/* Navigation */}
      <nav className={styles.krtik}>
        <div className={styles.navContent}>
          <a href="#" className={styles.backButton}>
            ← Back to Stories
          </a>
          <div className={styles.navActions}>
            <button 
              className={`${styles.iconButton} ${liked ? styles.active : ''}`}
              onClick={() => setLiked(!liked)}
              aria-label="Like post"
            >
              {liked ? '❤️' : '🤍'}
            </button>
            <button 
              className={`${styles.iconButton} ${bookmarked ? styles.active : ''}`}
              onClick={() => setBookmarked(!bookmarked)}
              aria-label="Bookmark post"
            >
              {bookmarked ? '🔖' : '📑'}
            </button>
            <div className={styles.shareMenu}>
              <button 
                className={styles.iconButton}
                onClick={() => setShowShareMenu(!showShareMenu)}
                aria-label="Share post"
              >
                🔗
              </button>
              <div className={`${styles.shareDropdown} ${showShareMenu ? '' : styles.hidden}`}>
                <div className={styles.shareOption}>📧 Email</div>
                <div className={styles.shareOption}>🐦 Twitter</div>
                <div className={styles.shareOption}>💼 LinkedIn</div>
                <div className={styles.shareOption}>📋 Copy Link</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.postMeta}>
          <span className={styles.metaItem}>📅 {post.date}</span>
          <span className={styles.metaDivider}></span>
          <span className={styles.metaItem}>⏱️ {post.readTime}</span>
          <span className={styles.metaDivider}></span>
          <span className={styles.metaItem}>👁️ {post.views} views</span>
        </div>

        <h1 className={styles.postTitle}>{post.title}</h1>
        <h2 className={styles.postSubtitle}>{post.subtitle}</h2>

        <div className={styles.authorSection}>
          <img src={post.author.avatar} alt={post.author.name} className={styles.authorAvatar} />
          <div className={styles.authorInfo}>
            <h3>{post.author.name}</h3>
            <p>{post.author.role}</p>
            <p className={styles.authorBatch}>{post.author.batch}</p>
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <img src={post.heroImage} alt={post.title} className={styles.heroImage} />
        </div>
      </section>

      {/* Content */}
      <div className={styles.contentWrapper}>
        <article className={styles.postContent}>
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </article>
      </div>

      {/* Tags and Stats */}
      <section className={styles.tagsStatsSection}>
        <div className={styles.engagementStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{post.views}</span>
            <span className={styles.statLabel}>Views</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{post.likes}</span>
            <span className={styles.statLabel}>Likes</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{post.readTime}</span>
            <span className={styles.statLabel}>Read Time</span>
          </div>
        </div>

        <div className={styles.tagsContainer}>
          <span className={styles.tagLabel}>Tagged in:</span>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </section>

      {/* Related Posts */}
      <section className={styles.relatedPostsSection}>
        <h2 className={styles.sectionTitle}>More Inspiring Stories</h2>
        <div className={styles.relatedPostsGrid}>
          {posts.filter((p) => p.id !== parseInt(id)).map((relatedPost) => relatedPost.id !== id && (
            <div key={relatedPost.id} className={styles.relatedPostCard}>
              <img src={relatedPost.heroImage} alt={relatedPost.title} className={styles.relatedPostImage} />
              <div className={styles.relatedPostContent}>
                <p className={styles.relatedPostDate}>{relatedPost.date}</p>
                <h3 className={styles.relatedPostTitle}>{relatedPost.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}