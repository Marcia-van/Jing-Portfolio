import React, { useState, useEffect } from 'react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // 逻辑控制：处理导航高亮
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education & Skills', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F5EFE6] text-[#3E2F2B]">

{/* ============================================================
          HEADER / NAVIGATION (全名保持 + 悬停灰色阴影效果)
          ============================================================ */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-[1600px] w-[90vw] mx-auto flex justify-between items-center">

          {/* 名字区域：保持全名 JING ZHANG，不缩写 */}
          <div className="text-2xl lg:text-3xl font-black text-main tracking-tighter">
            JING ZHANG
          </div>

          {/* 桌面端导航 */}
          <nav className="hidden lg:flex items-center space-x-2"> {/* 缩小了外层间距，因为按钮自带 padding */}
            {navItems.map((item) => {
              // ------------------------------------------------------------
              // 字体大小调整控制位：在这里修改 [16px] 即可
              // ------------------------------------------------------------
              const navFontSize = "text-[16px]";

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                    ${navFontSize} 
                    px-5 py-2 rounded-full font-bold uppercase tracking-widest transition-all duration-300
                    
                    /* 鼠标悬停效果：淡灰色背景阴影 */
                    hover:bg-gray-200/60 hover:shadow-sm
                    
                    /* 激活状态与普通状态颜色切换 */
                    ${activeSection === item.id 
                      ? 'text-accent bg-gray-200/80 shadow-inner' 
                      : 'text-main/60'}
                  `}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* 移动端菜单按钮 */}
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>


      {/* ============================================================
         PAGE 1: HOME (颜色重构 + 图片交互)
         ============================================================ */}
      <section id="home" className="full-page px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] items-stretch w-full rounded-3xl overflow-hidden shadow-xl lg:shadow-none">

          {/* LEFT COLUMN: TEXT CONTENT - 背景改为 #FFF8F0 */}
          <div className="flex flex-col items-start p-10 lg:p-16 bg-[#FFF8F0] animate-in justify-center">
            {/* Block 1: Name - 一级色 */}
            <h1 className="text-5xl lg:text-6xl font-black text-[#4B2E2B] mb-2 tracking-tight">
              JING ZHANG
            </h1>

{/* Block 2: Professional Headline - 您可以在此处自行调整 text- 类名来改变大小 */}
            <h2 className="text-3xl lg:text-3.5xl font-bold text-accent mb-8 leading-snug w-full">
              Cross-Cultural Project Coordinator
            </h2>

            {/* Block 3: Key Competencies - 二级色突出 */}
            <div className="text-base lg:text-lg text-[#8C5A3C] font-bold mb-10 flex flex-wrap items-center gap-x-4 gap-y-3 uppercase tracking-wide">
              <span>Business Coordination</span>
              <span className="text-accent/30 hidden md:inline">|</span>
              <span>Negotiation Support</span>
              <span className="text-accent/30 hidden md:inline">|</span>
              <span>International Communication</span>

              <div className="ml-0 md:ml-2 px-3 py-1 border-2 border-accent text-accent rounded-md inline-flex items-center shadow-[2px_2px_0px_rgba(31,58,95,1)] bg-white/50">
                4 Years Experience
              </div>
            </div>

            {/* Block 4: Academic Edge - 一级/二级混合 */}
            <div className="mb-10 w-full max-w-2xl">
              <p className="text-lg text-[#4B2E2B] font-bold mb-3 uppercase tracking-tight">Academic Edge & Methodology:</p>
              <div className="space-y-4 border-l-2 border-accent/40 pl-6 py-1">
                <p className="text-[#8C5A3C] leading-relaxed text-lg">
                  <span className="font-bold text-accent">Linguistics Perspective:</span> Precision in language decoding and high-stakes bilingual negotiation.
                </p>
                <p className="text-[#8C5A3C] leading-relaxed text-lg">
                  <span className="font-bold text-accent">Anthropology Perspective:</span> Deep cultural empathy to bridge operational gaps between Chinese and global teams.
                </p>
              </div>
            </div>

            {/* Block 5: Work Authorization Note */}
            <div className="flex items-center space-x-2 mb-8 px-3 py-2 bg-white/60 border-l-2 border-[#1F3A5F] rounded-r">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F3A5F]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] font-black uppercase tracking-[0.15em] text-[#4B2E2B]">
                Authorized to work in Germany (No sponsorship required)
              </span>
            </div>

            {/* CTA Button */}
            <a href="#contact" className="bg-accent text-white px-10 py-4 rounded-full font-bold text-base hover:shadow-xl transition-all transform hover:-translate-y-1">
              Get In Touch
            </a>
          </div>

{/* RIGHT COLUMN: PROFILE IMAGE - 添加偏移量控制 */}
    {/* 1. 修改了 lg:justify-end 为 lg:justify-center，方便从中间开始偏移 */}
    <div className="flex items-center justify-center lg:justify-center bg-[#F5EFE6] p-10 lg:p-0 animate-in group" style={{ animationDelay: '0.2s' }}>

      {/* 2. 在下面这个 div 的 className 中，你可以通过调整 -translate-x-10 来控制向左移动的距离 */}
      {/* -translate-x-10 代表向左移 2.5rem，你可以改成 -translate-x-5(小移) 或 -translate-x-20(大移) */}
      <div className="relative w-[280px] lg:w-[360px] aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-500 transform group-hover:scale-[1.03] group-hover:shadow-2xl lg:-translate-x-0">

        <img
          src="/assets/me1.png"
          alt="Jing Zhang"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/380x507/3E2F2B/F5EFE6?text=Jing+Zhang' }}
        />

        {/* 动态外框线条 */}
        <div className="absolute inset-0 border-2 border-white/40 rounded-2xl transition-colors duration-500 group-hover:border-accent/40 pointer-events-none"></div>
      </div>
    </div>
        </div>
      </section>
      {/* END PAGE 1 */}


{/* ============================================================
          PAGE 2: ABOUT ME (文字分级优化版)
          ============================================================ */}
      <section id="about" className="min-h-screen flex items-start py-10 px-6 overflow-hidden pt-[150px]">
        {(() => {
          const ABOUT_CONFIG = {
            title: "About Me",
            subtitle: "Bridging Teams with Cultural Depth and Business Insight",
            sections: [
              {
                id: "background",
                heading: "Background",
                items: [
                  "Linguistics & Anthropology background focused on **cross-cultural interaction**.",
                  "**4 years professional experience** in Beijing in business coordination and ops.",
                  "Supported high-stakes **negotiations and events** for global stakeholders."
                ]
              },
              {
                id: "perspective",
                heading: "Perspective & Motivation",
                items: [
                  "Recognized **communication** as the core factor behind business efficiency.",
                  "Pursued Anthropology in Germany to master **human behavior** within global operational frameworks.",
                  "Deep focus on *cultural decision-making*."
                ]
              }
            ],
            currentStatus: {
              heading: "Current Status",
              stats: [
                "Based in Germany (Thesis Stage)",
                "Available Immediately",
                "Authorized to work "
              ]
            },
            strategicValue: {
              heading: "Strategic Value",
              starPoints: [
                { x: 50, y: 12 },
                { x: 92, y: 42 },
                { x: 78, y: 82 },
                { x: 22, y: 82 },
                { x: 8, y: 42 }
              ],
              values: [
                'Cross-cultural communication',
                'Stakeholder alignment',
                'Collaboration support',
                'China–Europe context',
                'Strategy awareness'
              ]
            }
          };

          return (
            <div className="max-w-[1500px] w-[88vw] mx-auto h-full">
              <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16 items-start h-full">

                {/* 左侧栏: 文字内容 */}
                <div className="flex flex-col space-y-10 animate-in">
                  <div>
                    <h2 className="text-5xl lg:text-[60px] font-[900] text-[#4B2E2B] mb-4 uppercase tracking-tight leading-none">
                      {ABOUT_CONFIG.title}
                    </h2>
                    <h3 className="text-2xl lg:text-[28px] font-[700] text-accent/70 leading-[1.3] max-w-[850px]">
                      {ABOUT_CONFIG.subtitle}
                    </h3>
                  </div>

                  {/* 背景与视野 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {ABOUT_CONFIG.sections.map((section) => (
                      <div key={section.id} className="space-y-5">
                        <h4 className="text-[26px] lg:text-[30px] font-[800] text-[#4B2E2B] border-b-2 border-accent/20 pb-2">
                          {section.heading}
                        </h4>
                        {/* 解释性列表文字：下调一号至 18px-20px */}
                        <ul className="space-y-5 text-[#1F3A5F] text-[18px] lg:text-[20px] font-medium leading-[1.7]">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-3 text-accent font-black text-lg">•</span>
                              <span dangerouslySetInnerHTML={{
                                __html: item
                                  .replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-[#1F3A5F]">$1</span>')
                                  .replace(/\*(.*?)\*/g, '<span class="italic">$1</span>')
                              }}></span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* 状态卡片 */}
                  <div className="p-7 mt-4 bg-[#FFF8F0] border-l-4 border-accent rounded-[20px] shadow-sm w-full">
                    <h4 className="text-[20px] lg:text-[22px] font-[800] text-[#4B2E2B] mb-5 uppercase tracking-wide text-center lg:text-left">
                      {ABOUT_CONFIG.currentStatus.heading}
                    </h4>
                    {/* 状态要点文字：下调一号至 17px-19px */}
                    <div className="flex flex-col sm:flex-row justify-around items-center gap-6 text-[#1F3A5F] text-[17px] lg:text-[18px] font-black max-w-[950px] mx-auto lg:mx-0">
                      {ABOUT_CONFIG.currentStatus.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center whitespace-nowrap">
                          <span className="w-2.5 h-2.5 rounded-full bg-accent mr-3 shrink-0"></span>
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 右侧栏: 五角星视觉图 */}
                <div className="flex flex-col items-center justify-center animate-in w-full h-full lg:pt-12" style={{ animationDelay: '0.1s' }}>
                  <div className="w-full max-w-[440px] flex flex-col items-center">
                    <h4 className="text-[26px] lg:text-[30px] font-[800] text-[#4B2E2B] mb-10 uppercase tracking-tight text-center">
                      {ABOUT_CONFIG.strategicValue.heading}
                    </h4>

                    <div className="relative w-full aspect-square max-w-[380px]">
                      {/* 中心点 */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                        <div className="text-white text-[11px] font-black text-center leading-none">CORE<br/>VALUE</div>
                      </div>

                      {/* 星形连线图 */}
                      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                        <polygon
                          points={ABOUT_CONFIG.strategicValue.starPoints.map(p => `${p.x},${p.y}`).join(' ')}
                          fill="none"
                          stroke="#1F3A5F"
                          strokeWidth="0.8"
                        />
                        {ABOUT_CONFIG.strategicValue.starPoints.map((p, i) => (
                          <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke="#1F3A5F" strokeWidth="1.2" />
                        ))}
                      </svg>

                      {/* 标签文字：下调一号至 12px-14px */}
                      {ABOUT_CONFIG.strategicValue.values.map((text, idx) => (
                        <div
                          key={idx}
                          className="absolute transition-all duration-300 hover:scale-110"
                          style={{
                            left: `${ABOUT_CONFIG.strategicValue.starPoints[idx].x}%`,
                            top: `${ABOUT_CONFIG.strategicValue.starPoints[idx].y}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <div className="flex flex-col items-center group">
                            <div className="w-3.5 h-3.5 rounded-full bg-accent group-hover:ring-4 ring-accent/20 mb-2 shadow-sm"></div>
                            <div className="star-label text-[12px] lg:text-[14px] font-black text-[#1F3A5F] text-center uppercase tracking-tighter bg-white/95 px-2.5 py-1.5 rounded-lg shadow-md border border-accent/10 whitespace-nowrap">
                              {text}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}
      </section>



{/* PAGE 3: EXPERIENCE */}
      <section id="experience" className="py-20 px-6 lg:px-12 bg-[#EFE9E3]">
        {(() => {
          // 定义自动滚动的逻辑组件
          const ScrollBox = ({ children }) => {
            const scrollRef = React.useRef(null);
            const [isHovered, setIsHovered] = React.useState(false);

            React.useEffect(() => {
              let scrollInterval;
              if (isHovered && scrollRef.current) {
                scrollInterval = setInterval(() => {
                  const container = scrollRef.current;
                  // 这里的 1 代表每次移动 1 像素，20 代表每 20 毫秒移动一次
                  // 如果想更慢，可以改成 0.5 或者增加间隔时间
                  if (container.scrollTop + container.clientHeight < container.scrollHeight) {
                    container.scrollTop += 1;
                  }
                }, 20);
              }
              return () => clearInterval(scrollInterval);
            }, [isHovered]);

            return (
              <div
                ref={scrollRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative bg-[#FCFBF8] rounded-[26px] px-8 py-10 lg:px-12 lg:py-12 shadow-[0_8px_24px_rgba(0,0,0,0.05)] border border-[#1F3A5F]/8 h-[700px] lg:h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8C5A3C]/20 scrollbar-track-transparent transition-all duration-300 hover:border-[#8C5A3C]/40"
              >
                {children}
              </div>
            );
          };

          const leftPageData = [
            {
              id: "universal",
              label: "KEY PROJECT EXPERIENCE",
              title: "Universal Studios Beijing (Pre-opening Phase)",
              role: "Corporate Administration (Business Coordination)",
              imageUrl: "",
              caption: "",
              points: [
                "Supported communication and coordination between internal teams and external stakeholders during the **pre-opening phase** of a large-scale **international theme park project**.",
                "Participated in business discussions with the **French executive chef**, helping align multiple stakeholders in a competitive bidding environment.",
                "Contributed to securing a **supply contract** for a high-end commercial district, representing the **largest order** for the subsidiary company in the past decade."
              ]
            },
            {
              id: "ciftis",
              label: "INTERNATIONAL TRADE FAIR",
              title: "China International Fair for Trade in Services (CIFTIS)",
              role: "Product Communication & External Engagement",
              imageUrl: "/assets/FMH.jpg",
              caption: "Exhibitor badge – CIFTIS",
              points: [
                "Introduced the company’s products to **domestic and international exhibitors** and visitors in a major trade fair environment.",
                "Supported **external communication** and on-site engagement by explaining product features and brand positioning to diverse audiences.",
                "Contributed to the company’s visibility in an **international business and services platform**."
              ]
            }
          ];

          const rightPageData = [
            {
              id: "expo",
              label: "INTERNATIONAL EXHIBITION",
              title: "International Horticultural Exhibition 2019",
              role: "Bilingual Presentation & On-site Coordination",
              imageUrl: "/assets/SYH.jpg",
              caption: "Exhibitor badge – Expo 2019 Beijing",
              points: [
                "Provided **bilingual communication** and visitor-facing support in an international exhibition environment.",
                "Assisted with **exhibition setup** and on-site presentation, helping the company engage effectively with diverse audiences.",
                "Contributed to the execution of an **award-recognized** exhibition project."
              ]
            },
            {
              id: "jd",
              label: "E-COMMERCE COORDINATION",
              title: "JD.com (Joybuy)",
              role: "Brand Coordination & Campaign Support Intern",
              imageUrl: "",
              caption: "",
              points: [
                "Coordinated with domestic and international brands in the **mother-and-baby sector** within one of China’s largest e-commerce platforms.",
                "Supported **campaign execution** in a fast-paced environment, facilitating communication between suppliers and internal teams under **tight timelines**.",
                "Gained exposure to **market strategies** and cross-border e-commerce practices, developing adaptability and strong communication."
              ]
            }
          ];

          const renderItem = (item, isFirst = false) => (
            <article
              key={item.id}
              className={`${isFirst ? "" : "pt-10 lg:pt-14"} border-t border-[#8C5A3C]/15 first:border-t-0 first:pt-0 text-center`}
            >
              <span className="block text-[18px] lg:text-[20px] font-semibold text-[#8C5A3C] uppercase tracking-[0.14em] mb-4">
                {item.label}
              </span>

              <h3 className="text-[#1F3A5F] text-[30px] lg:text-[34px] leading-[1.16] font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-[18px] lg:text-[20px] leading-[1.3] font-semibold tracking-[0.04em] text-[#4B2E2B] mb-5 uppercase">
                {item.role}
              </p>

              {item.imageUrl ? (
                <div className="mb-6 flex flex-col items-center">
                  <div className="inline-block overflow-visible">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-[130px] lg:w-[155px] h-auto rounded-[10px] shadow-sm object-cover transition-transform duration-500 ease-out hover:scale-[2.2] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:z-50 relative bg-white cursor-zoom-in origin-center"
                    />
                  </div>
                  <p className="text-[14px] lg:text-[15px] leading-[1.4] font-medium text-[#8C5A3C] mt-3 italic">
                    {item.caption}
                  </p>
                </div>
              ) : null}

              <ul className="space-y-3 inline-block text-left max-w-[90%] mx-auto">
                {item.points.map((pt, idx) => {
                  const formattedPt = pt.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #1F3A5F; font-weight: 800;">$1</strong>');
                  return (
                    <li
                      key={idx}
                      className="text-[17px] lg:text-[19px] leading-[1.6] font-normal text-[#4B2E2B] flex items-start"
                    >
                      <span className="text-[#1F3A5F] mr-3 mt-[4px] shrink-0">•</span>
                      <span dangerouslySetInnerHTML={{ __html: formattedPt }} />
                    </li>
                  );
                })}
              </ul>
            </article>
          );

          return (
            <div className="max-w-[1600px] mx-auto">
              <div className="text-center mb-16 lg:mb-20">
                <h2 className="text-[22px] lg:text-[26px] font-bold text-[#8C5A3C] uppercase tracking-[0.2em] mb-4">
                  Selected Experience
                </h2>
                <p className="text-[#1F3A5F] font-black text-[32px] lg:text-[42px] leading-tight tracking-tight">
                  Cross-Cultural Project Experience
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Left page - 使用自动滚动组件 */}
                <ScrollBox>
                  <div className="space-y-0">
                    {leftPageData.map((item, index) => renderItem(item, index === 0))}
                  </div>
                </ScrollBox>

                {/* Right page - 使用自动滚动组件 */}
                <ScrollBox>
                  <div className="space-y-0">
                    {rightPageData.map((item, index) => renderItem(item, index === 0))}
                  </div>
                </ScrollBox>
              </div>
            </div>
          );
        })()}
      </section>



{/* PAGE 4: SKILLS & ACADEMIC BACKGROUND */}
<section id="education" className="pt-16 pb-26 px-6 lg:px-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* 2. Education Path (Visual Roadmap) - Enlarged and used as main heading */}
    <div className="mb-36 animate-in" style={{ animationDelay: '0.1s' }}>
      <h4 className="text-[28px] lg:text-[34px] font-semibold text-[#8C5A3C] uppercase tracking-[0.14em] mb-10border-b-2 border-[#8C5A3C]/10 pb-5 inline-block">
        Educational Development Path
      </h4>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 mt-8">
        {/* Visual Connection Line */}
        <div className="absolute top-[60px] left-0 w-full h-[2px] bg-[#CBDCEB]/10 hidden lg:block"></div>

        {[
          {
            title: "Public Administration + English",
            subtitle: "Double Degree",
            desc: "Foundation in organizational structures, professional communication, and language proficiency.",
            focus: "ORGANIZATION"
          },
          {
            title: "Linguistics & Applied Linguistics",
            subtitle: "Postgraduate Focus",
            desc: "Focus on meaning, interpretation, and language use in high-stakes real contexts.",
            focus: "LANGUAGE"
          },
          {
            title: "Anthropology",
            subtitle: "M.A., Thesis Stage (FAU)",
            desc: "Focus on culture, human interaction, and communication across global contexts.",
            focus: "CULTURE"
          }
        ].map((stage, i) => (
          <div key={i} className="relative group px-0 lg:px-8 mb-20 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Marker */}
              <div className="w-[120px] h-[120px] rounded-full bg-[#FAF9F6] border-2 border-[#1F3A5F]/15 flex items-center justify-center mb-10 relative z-10 group-hover:border-[#1F3A5F] transition-all duration-300">
                <span className="text-[18px] lg:text-[19px] font-extrabold text-[#1F3A5F] uppercase tracking-tight">
                  {stage.focus}
                </span>
              </div>

              <h5 className="text-[36px] lg:text-[42px] font-bold text-[#1F3A5F] mb-4 leading-[1.15] max-w-[420px]">
                {stage.title}
              </h5>

              <span className="text-[22px] lg:text-[24px] font-semibold text-[#8C5A3C] uppercase tracking-wide mb-5 block">
                {stage.subtitle}
              </span>

              <p className="text-[24px] lg:text-[26px] leading-[1.65] text-[#4B2E2B] font-normal max-w-[430px]">
                {stage.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Logic Summary Bar */}
      <div className="mt-16 flex justify-center lg:justify-start">
        <div className="bg-[#1F3A5F] text-white px-10 py-4 rounded-full flex items-center space-x-4 shadow-md">
          <span className="text-[15px] lg:text-[16px] font-bold uppercase tracking-[0.1em] opacity-80">
            Transition:
          </span>
          <span className="text-[18px] lg:text-[20px] font-semibold tracking-[0.04em]">
            Org → Language → Culture → Coordination
          </span>
        </div>
      </div>
    </div>


{/* Languages & Skills - 适中拉伸 & 字号加大版 */}
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 mb-24 items-stretch">
  {/* LANGUAGES - 增加内边距与字号 */}
  <div className="animate-in bg-white p-10 lg:p-12 rounded-[40px] border-2 border-[#1F3A5F]/10 shadow-lg flex flex-col">
    <h4 className="text-[28px] lg:text-[32px] font-black text-[#1F3A5F] uppercase tracking-[0.15em] mb-10 flex items-center">
       <span className="w-14 h-[4px] bg-[#8C5A3C] mr-5"></span> LANGUAGES
    </h4>
    {/* 间距调整为适中的 space-y-8 */}
    <div className="space-y-8 flex-grow">
       {[
         { lang: "Chinese", level: "Native (Mandarin, Sichuan)", desc: "Mother tongue with deep cultural and regional nuances." },
         { lang: "English", level: "Professional working proficiency", desc: "Fluent in business negotiation and daily operations." },
         { lang: "German", level: "approx. B2, actively improving", desc: "Solid conversational base and rapid professional integration." }
       ].map((l, i) => (
         <div key={i} className="group pb-8 border-b border-[#1F3A5F]/5 last:border-0 last:pb-0">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-3">
              {/* 语言名称加大到 34px-38px */}
              <span className="text-[32px] lg:text-[38px] font-black text-[#1F3A5F] tracking-tighter leading-none group-hover:text-[#8C5A3C] transition-colors">{l.lang}</span>
              <span className="text-[15px] lg:text-[17px] font-black text-[#8C5A3C] uppercase tracking-[0.2em]">{l.level}</span>
            </div>
            {/* 描述文字加大到 20px-24px */}
            <p className="text-[20px] lg:text-[24px] text-[#4B2E2B] font-medium leading-relaxed opacity-80">{l.desc}</p>
         </div>
       ))}
    </div>
  </div>

  {/* SKILLS - 增加卡片间距与文字大小 */}
  <div className="animate-in flex flex-col">
    <div className="bg-[#1F3A5F]/5 p-10 lg:p-12 rounded-[40px] border-2 border-[#1F3A5F]/10 shadow-inner h-full">
      <h4 className="text-[28px] lg:text-[32px] font-black text-[#1F3A5F] uppercase tracking-[0.15em] mb-10 flex items-center">
         <span className="w-14 h-[4px] bg-[#8C5A3C] mr-5"></span> SKILLS
      </h4>
      {/* 间隙调整为 gap-6 */}
      <div className="grid grid-cols-1 gap-6">
        {[
          { title: "MS Office", tools: "Word, PowerPoint, Excel; PivotTables, VLOOKUP, charts" },
          { title: "Editing tools", tools: "CapCut, basic Photoshop, Meitu, Blender" },
          { title: "Technical tools", tools: "Python (PyCharm) and basic web development" },
          { title: "AI tools", tools: "Midjourney, Runway, Suno (visual & idea development)" }
        ].map((s, i) => (
          <div key={i} className="group bg-white p-8 lg:p-9 rounded-2xl shadow-sm border border-[#1F3A5F]/5 flex flex-col sm:flex-row items-start sm:items-center">
            <div className="sm:w-1/3 mb-3 sm:mb-0">
              {/* 技能标题加大 */}
              <h5 className="text-[23px] lg:text-[26px] font-black text-[#1F3A5F] leading-tight group-hover:text-[#8C5A3C] transition-colors">
                {s.title}
              </h5>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:border-l border-[#1F3A5F]/10">
              {/* 工具描述加大到 19px-22px */}
              <p className="text-[19px] lg:text-[22px] text-[#4B2E2B] leading-relaxed font-medium">
                {s.tools}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


          {/* 4. Certifications & Current Status - 已修正证书信息 */}
          <div className="animate-in mb-32">
             <div className="bg-white p-12 lg:p-20 rounded-[50px] shadow-xl border border-[#8C5A3C]/15 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#8C5A3C]/10 hidden lg:block"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                   {/* Left: Certifications - 更新证书列表并减小字号 */}
                   <div className="space-y-10 lg:space-y-12">
                      <div className="flex items-center space-x-4">
                         <div className="w-2 h-10 bg-[#8C5A3C]"></div>
                         <h4 className="text-[28px] lg:text-[32px] font-black text-[#8C5A3C] uppercase tracking-[0.25em]">Certifications</h4>
                      </div>
                      <div className="space-y-8 lg:space-y-10">
                         {[
                           { name: "PSC Level 2-A", detail: "a national certification indicating good standard Mandarin pronunciation and clear spoken communication." },
                           { name: "National Computer Test (CCT)", detail: "a standardized certification covering basic computer skills and data processing" }
                         ].map((c, i) => (
                           <div key={i} className="flex flex-col group p-5 lg:p-6 rounded-2xl hover:bg-[#F3F2EE]/50 transition-colors">
                              <span className="text-[30px] lg:text-[34px] font-black text-[#1F3A5F] mb-2 group-hover:text-[#8C5A3C] transition-colors">{c.name}</span>
                              <span className="text-[16px] lg:text-[18px] font-semibold text-[#4B2E2B]/70 uppercase tracking-widest">{c.detail}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Right: Current Status */}
                   <div className="space-y-10 lg:space-y-28">
                      <div className="flex items-center space-x-4">
                         <div className="w-2 h-10 bg-[#1F3A5F]"></div>
                         <h4 className="text-[28px] lg:text-[29px] font-black text-[#1F3A5F] uppercase tracking-[0.25em]">Professional Status</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-6 lg:gap-8">
                         {[
                           { label: "Location", val: "Germany Based" },
                           { label: "Academic", val: "M.A. Thesis Stage" },
                           { label: "Availability", val: "Immediate" },
                           { label: "Work Authorization", val: "Full Labor Access" }
                         ].map((stat, i) => (
                           <div key={i} className="flex flex-col border-l-4 border-[#1F3A5F]/10 pl-8 py-2">
                              <span className="text-[13px] font-black text-[#8C5A3C] uppercase tracking-[0.4em] mb-2">{stat.label}</span>
                              <span className="text-[24px] lg:text-[28px] font-black text-[#4B2E2B] leading-none tracking-tight">{stat.val}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Technical Tools Breakdown */}
          <div className="animate-in bg-[#1F3A5F]/5 p-12 lg:p-16 rounded-[40px] border border-[#1F3A5F]/10">
              <h4 className="text-[22px] lg:text-[24px] font-black text-[#1F3A5F] uppercase tracking-[0.3em] mb-12 text-center">Technical Proficiency & Modern Tools</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { label: "MS OFFICE", items: "Excel (Pivot, VLOOKUP), PPT, Word" },
                   { label: "EDITING", items: "CapCut, Photoshop, Meitu, Blender" },
                   { label: "TECHNICAL", items: "Python (PyCharm), Web Dev basics" },
                   { label: "AI TOOLS", items: "Midjourney, Runway, Suno" }
                 ].map((t, idx) => (
                   <div key={idx} className="bg-white p-8 rounded-2xl text-center shadow-sm border-b-4 border-transparent hover:border-[#8C5A3C] transition-all">
                      <p className="text-[14px] font-black text-[#8C5A3C] tracking-widest mb-4 uppercase">{t.label}</p>
                      <p className="text-[20px] lg:text-[22px] font-extrabold text-[#4B2E2B] leading-snug">{t.items}</p>
                   </div>
                 ))}
              </div>
          </div>
        </div>
      </section>

{/* PAGE 5: CONTACT - 修复白屏与逻辑自洽版本 */}
      {(() => {
        // 在此处定义局部状态，防止外部未定义导致的崩溃
        const [showCopyTooltip, setShowCopyTooltip] = React.useState(false);

        const handleCopyPhone = () => {
          if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText("+49 176 42982079");
            setShowCopyTooltip(true);
            setTimeout(() => setShowCopyTooltip(false), 2000);
          }
        };

        return (
          <section id="contact" className="py-32 lg:py-48 px-6 lg:px-24 bg-[#EFE9E3] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#8C5A3C]/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C08552]/5 rounded-full -ml-40 -mb-40 blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                <div className="animate-in">
                  <span className="text-[#C08552] font-black uppercase tracking-[0.4em] text-sm mb-6 block">Career Engagement</span>
                  <h3 className="text-5xl lg:text-7xl font-black text-[#3E2F2B] mb-10 leading-[1.1] tracking-tighter">
                    Let's Build <br/><span className="text-[#8C5A3C]">Connections.</span>
                  </h3>
                  <p className="text-[#3E2F2B]/70 text-xl font-medium max-w-md leading-relaxed mb-12 border-l-2 border-[#C08552] pl-6">
                    Ready to contribute my coordination expertise to your team in Germany or remotely.
                  </p>

                  <div className="space-y-8">
                    {/* 地图跳转 */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Nuremberg,Germany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group cursor-pointer transition-all hover:translate-x-2"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#3E2F2B] text-white flex items-center justify-center mr-6 group-hover:bg-[#8C5A3C] shadow-lg transition-all">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg>
                    </div>
                    <div>
                      <span className="text-[#3E2F2B] font-black text-lg uppercase tracking-widest block">Nuremberg</span>
                      <span className="text-[#C08552] text-xs font-black uppercase tracking-[0.2em]">Get Directions to My Location →</span>
                    </div>
                  </a>

                    {/* 电话复制 */}
                    <div
                      onClick={handleCopyPhone}
                      className="flex items-center group cursor-pointer relative transition-all hover:translate-x-2"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#C08552] text-white flex items-center justify-center mr-6 group-hover:bg-[#8C5A3C] shadow-lg transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[#3E2F2B] font-black text-lg tracking-widest block">+49 176 42982079</span>
                        <span className="text-[#C08552] text-xs font-black uppercase tracking-[0.2em]">Click to Copy Number</span>
                      </div>

                      {showCopyTooltip && (
                        <div className="absolute left-20 -top-10 bg-[#3E2F2B] text-white text-[10px] font-black px-4 py-2 rounded-xl animate-bounce shadow-2xl uppercase tracking-[0.2em] z-50">
                          ✓ Copied to Clipboard
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="animate-in space-y-8 lg:mt-4" style={{ animationDelay: '0.2s' }}>
                  {/* 邮件联系 */}
                  <div className="bg-white p-10 lg:p-12 rounded-[40px] shadow-xl border border-[#C08552]/20 relative transition-transform hover:-translate-y-1">
                    <h4 className="text-xl font-black text-[#3E2F2B] mb-8 uppercase tracking-widest">Inquiry & Collaboration</h4>
                    <a
                      href="mailto:zhangjingmarcia123@gmail.com"
                      className="group block w-full bg-[#C08552] text-white p-6 rounded-2xl text-center transition-all hover:bg-[#8C5A3C] shadow-md hover:shadow-xl active:scale-95"
                    >
                      <span className="block text-[10px] font-black uppercase tracking-[0.3em] mb-1 opacity-80">Send Direct Email</span>
                      <span className="block text-base font-black group-hover:underline tracking-tight">zhangjingmarcia123@gmail.com</span>
                    </a>
                  </div>

{/* 职业平台入口 - 颜色修正版 */}
               <div className="bg-[#C08552] p-10 lg:p-12 rounded-[40px] shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <h4 className="text-xl font-extrabold text-[#FFF8F0] mb-8 uppercase tracking-widest relative z-10">Professional Footprint</h4>
                  <div className="grid grid-cols-1 gap-4 relative z-10">
                     <a
                      href="https://www.linkedin.com/in/jing-zhang-43a548278/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/40 p-6 rounded-xl transition-all group/link"
                     >
                        {/* 强制文字为 FFF8F0 并加粗 */}
                        <span className="text-[#FFF8F0] font-extrabold uppercase tracking-widest text-sm">LinkedIn Profile</span>
                        <div className="w-10 h-10 rounded-full bg-[#FFF8F0] flex items-center justify-center group-hover/link:rotate-12 transition-all">
                          <svg className="w-5 h-5 text-[#C08552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                     </a>
                  </div>
               </div>
            </div>

              </div>
            </div>
          </section>
        );
      })()}

      <footer className="py-16 bg-white border-t border-gray-100 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-black text-[#4B2E2B] uppercase tracking-[0.3em] leading-loose mb-4">
            &copy; 2024 Jing Zhang. Corporate Administration (Business Coordination).
          </p>
          <div className="w-12 h-[2px] bg-[#8C5A3C] mx-auto mb-4"></div>
          <p className="text-[9px] font-bold text-[#4B2E2B]/40 uppercase tracking-[0.1em]">
            Synthesizing Linguistics and Anthropology for Global Business Excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;