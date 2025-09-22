import React, { useEffect } from 'react';
import '../index.css';

const topicsData = {
    "Demographics": [
        { id: 'sexual-orientation', label: 'Sexual Orientation' },
        { id: 'international', label: 'International' },
        { id: 'race', label: 'Race' },
        { id: 'financial-aid', label: 'Financial Aid' },
    ],
    "Campus Speech": [
      { id: 'comfortable-expressing-views', label: 'Comfortable Expressing Views' },
      { id: 'pressure-to-align', label: 'Pressure to Align' },
      { id: 'political-culture-compare', label: 'Political Culture Compared to Own' },
      { id: 'meaningful-conversations', label: 'Meaningful Conversations' },
      { id: 'antisemitism-problem', label: 'Antisemitism is a Problem' },
      { id: 'antisemitism-experiences', label: 'Antisemitism Experiences' },
      { id: 'islamophobia-problem', label: 'Islamophobia is a Problem' },
      { id: 'islamophobia-experiences', label: 'Islamophobia Experiences' },
    ],
    "Federal Policy Impact": [
      { id: 'funding-cuts-education', label: 'Funding Cuts on Education' },
      { id: 'funding-cuts-career', label: 'Funding Cuts on Career Plans' },
      { id: 'deal', label: 'Deal' },
      { id: 'visa-effect-life', label: 'Visa Effect on Life' },
      { id: 'visa-effect-types', label: 'Which Ways Has Visa Affected' },
    ],
    "Wellbeing": [
      { id: 'wellbeing', label: 'Wellbeing' },
      { id: 'wellbeing-contributors', label: 'Wellbeing Contributors' },
      { id: 'sleep', label: 'Sleep' },
      { id: 'social-life-satisfaction', label: 'Social Life Satisfaction' },
      { id: 'closer-friends', label: 'Closer to Friends from Home/College' },
      { id: 'therapy', label: 'Therapy' },
    ],
    "Relationships": [
      { id: 'relationship-status', label: 'Relationship Status' },
      { id: 'long-distance', label: 'Long-Distance' },
      { id: 'relationship-origins', label: 'Relationship Origins' },
      { id: 'relationship-lengths', label: 'Relationship Lengths' },
      { id: 'dating-apps', label: 'Dating Apps' },
    ],
    "Generative AI": [
      { id: 'ai-usage', label: 'Usage' },
      { id: 'ai-platforms', label: 'Which Platforms' },
      { id: 'ai-uses', label: 'What Uses' },
      { id: 'ai-better-student', label: 'Better Student?' },
      { id: 'ai-good-society', label: 'Good for Society?' },
      { id: 'ai-career-prospects', label: 'Career Prospects?' },
    ],
    "Politics": [
      { id: 'political-leanings', label: 'Political Leanings' },
      { id: 'political-engagement', label: 'Political Engagement' },
      { id: 'trump', label: 'Trump' },
      { id: 'israel-palestine', label: 'Israel/Palestine' },
    ],
    "Northwestern": [
      { id: 'schill', label: 'Schill' },
      { id: 'satisfaction', label: 'Satisfaction' },
    ]
  };

