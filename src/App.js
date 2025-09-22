import React, { useEffect, useState, useRef } from 'react';
import { FlourishBlock } from './components/FlourishBlock';
import './index.css';
import DailyLogo from './components/DailyLogo';
import ArticleCard from './components/ArticleCard.js';
import PollingDashboard from './components/PolllingDashboard.js';
import SurveyCard from './components/Card.js';
import Footer from './components/Footer.js';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // scroll to landingref
  const landingRef = useRef(null);
  const campusSpeechRef = useRef(null);
  const federalPoliciesRef = useRef(null);
  const generativeAIRef = useRef(null);
  const mentalHealthRef = useRef(null);
  const romanticRelationshipsRef = useRef(null);
  const moreStoriesRef = useRef(null);
  const dashboardRef = useRef(null);
  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
<DailyLogo scrollToRef={scrollToRef} targetRef={landingRef}/>
    <div className="dashboard-wrapper">
      
 
      <div className="landing-content" ref={landingRef}>
        <div className="intro-text">
                <br></br>
        <p>It’s quite the time to be a college student.</p>

        <p>Campuses have been rocked with student protests over conflicts in the Middle East for the last two years, fueling debates about free speech and antisemitism in higher education. From the outside, the Trump administration has curtailed federal funding for university research and revoked the visas of some international students nationwide. The administration later restored legal status for many international students.</p>

        <p>Amid that turmoil, the accelerating development of generative AI has transformed the way many students study, write, work and more. Meanwhile, other parts of the student experience — mental health, friendship and love — remain as relevant as ever.</p>

        <p>In The Daily’s Spring 2025 poll, conducted from April 20 to April 26, we asked Northwestern students about all of that and more. Here’s what we found.</p>
        </div>
       
        <button 
            className="scroll-arrow" 
            onClick={() => scrollToRef(campusSpeechRef)} 
            aria-label="Scroll to Federal Policies"
          >
          ↓
        </button>
       
       <div className="intro-text" ref={campusSpeechRef}>
       <h2>CAMPUS SPEECH</h2>
          <button 
            className="scroll-arrow" 
            onClick={() => scrollToRef(federalPoliciesRef)} 
            aria-label="Scroll to Federal Policies"
          >
          ↓
        </button>
       </div>
        <FlourishBlock storyId="22983190">
          <h3>Students rarely have conversations with people who disagree with them politically.
          </h3>


          <p>In the last few years, there has been a growing national discussion about what kinds of speech and ideas should be allowed on college campuses.</p>

          <p>The conversation comes amid the resurgence of a broader, long-running debate about whether colleges today lean too far left and shut out conservative viewpoints. In addition, NU is now facing federal scrutiny over what some lawmakers say is a failure to address antisemitism on campus since April 2024’s pro-Palestinian encampment. 
          </p>
          <p>The University has emphasized its commitment to bringing together students and faculty with diverse backgrounds. “It is only through engagement across difference that we can obtain the full transformative benefit of a great residential university,” Schill wrote to members of the NU community in a March 6 email.</p>

          <p>According to the poll data, approximately two in five students reflect that sentiment with their actions.</p>

          <p>When asked, 37.8% of students said they often or sometimes have meaningful conversations with people who disagree with them politically at NU. In contrast, 58.7% said they infrequently or never do.</p>

        </FlourishBlock>

 
        <FlourishBlock storyId="22985102">

          <h3>Student views on campus antisemitism and Islamophobia differ by religion.</h3>

          <p>Universities like NU have come under scrutiny from the federal government and the public for perceived campus antisemitism, in light of pro-Palestinian campus protests that have occurred in the last two years since the outbreak of the Israel-Hamas war. NU is also currently undergoing several federal investigations relating to antisemitism.</p>

          <p>The majority of Jewish students identify antisemitism as a somewhat or very serious problem at NU (63.1%), joined by 30.4% of the whole student body. A smaller number of Jewish students say it is not much of a problem or not a problem (36.9%), along with a slight majority of the whole student body (56.7%).</p>

          <p>Three-fifths of Jewish students say they or someone they know have experienced antisemitic behavior on campus (58.0%), along with 19.5% of the student body.</p>

          <p>Just under half of all students say Islamophobia is a somewhat or very serious problem on campus at 47.2%, with 36.5% saying it is not much of a problem or not a problem. One-fifth of the student body says they or someone they know have experienced Islamophobic behavior on campus (20.6%). The sample size of Muslim students who responded to the poll was too small to report separate data.</p>
        
        </FlourishBlock>

        <div className="intro-text" ref={federalPoliciesRef}>
        <h2>FEDERAL POLICIES</h2>
        <button 
            className="scroll-arrow" 
            onClick={() => scrollToRef(generativeAIRef)} 
            aria-label="Scroll to Federal Policies"
          >
          ↓
        </button>
          </div>
        <FlourishBlock storyId="23004021">
          <h3>Funding cuts are shaping students’ career plans.</h3>
          <p>Since Trump took office, universities like NU have been deeply impacted by a series of changes to federal policy that impact research and international students.</p>
          <p>In April, the federal government froze $790 million in federal funding for NU, one of a series of universities targeted for funding cuts that also includes Columbia University, Harvard University and the University of Pennsylvania.</p>
          <p>A larger percent (54.9%) said that the federal government’s stance on higher education in general had affected their career plans, with one-fifth of students (21.9%) saying it had done so significantly. One student said they planned to pursue a Ph.D. and would go abroad to do so if they cannot secure funding in the U.S.</p>
        </FlourishBlock>

        <FlourishBlock storyId="23016670">
          <h3>Visa uncertainties shape international student decisions.</h3>
          <p>International students have been acutely affected by the new federal policies toward visas.</p>
          <p>In the last month, the federal government terminated student visas and moved to delete records for international students across the country (though records were later reinstated) and, in a few high-profile cases, attempted to deport students and recent graduates who had been involved in campus activism.</p>
          <p>Over half of international students (56.0%) said they had reconsidered plans to pursue a career in the U.S. after graduation in response to the federal government’s visa and deportation policies; 12.2% of domestic students said the same.</p>
          <p>Visa and deportation policies have affected international students in other ways as well. Many said they had refrained from making public statements, like social media posts (55.8%), and 31.7% said they had avoided leaving the U.S.</p>
        </FlourishBlock>

        <div className="intro-text" ref={generativeAIRef}>
        <h2>GENERATIVE AI</h2>
         <button 
            className="scroll-arrow" 
            onClick={() => scrollToRef(mentalHealthRef)} 
            aria-label="Scroll to Federal Policies"
          >
          ↓
        </button>
        </div>
        <FlourishBlock storyId="22994358">
        <h3>Students using AI much more than in the Fall</h3>
        <p>ChatGPT was publicly released in November 2022, when members of the current junior class were studying for their first final exams as college students. Since then, generative AI platforms have become a regular feature of many students’ lives.</p>

        <p>69.2% of students say they use generative AI at least once per week, with 27.4% saying they use it every day. That’s up significantly from the 38.8% of students who said they use it weekly in The Daily’s Fall poll — from this same academic year.
        </p>
        <p>What are students using it for? All sorts of things.
        </p>

        <p>Every part of the writing process can now involve generative AI. One-fifth of students (20.7%) say they have used AI to write assignments, while almost half have used it to edit (47.9%) and generate ideas and find sources (45.9%).
        </p>

        <p>AI can help students summarize course readings (49.6%), do class problems like math questions (47.9%) and study course material (42.9%). Many students have used AI to perform rote tasks like writing emails (42.9%) and applications, including cover letters (36.3%). Outside the classroom, almost a quarter of students have used AI to generate or edit images (22.3%), and 23.1% have sought life advice from AI. Two students even wrote that they’ve used it to generate recipes.
        </p>

        </FlourishBlock>

        <FlourishBlock storyId="22983486">
        <h3>However ubiquitous AI may be becoming, student feelings on it are mixed.</h3>
        <p>While a sizable percent of respondents think AI makes them a better student (42.7%, compared to 34.7% who say the opposite), only 22.5% of students are optimistic about how AI will affect their future career prospects, with 51.7% not feeling optimistic.
        </p>

        <p>In addition to using AI the most frequently, McCormick students tended to have the most positive views on AI. Over half of McCormick students said they thought AI made them a better student (54.0%) — more than ten percentage points higher than any other school.
        </p>

        <p>Students are split approximately evenly on whether they think the development of AI is good for society, with 42.4% agreeing and 39.2% disagreeing.
        </p>

        </FlourishBlock>


        <div className="intro-text" ref={mentalHealthRef}>
        <h2>MENTAL AND SOCIAL HEALTH</h2>
         <button 
            className="scroll-arrow" 
            onClick={() => scrollToRef(romanticRelationshipsRef)} 
            aria-label="Scroll to Federal Policies"
          >
          ↓
        </button>
        </div>
        <p>Amidst the above debates and events on campus, one might be reassured to learn that NU students are doing alright.</p>

        <FlourishBlock storyId="22997277">
        <p>The vast majority of students (71.6%) described their current mental and emotional well-being as excellent or good, with only 5.6% describing it as poor.
        </p>

        <p>We have data on how different aspects of life are contributing to students’ mental health. The vast majority of students (74.0%) said that interpersonal relationships were positively impacting their mental health. Extracurriculars (60.4%) and physical health (42.8%) were also positive factors for students.
        </p>

        <p>And the bad news. Students were more likely to say that current events, academics and career factors were hurting their mental health than helping it.
        </p>

        </FlourishBlock>


        <FlourishBlock storyId="22997673">
          <h3>Students’ social lives change as they progress through college.</h3>
        <p>Most students say they’re satisfied with their social life at NU (78.9%). This fact is relatively consistent across gender, race and school.
        </p>

        <p>When asked whether they feel closer to friends from college or from home, 48.9% of students said they feel closer to friends in college and 20.3% said friends from home.
        </p>

        <p>As the years pass, it seems like student connections grow stronger. 63% of seniors reported that they feel closer with their college friends than their friends at home, up from 55.6% of juniors, 43% of sophomores and 31% of freshmen.
        </p>

        <p>Unfortunately, as some relationships develop, others have faded. Only 12% of seniors said that they feel closer with their hometown friends. The freshmen and sophomores are holding more closely, with 37.8% and 34.4% saying they’re equally close with home and college friends respectively.
        </p>

        </FlourishBlock>

        <div className="intro-text" ref={romanticRelationshipsRef}>
        <h2>ROMANTIC RELATIONSHIPS</h2>
        <button 
            className="scroll-arrow" 
            onClick={() => scrollToRef(moreStoriesRef)} 
            aria-label="Scroll to Federal Policies"
          >
          ↓
        </button>
        </div>

        <FlourishBlock storyId="23014741">
          <h3>New love on campus this year</h3>
          <p>Look to your left. Look to your right. Chances are, at least one of you three is currently in a romantic relationship. </p>

          <p>That’s because 38.4% of NU students are now in a romantic relationship, according to the Spring poll numbers.</p>

          <p>That number is up from The Daily’s Fall poll, conducted in October, in which 31.9% of students said they were in a romantic relationship. Meaning: congratulations to at least 6.5% of students, who have since found a partner.
          </p>
          <p>We actually know how those new couples met, on aggregate. Among students who started a relationship in the last year, the most common source was a mutual friend (27.7%), followed by a shared extracurricular (23.9%) and dating apps (18.4%). 
          </p>
        </FlourishBlock>

        <FlourishBlock storyId="22997936">
        <h3>Tenth of student body — and higher proportion of freshmen — in long-distance relationships.</h3>
        <p>These numbers pretty closely reflect numbers for the entire student body who are in relationships. The main difference are the hometown couples: 24.8% of all students in relationships came from the same town or high school as their partner.</p>

          <p>Most of those students are currently in long-distance relationships. Among students in relationships, 27.6% are doing long-distance — amounting to 11.3% of the student body.
          </p>

          <p>Perhaps unsurprisingly, that number is significantly higher among first years, with 17.7% of freshmen in long-distance relationships. For older years, long distance numbers hold fairly constant, with 9.8% of second years, 8.5% of third years and 9.4% of fourth years in long distance relationships.
          </p>
        </FlourishBlock>

        <FlourishBlock storyId="22983673">
          <h3>Hinge dominates dating apps</h3>
          <p>
          About a third of the student body as a whole has used a dating app in the last year (34.4%), with the vast majority having at least used Hinge (29.8% of all students). A smaller number of students have used Tinder (17.3%), Bumble (7.6%) and Grindr (4.0%) in the last year.
          </p>
          <p>Thirteen percent of students in relationships say they met their partner on a dating app. That was the fourth most commonly selected option after mutual friends (28.2%), shared hometown or high school (24.8%), shared extracurricular (18.4%) and shared class (13.2%). Less common options included social outings (10.9%) and Wildcat Welcome (9.6%). Respondents could select multiple responses.
          </p>
          <p>Some students wrote in answers. Three students said they met their significant other through Marriage Pact.
          </p>
          <p>One student said they met their partner in Mudd Library. Someone found love in a hopeless place.
          </p>
        </FlourishBlock>
        
        <div className="article-card-section" ref={moreStoriesRef}>
          <h2 className="more-stories-header">For more in-depth stories:</h2>
          <button 
            className="scroll-arrow" 
            onClick={() => scrollToRef(dashboardRef)} 
            aria-label="Scroll to Federal Policies"
          >
          ↓
        </button>
          <div className="card-grid">
          <SurveyCard
            title="Campus Speech"
            imageUrl="campus-speech-photo.JPG"
            onClick={() => window.open('https://dailynorthwestern.com/2025/05/07/campus/poll-campus-speech/', '_blank')}
          />

          <SurveyCard
            title="Federal Policies"
            imageUrl="federal-funding-illo.jpg"
            onClick={() => window.open('https://dailynorthwestern.com/2025/05/07/campus/poll-federal-policies/', '_blank')}
          />

          <SurveyCard
            title="Generative AI"
            imageUrl="generative-ai-illo.jpg"
            onClick={() => window.open('https://dailynorthwestern.com/2025/05/07/campus/poll-gen-ai/', '_blank')}
          />  
          <SurveyCard
            title="Mental Health & Social Life"
            imageUrl="mental-health-illo.png"
            onClick={() => window.open(' https://dailynorthwestern.com/2025/05/07/campus/poll-mental-and-social-health/', '_blank')}
          />  
          <SurveyCard
            title="Romantic Relationships"
            imageUrl="romance-photo.jpg"
            onClick={() => window.open('https://dailynorthwestern.com/2025/05/07/campus/poll-romantic-relationships/', '_blank')}
          />  
          <SurveyCard
            title="Politics: Fall & Now"
            imageUrl="northwestern-politics-photo.jpg"
            onClick={() => window.open('https://dailynorthwestern.com/2025/05/07/campus/poll-fall-and-now/', '_blank')}
          />  

          </div>
      </div>

      <div className="polling-dashboard-wrapper" ref={dashboardRef}>
      <PollingDashboard/>
      </div>


      <Footer/>
    </div>
  </div>
  </>
  );
}

export default App;
