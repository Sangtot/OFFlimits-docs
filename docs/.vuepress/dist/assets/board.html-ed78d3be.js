import{_ as u,r as o,o as h,c as p,a as e,b as n,d as t,w as a,e as d}from"./app-dc791501.js";const _={},f=e("h1",{id:"board",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#board","aria-hidden":"true"},"#"),n(" Board")],-1),b={href:"https://discord.com/oauth2/authorize?client_id=728332591790293044&scope=bot+applications.commands&permissions=268445752&client_id=728332591790293044",target:"_blank",rel:"noopener noreferrer"},g=d('<h2 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h2><p>Board is a slash command that generates beautiful leaderboard designs and images</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><p>Before using the command you have to setup OFFlimits bot in your server, and to do that you need to use the command <a href="/guide/setup">setup</a>, which will create 2 channels:</p>',4),x=d('<p>If you already have these channels you can skip <a href="/guide/setup">setup</a>.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Before using board, you need to calculate results, otherwise board will no be generated.</p></div><p>To find out how to calculate results please read guide on <a href="/guide/results">/results</a>.</p><h2 id="board-templates" tabindex="-1"><a class="header-anchor" href="#board-templates" aria-hidden="true">#</a> Board Templates</h2><p>There are 7 board templates:</p><h3 id="board-1-2" tabindex="-1"><a class="header-anchor" href="#board-1-2" aria-hidden="true">#</a> Board 1 &amp; 2</h3>',6),v=e("div",{class:"language-txt","data-ext":"txt"},[e("pre",{class:"language-txt"},[e("code",null,`   #         name        total   wins   KP   PP  
                                                 
  1.    team-one            58      2   27   31  
  2.    team-two            46      0   21   25  
  3.    team-three          42      0   29   13  
  4.    team-four           34      0   17   17  
  5.    team-five           32      1    8   24  
  6.    team-six            28      1   12   16  
  7.    team-seven          22      0    9   13  
  8.    team-eight          21      0   15    6  
  9.    team-nine           21      0   10   11  
  10.   team-ten            19      0    6   13  
  11.   team-eleven         15      0    3   12  
  12.   team-twelve         14      0   12    2  
  13.   team-thirteen       13      0    3   10  
  14.   team-fourteen        8      0    3    5  
  15.   team-fifteen         5      0    3    2  
  16.   team-sixteen         3      0    3    0  
  17.   team-seventeen       2      0    1    1  
  18.   team-eighteen        0      0    0    0  
`)])],-1),w=e("div",{class:"language-txt","data-ext":"txt"},[e("pre",{class:"language-txt"},[e("code",null,`.-----------------------------------------------.
|              RESULTS LEADERBOARD              |
|-----------------------------------------------|
|  #  |      name      | total | wins | KP | PP |
|-----|----------------|-------|------|----|----|
| 1.  | team-one       |    58 |    2 | 27 | 31 |
| 2.  | team-two       |    46 |    0 | 21 | 25 |
| 3.  | team-three     |    42 |    0 | 29 | 13 |
| 4.  | team-four      |    34 |    0 | 17 | 17 |
| 5.  | team-five      |    32 |    1 |  8 | 24 |
| 6.  | team-six       |    28 |    1 | 12 | 16 |
| 7.  | team-seven     |    22 |    0 |  9 | 13 |
| 8.  | team-eight     |    21 |    0 | 15 |  6 |
| 9.  | team-nine      |    21 |    0 | 10 | 11 |
| 10. | team-ten       |    19 |    0 |  6 | 13 |
| 11. | team-eleven    |    15 |    0 |  3 | 12 |
| 12. | team-twelve    |    14 |    0 | 12 |  2 |
| 13. | team-thirteen  |    13 |    0 |  3 | 10 |
| 14. | team-fourteen  |     8 |    0 |  3 |  5 |
| 15. | team-fifteen   |     5 |    0 |  3 |  2 |
| 16. | team-sixteen   |     3 |    0 |  3 |  0 |
| 17. | team-seventeen |     2 |    0 |  1 |  1 |
| 18. | team-eighteen  |     0 |    0 |  0 |  0 |
'-----------------------------------------------'
`)])],-1);function y(B,C){const c=o("ExternalLinkIcon"),l=o("DiscordInteraction"),s=o("DiscordMention"),r=o("DiscordMessage"),i=o("CodeGroupItem"),m=o("CodeGroup");return h(),p("div",null,[f,e("p",null,[n("This page demonstrates how to use "),e("a",b,[n("OFFlimits bot"),t(c)]),n(" to generate amazing results layouts.")]),g,t(r,{bot:!0,profile:"bot"},{interactions:a(()=>[t(l,{profile:"test",command:!0},{default:a(()=>[n("setup")]),_:1})]),default:a(()=>[n(" ✅ | Created "),t(s,{type:"channel"},{default:a(()=>[n("results-bot")]),_:1})]),_:1}),t(r,{bot:!0,profile:"bot"},{default:a(()=>[n(" ✅ | Created "),t(s,{type:"channel"},{default:a(()=>[n("operations")]),_:1})]),_:1}),x,t(m,null,{default:a(()=>[t(i,{title:"One 1"},{default:a(()=>[v]),_:1}),t(i,{title:"Two 2"},{default:a(()=>[w]),_:1})]),_:1})])}const I=u(_,[["render",y],["__file","board.html.vue"]]);export{I as default};