const PollingResults = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  };

  const handleBroadTopicClick = (topicKey) => {
    const specificTopicsContainer = document.getElementById('specific-topics');
    const sections = document.querySelectorAll('.poll-section');

    sections.forEach(section => section.classList.remove('active'));
    specificTopicsContainer.innerHTML = '';

    if (topicsData[topicKey]) {
      topicsData[topicKey].forEach(({ id, label }) => {
        const button = document.createElement('button');
        button.className = 'specific-topic-button';
        button.innerText = label;
        button.onclick = () => {
          sections.forEach(section => section.classList.remove('active'));
          document.getElementById(id)?.classList.add('active');
          const allButtons = specificTopicsContainer.querySelectorAll('.specific-topic-button');
          allButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
        };
        specificTopicsContainer.appendChild(button);
      });
      // Trigger default
      const defaultTopic = topicsData[topicKey][0];
      document.getElementById(defaultTopic.id)?.classList.add('active');
      specificTopicsContainer.querySelector('button')?.classList.add('active');
    }
  };

  useEffect(() => {
    handleBroadTopicClick('Demographics');
  }, []);

  return (
    <div className="all-dashboard-content">
    
      <button className="toggle-sidebar" id="sidebar-toggle" onClick={toggleSidebar}>☰</button>

      <div className="broad-topic-container">
        {Object.keys(topicsData).map(topicKey => (
          <button key={topicKey} onClick={() => handleBroadTopicClick(topicKey)} data-topic={topicKey}>
            {topicKey}
          </button>
        ))}
      </div>

      <div className="questions-and-dataviz">
        <div id="sidebar" className="sidebar">
          <div id="specific-topics" className="specific-topics" />
        </div>

        <div className="main-content">
          
          {/* <!-- Demographics --> */}
            <div id="sexual-orientation" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23016445"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23016445/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            </div>
            <div id="international" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23016583"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23016583/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            </div>
            <div id="race" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23016915"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23016915/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            </div>
            <div id="sexual-orientation" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23016686"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23016686/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="financial-aid" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23016686"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23016686/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            
            {/* <!-- Campus Speech --> */}
            <div id="comfortable-expressing-views" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23011577"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23011577/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="pressure-to-align" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23011655"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23011655/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            <div id="political-culture-compare" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23011794"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23011794/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            <div id="meaningful-conversations" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22984714"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22984714/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="antisemitism-problem" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22985102"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22985102/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="antisemitism-experiences" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23015896"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23015896/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="islamophobia-problem" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23017679"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23017679/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="islamophobia-experiences" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23017394"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23017394/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>

            {/* <!--Federal Policy Impact --> */}
            <div id="funding-cuts-education" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23004130"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23004130/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            <div id="funding-cuts-career" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23004021"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23004021/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            <div id="deal" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23004259"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23004259/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="visa-effect-life" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23016670"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23016670/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="visa-effect-types" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23016763"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23016763/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>

            {/* <!-- Lifestyle --> */}
            <div id="wellbeing" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997610"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997610/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="wellbeing-contributors" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997277"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997277/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="sleep" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997566"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997566/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="social-life-satisfaction" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997448"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997448/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="closer-friends" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997673"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997673/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            <div id="therapy" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997788"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997788/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            </div>

            {/* <!-- National Politics --> */}
            <div id="relationship-status" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23014741"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23014741/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            <div id="long-distance" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997936"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997936/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            
            <div id="relationship-origins" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997993"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997993/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>

            <div id="relationship-lengths" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23017271"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23017271/thumbnail" width="100%" alt="chart visualization" /></noscript></div>      
            </div>

            <div id="dating-apps" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23016984"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23016984/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>

            
            {/* <!-- Relationships --> */}
            <div id="relationship-status" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23014741"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23014741/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            <div id="long-distance" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997936"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997936/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>
            
            <div id="relationship-origins" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997993"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997993/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>

            <div id="relationship-lengths" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23017271"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23017271/thumbnail" width="100%" alt="chart visualization" /></noscript></div>      
            </div>

            <div id="dating-apps" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23016984"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23016984/thumbnail" width="100%" alt="chart visualization" /></noscript></div>        
            </div>

            {/* Generative AI */}
            <div id="ai-usage" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22994358"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22994358/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>

            <div id="ai-platforms" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23017152"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23017152/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            <div id="ai-uses" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22997961"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997961/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>

            <div id="ai-better-student" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22998031"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22998031/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            
            <div id="ai-good-society" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22994654"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22994654/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            
            <div id="ai-career-prospects" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/23011508"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/23011508/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            
            {/* Politics */}

            <div id="political-leanings" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22998941"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22998941/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
            
            <div id="political-engagement" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22998796"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22998796/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>

            <div id="trump" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22998731"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22998731/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>

            <div id="israel-palestine" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22998563"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22998563/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>

        </div>

        {/* Northwestern */}

            <div id="schill" className="poll-section">
                    <div className="flourish-embed flourish-chart" data-src="visualisation/22997998"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22997998/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>

            <div id="satisfaction" className="poll-section">
                <div className="flourish-embed flourish-chart" data-src="visualisation/22998372"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22998372/thumbnail" width="100%" alt="chart visualization" /></noscript></div>       
            </div>
      </div>
    </div>
  );
};

export default PollingResults;
