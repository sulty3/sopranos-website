// Episodes Data
const episodesData = [
    // Season 1
    { season: 1, episode: 1, title: "The Sopranos", rating: 8.4, summary: "A mobster passes out at a family barbecue and seeks therapy to understand why.", date: "Jan 10, 1999", viewers: 3.45, image: "images/pilot.jpg" },
    { season: 1, episode: 2, title: "46 Long", rating: 8.2, summary: "Tony is getting fed up with his mother. Brendan Filone acts against Tony's wishes.", date: "Jan 17, 1999", viewers: 3.45, image: "images/episode1.jpg" },
    { season: 1, episode: 3, title: "Denial, Anger, Acceptance", rating: 8.5, summary: "Tony encourages an unwanted son-in-law to divorce, Carmela learns another secret of Tony's.", date: "Jan 24, 1999", viewers: 3.45, image: "images/pilot.jpg" },
    { season: 1, episode: 4, title: "Meadowlands", rating: 8.5, summary: "Brendan's death leaves Chris fearing for his life, and Anthony's discovery of what his father really does leaves him confused.", date: "Jan 31, 1999", viewers: 3.45, image: "images/meadowlands.jpg" },
    { season: 1, episode: 5, title: "College", rating: 8.9, summary: "While visiting colleges with Meadow, Tony spots a snitch. Carmela, meanwhile, discovers something about Dr. Melfi.", date: "Feb 7, 1999", viewers: 3.45, image: "images/college.jpg" },
    { season: 1, episode: 6, title: "Pax Soprana", rating: 8.4, summary: "Tony tries to balance Junior against the other capos, while Carmela reasserts herself as the woman in Tony's life.", date: "Feb 14, 1999", viewers: 3.45 },
    { season: 1, episode: 7, title: "Down Neck", rating: 8.3, summary: "Anthony has disciplinary problems at school, prompting Tony to recount memories of his childhood with Dr. Melfi.", date: "Feb 21, 1999", viewers: 3.45 },
    { season: 1, episode: 8, title: "The Legend of Tennessee Moltisanti", rating: 8.5, summary: "The FBI begins closing in on the DiMeo family. Tony and Carmela are angry over all the attention Italians get from the authorities.", date: "Feb 28, 1999", viewers: 3.45 },
    { season: 1, episode: 9, title: "Boca", rating: 8.5, summary: "The capos discuss what to do about the local soccer coach, who is to be leaving New Jersey for a new job.", date: "Mar 7, 1999", viewers: 3.45 },
    { season: 1, episode: 10, title: "A Hit Is a Hit", rating: 7.8, summary: "Tony tries to branch out into legitimate investments, while Chris and Adriana decide to try their hands at music production.", date: "Mar 14, 1999", viewers: 3.45 },
    { season: 1, episode: 11, title: "Nobody Knows Anything", rating: 8.8, summary: "Following the arrest of two of his men, Tony suspects a traitor. Efforts to discover who, however, are stymied.", date: "Mar 21, 1999", viewers: 4.19 },
    { season: 1, episode: 12, title: "Isabella", rating: 9.1, summary: "The stress Tony is going through begins to take its toll, and the hit Junior has ordered doesn't help.", date: "Mar 28, 1999", viewers: 4.19 },
    { season: 1, episode: 13, title: "I Dream of Jeannie Cusamano", rating: 9.2, summary: "Tony starts cleaning house, while Artie feels torn between keeping the peace in his household, and getting even with Tony.", date: "Apr 4, 1999", viewers: 5.22 },

    // Season 2
    { season: 2, episode: 1, title: "Guy Walks into a Psychiatrist's Office...", rating: 8.2, summary: "Pussy returns after months in hiding, Chris starts a boiler room stock operation, and Tony's long-lost sister shows up.", date: "Jan 16, 2000", viewers: 7.64 },
    { season: 2, episode: 2, title: "Do Not Resuscitate", rating: 8.0, summary: "Junior leaves prison due to ill health and placed under house arrest, while Livia's health also declines.", date: "Jan 23, 2000", viewers: 5.33 },
    { season: 2, episode: 3, title: "Toodle-Fucking-Oo", rating: 8.4, summary: "Richie Aprile gets out after ten years in prison and starts reasserting his authority while unaware of the changes made.", date: "Jan 30, 2000", viewers: 5.60 },
    { season: 2, episode: 4, title: "Commendatori", rating: 8.5, summary: "Tony, Paulie and Chris travel to Naples to conduct a business deal, while Pussy becomes more stressed.", date: "Feb 6, 2000", viewers: 7.16 },
    { season: 2, episode: 5, title: "Big Girls Don't Cry", rating: 8.4, summary: "Paulie and Silvio get promoted, Furio gets welcomed, Pussy gets pushed aside, and Chris gets frustrated.", date: "Feb 13, 2000", viewers: 5.34 },
    { season: 2, episode: 6, title: "The Happy Wanderer", rating: 8.6, summary: "Tony's old school friend digs himself into trouble with his gambling, while Tony's family problems only continue to grow.", date: "Feb 20, 2000", viewers: 5.83 },
    { season: 2, episode: 7, title: "D-Girl", rating: 8.7, summary: "Anthony continues to cause problems at home, while Pussy's divided loyalties cause him greater anguish.", date: "Feb 27, 2000", viewers: 6.66 },
    { season: 2, episode: 8, title: "Full Leather Jacket", rating: 8.8, summary: "Rebellion by some of the lower soldiers ends in bloodshed, while Carmela starts intimidating her neighbors.", date: "Mar 5, 2000", viewers: 6.29 },
    { season: 2, episode: 9, title: "From Where to Eternity", rating: 8.8, summary: "Chris awakens from his coma with a message from the afterlife for Tony and Paulie.", date: "Mar 12, 2000", viewers: 7.18 },
    { season: 2, episode: 10, title: "Bust Out", rating: 8.4, summary: "Tony continues putting the squeeze on David, while Richie discusses the possibility with Junior of removing some competition.", date: "Mar 19, 2000", viewers: 7.62 },
    { season: 2, episode: 11, title: "House Arrest", rating: 8.1, summary: "Junior feels the restrictions of his house arrest acutely, while Tony starts putting in hours at his actual job.", date: "Mar 26, 2000", viewers: 5.51 },
    { season: 2, episode: 12, title: "The Knight in White Satin Armor", rating: 9.3, summary: "Richie and Janice get engaged, but Richie's violent temper reaches a fever pitch.", date: "Apr 2, 2000", viewers: 5.44 },
    { season: 2, episode: 13, title: "Funhouse", rating: 9.4, summary: "Tony gets sick from food poisoning and blames Artie's restaurant. Pussy, meanwhile, reaches the end of the line.", date: "Apr 9, 2000", viewers: 8.97 },

    // Season 3
    { season: 3, episode: 1, title: "Mr. Ruggerio's Neighborhood", rating: 8.6, summary: "The FBI has trouble finding a new informant, so they attempt to bug the Soprano home.", date: "Mar 4, 2001", viewers: 11.26 },
    { season: 3, episode: 2, title: "Proshai, Livushka", rating: 8.6, summary: "An unexpected death brings the whole family together one more time, and old tensions resurface.", date: "Mar 4, 2001", viewers: 11.35 },
    { season: 3, episode: 3, title: "Fortunate Son", rating: 8.4, summary: "Chris becomes a made man, while Tony experiences another panic attack.", date: "Mar 11, 2001", viewers: 8.37 },
    { season: 3, episode: 4, title: "Employee of the Month", rating: 9.1, summary: "Dr. Melfi has a personal crisis. Janice has a dispute with Svetlana.", date: "Mar 18, 2001", viewers: 7.96 },
    { season: 3, episode: 5, title: "Another Toothpick", rating: 8.6, summary: "Tony and Carmela try a therapy session together and ends it angrily.", date: "Mar 25, 2001", viewers: 7.40 },
    { season: 3, episode: 6, title: "University", rating: 8.7, summary: "Noah's and Meadow's relationship is disrupted by her roommate, while Ralphie starts getting rough.", date: "Apr 1, 2001", viewers: 8.44 },
    { season: 3, episode: 7, title: "Second Opinion", rating: 8.3, summary: "Junior continues his cancer treatments, but the prognosis is iffy.", date: "Apr 8, 2001", viewers: 9.21 },
    { season: 3, episode: 8, title: "He Is Risen", rating: 8.3, summary: "Tensions rise between Tony and Ralphie until circumstances demand that they resolve their differences.", date: "Apr 15, 2001", viewers: 8.60 },
    { season: 3, episode: 9, title: "The Telltale Moozadell", rating: 8.0, summary: "Tony continues seeing Gloria, another of Dr. Melfi's patients, while Meadow continues seeing Jackie Jr.", date: "Apr 22, 2001", viewers: 8.64 },
    { season: 3, episode: 10, title: "...To Save Us All from Satan's Power", rating: 8.5, summary: "Tony starts having flashbacks about Pussy's betrayal, and then later discovers that Jackie Jr. has been failing.", date: "Apr 29, 2001", viewers: 8.44 },
    { season: 3, episode: 11, title: "Pine Barrens", rating: 9.7, summary: "While Silvio has the flu, Chris and Paulie run his collections for him, which results in the pair getting lost in the woods.", date: "May 6, 2001", viewers: 8.79 },
    { season: 3, episode: 12, title: "Amour Fou", rating: 9.2, summary: "Gloria grows increasingly demanding until Tony realizes who she is, and Jackie Jr. ends up in very serious trouble.", date: "May 13, 2001", viewers: 9.46 },
    { season: 3, episode: 13, title: "Army of One", rating: 9.0, summary: "Ralphie issues his final decision on the fate of Jackie Jr., Anthony Jr., faces military school after getting expelled.", date: "May 20, 2001", viewers: 9.46 },

    // Season 4
    { season: 4, episode: 1, title: "For All Debts Public and Private", rating: 8.2, summary: "Chris puts a ghost from his past to rest, while Carmela grows uneasy about her future.", date: "Sep 15, 2002", viewers: 13.43 },
    { season: 4, episode: 2, title: "No Show", rating: 8.3, summary: "Chris' success earns him some jealousy, Adriana learns the truth about her friend.", date: "Sep 22, 2002", viewers: 11.21 },
    { season: 4, episode: 3, title: "Christopher", rating: 7.8, summary: "Columbus Day ignites tensions between Italians and Native Americans, and Bobby receives devastating news.", date: "Sep 29, 2002", viewers: 10.97 },
    { season: 4, episode: 4, title: "The Weight", rating: 8.4, summary: "A joke sparks a series of hit contracts, while Carmela finds herself happier than perhaps she should be.", date: "Oct 6, 2002", viewers: 10.67 },
    { season: 4, episode: 5, title: "Pie-O-My", rating: 8.0, summary: "Ralph buys a racehorse, but Tony ends up more attached to it than Ralphie is.", date: "Oct 13, 2002", viewers: 9.76 },
    { season: 4, episode: 6, title: "Everybody Hurts", rating: 8.4, summary: "Tony feels depressed over the negative impact he has on people who don't deserve it.", date: "Oct 20, 2002", viewers: 10.46 },
    { season: 4, episode: 7, title: "Watching Too Much Television", rating: 8.1, summary: "Adriana learns that life is not like TV shows, while Tony discovers that a former girlfriend has moved on.", date: "Oct 27, 2002", viewers: 9.72 },
    { season: 4, episode: 8, title: "Mergers and Acquisitions", rating: 8.1, summary: "Paulie has to take care of some rough relationships for his mother, while Tony's fancy for a fellow horse fancier lands him in trouble.", date: "Nov 3, 2002", viewers: 10.97 },
    { season: 4, episode: 9, title: "Whoever Did This", rating: 9.3, summary: "Ralph's callous behavior finally steps over the line, while Chris gets deeper into his heroin addiction.", date: "Nov 10, 2002", viewers: 9.83 },
    { season: 4, episode: 10, title: "The Strong, Silent Type", rating: 8.9, summary: "In the midst of suspicions that he killed Ralph, Tony tries to intervene to get Chris clean and sober.", date: "Nov 17, 2002", viewers: 10.68 },
    { season: 4, episode: 11, title: "Calling All Cars", rating: 8.0, summary: "Tony's dreams seem to tell him where his life is headed, but he still feels as though he's out of control.", date: "Nov 24, 2002", viewers: 11.12 },
    { season: 4, episode: 12, title: "Eloise", rating: 8.2, summary: "Carmela and Furio grow too close for safety, while Paulie discovers that he's not as big a fish as he thought he was.", date: "Dec 1, 2002", viewers: 11.07 },
    { season: 4, episode: 13, title: "Whitecaps", rating: 9.3, summary: "Junior's trial comes to an end, but Tony's trials are just getting underway. Also, the Sopranos almost purchase a house on the beach.", date: "Dec 8, 2002", viewers: 12.48 },

    // Season 5
    { season: 5, episode: 1, title: "Two Tonys", rating: 8.6, summary: "Some of the old guards are released from prison and want to get back in the action.", date: "Mar 7, 2004", viewers: 12.14 },
    { season: 5, episode: 2, title: "Rat Pack", rating: 8.3, summary: "A passing makes way for fresh wounds, while cousin Tony wants to put his past behind him.", date: "Mar 14, 2004", viewers: 9.97 },
    { season: 5, episode: 3, title: "Where's Johnny?", rating: 8.6, summary: "With Carmine's passing and Feech's arrival, turf wars are breaking out around New Jersey.", date: "Mar 21, 2004", viewers: 10.11 },
    { season: 5, episode: 4, title: "All Happy Families...", rating: 8.5, summary: "Feech makes a pain of himself by trying to return to his past glory.", date: "Mar 28, 2004", viewers: 9.69 },
    { season: 5, episode: 5, title: "Irregular Around the Margins", rating: 9.3, summary: "A car crash puts Tony and Adriana in a compromising position, and Cousin Tony tries to keep Chris from getting the wrong impression.", date: "Apr 4, 2004", viewers: 9.75 },
    { season: 5, episode: 6, title: "Sentimental Education", rating: 8.1, summary: "Carmela has another furtive romance collapse, while Tony B. throws away a chance to turn his life around.", date: "Apr 11, 2004", viewers: 9.93 },
    { season: 5, episode: 7, title: "In Camelot", rating: 7.9, summary: "Tony learns about his father through the man's mistress, while Chris' friend learns that there are habits more harmful to your health than heroin.", date: "Apr 18, 2004", viewers: 9.08 },
    { season: 5, episode: 8, title: "Marco Polo", rating: 8.7, summary: "An uncomfortable party leads Tony and Carmela to a partial reconciliation, while cousin Tony gets an offer he decides not to refuse.", date: "Apr 25, 2004", viewers: 9.99 },
    { season: 5, episode: 9, title: "Unidentified Black Males", rating: 8.8, summary: "Tony finds out that his cousin wants a bigger share of responsibilities, while Finn makes an embarrassing discovery about Vito.", date: "May 2, 2004", viewers: 8.96 },
    { season: 5, episode: 10, title: "Cold Cuts", rating: 8.6, summary: "Chris and cousin Tony do some digging to make sure old secrets stay buried, while Janice puts her marriage in jeopardy.", date: "May 9, 2004", viewers: 8.48 },
    { season: 5, episode: 11, title: "The Test Dream", rating: 8.6, summary: "Cousin Tony heads off to avenge the death of his good friend, while a dream reveals to Tony what he must do to prevent a full-scale war.", date: "May 16, 2004", viewers: 8.81 },
    { season: 5, episode: 12, title: "Long Term Parking", rating: 9.7, summary: "Tony makes a request to Johnny Sack on behalf of his cousin, and Adriana makes a request to the FBI, followed by one to Chris.", date: "May 23, 2004", viewers: 9.53 },
    { season: 5, episode: 13, title: "All Due Respect", rating: 9.3, summary: "Tony realizes that he must take care of family messes himself in order to keep the peace within his own clan.", date: "Jun 6, 2004", viewers: 10.98 },

    // Season 6
    { season: 6, episode: 1, title: "Members Only", rating: 9.2, summary: "Gene Pontecorvo makes a final break from the mob life, while Junior's paranoid delusions could be the end of Tony.", date: "Mar 12, 2006", viewers: 9.47 },
    { season: 6, episode: 2, title: "Join the Club", rating: 8.7, summary: "The family tries to cope with Tony's hospitalization and deteriorating condition, while Tony begins to hallucinate a new life parallel to his own.", date: "Mar 19, 2006", viewers: 9.18 },
    { season: 6, episode: 3, title: "Mayham", rating: 8.8, summary: "While the gang begins to turn on itself, Tony finds himself at the threshold, while Christopher gives another try to enter the movie business.", date: "Mar 26, 2006", viewers: 8.93 },
    { season: 6, episode: 4, title: "The Fleshy Part of the Thigh", rating: 8.4, summary: "Tony goes home and returns to business, perhaps with a new frame of mind. Paulie receives a shock about his mother.", date: "Apr 2, 2006", viewers: 8.83 },
    { season: 6, episode: 5, title: "Mr. & Mrs. John Sacrimoni Request...", rating: 8.8, summary: "Johnny Sack is granted permission to attend his daughter's wedding. Tony improves his personal security and Vito's secret double life is exposed.", date: "Apr 9, 2006", viewers: 8.58 },
    { season: 6, episode: 6, title: "Live Free or Die", rating: 8.5, summary: "Tony hires help from overseas to fulfill a favor he was asked for by Johnny Sack and decides if one of his top earners deserves a second chance.", date: "Apr 16, 2006", viewers: 7.94 },
    { season: 6, episode: 7, title: "Luxury Lounge", rating: 8.1, summary: "Christopher and Carmine travel to Hollywood to take the next step in making their movie but quickly realize they're out of their depth.", date: "Apr 23, 2006", viewers: 8.49 },
    { season: 6, episode: 8, title: "Johnny Cakes", rating: 8.3, summary: "Vito considers starting a new life in New Hampshire, while Anthony Jr. looking for a purpose and finds it when he continues his pursuit of revenge against Junior.", date: "Apr 30, 2006", viewers: 8.54 },
    { season: 6, episode: 9, title: "The Ride", rating: 8.3, summary: "Paulie finds public opinion turned against him after an amusement ride accident. Christopher tries to start a new life as a husband and father.", date: "May 7, 2006", viewers: 8.49 },
    { season: 6, episode: 10, title: "Moe n' Joe", rating: 8.0, summary: "Tony reflects on how growing up with Janice colors his attitudes now, while Vito tries to make a new life for himself in New Hampshire.", date: "May 14, 2006", viewers: 8.13 },
    { season: 6, episode: 11, title: "Cold Stones", rating: 8.7, summary: "Phil takes out his revenge, while Tony grows frustrated with Anthony Jr's lack of ambition or work ethic.", date: "May 21, 2006", viewers: 8.18 },
    { season: 6, episode: 12, title: "Kaisha", rating: 8.2, summary: "Tony and Phil begin an explosive conflict that puts Phil in the hospital, while Christopher and Tony both embark on new romances with the same woman.", date: "Jun 4, 2006", viewers: 8.91 },
    { season: 6, episode: 13, title: "Soprano Home Movies", rating: 9.1, summary: "Carmela and Tony go away to Bobby's cabin upstate New York for Tony's birthday. Meanwhile A.J. is throwing a party at the Soprano home.", date: "Apr 8, 2007", viewers: 7.66 },
    { season: 6, episode: 14, title: "Stage 5", rating: 8.8, summary: "Johnny Sack finds out he only has 3 months to live. Meanwhile, 'Cleaver' premieres and is a hit, while Carmela has mixed emotions about it.", date: "Apr 15, 2007", viewers: 7.42 },
    { season: 6, episode: 15, title: "Remember When", rating: 8.5, summary: "While forced to lay low in Miami, Tony begins to question Paulie's loyalty. Junior and Phil Leotardo both make moves to gain power in their respective territories.", date: "Apr 22, 2007", viewers: 6.85 },
    { season: 6, episode: 16, title: "Chasing It", rating: 7.9, summary: "Tony hits an unlucky series of gambling losses, causing tension with both Carmela and Hesh. AJ and Blanca decide to make major changes in their relationship.", date: "Apr 29, 2007", viewers: 6.76 },
    { season: 6, episode: 17, title: "Walk Like a Man", rating: 8.9, summary: "Christopher's father-in-law is the unwitting catalyst of a new feud between Christopher and Paulie. AJ struggles with depression.", date: "May 6, 2007", viewers: 7.16 },
    { season: 6, episode: 18, title: "Kennedy and Heidi", rating: 9.2, summary: "After a tragedy hits the family, Tony gets away from it all when things get too hard to handle.", date: "May 13, 2007", viewers: 6.49 },
    { season: 6, episode: 19, title: "The Second Coming", rating: 9.3, summary: "Tony fails to reason with Phil as more problems increase with Anthony Jr as his depression worsens.", date: "May 20, 2007", viewers: 7.34 },
    { season: 6, episode: 20, title: "The Blue Comet", rating: 9.6, summary: "The allegiance of those closest to Tony is put to the test. A case of mistaken identity has serious ramifications.", date: "Jun 3, 2007", viewers: 8.02 },
    { season: 6, episode: 21, title: "Made in America", rating: 9.4, summary: "Tony and his family have to stay in hiding until Phil Leotardo is dealt with. His family doesn't like the lifestyle they have been forced to adopt. AJ and Meadow move onto the next step in their lives. Tony confronts Junior one last time.", date: "Jun 10, 2007", viewers: 11.90 }
];

// Characters Data
const charactersData = [
    {
        name: "توني سوبرانو",
        role: "رئيس العائلة",
        description: "رئيس عائلة ديميو الإجرامية في نيو جيرسي، يحاول التوازن بين حياته العائلية ومسؤولياته كزعيم مافيا.",
        kills: 8,
        wealth: "$40M+",
        episodes: 86,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "كارميلا سوبرانو",
        role: "زوجة توني",
        description: "زوجة توني المخلصة والأم المحبة، تكافح مع معرفتها بأنشطة زوجها الإجرامية.",
        kills: 0,
        wealth: "$5M+",
        episodes: 84,
        image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "كريستوفر مولتيسانتي",
        role: "الابن الروحي لتوني",
        description: "ابن عم توني وخليفته المحتمل، يكافح مع إدمان المخدرات وطموحاته في هوليوود.",
        kills: 7,
        wealth: "$2M+",
        episodes: 83,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "بولي والنتس",
        role: "كابو في العائلة",
        description: "أحد أقدم أعضاء العائلة وأكثرهم ولاءً لتوني، معروف بخرافاته وولائه الأعمى.",
        kills: 9,
        wealth: "$3M+",
        episodes: 81,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "سيلفيو دانتي",
        role: "نائب توني",
        description: "اليد اليمنى لتوني ومستشاره الأكثر ثقة، يدير نادي بادا بينغ الليلي.",
        kills: 2,
        wealth: "$4M+",
        episodes: 76,
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "جونيور سوبرانو",
        role: "عم توني",
        description: "العم الأكبر لتوني والرئيس السابق للعائلة، يعاني من تدهور في الصحة العقلية.",
        kills: 4,
        wealth: "$1M+",
        episodes: 51,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const episodesContainer = document.getElementById('episodes-container');
const charactersContainer = document.getElementById('characters-container');
const episodeSearch = document.getElementById('episode-search');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadEpisodes();
    loadCharacters();
    initializeCharts();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load and display episodes
function loadEpisodes(filteredData = episodesData) {
    episodesContainer.innerHTML = '';
    
    if (filteredData.length === 0) {
        episodesContainer.innerHTML = '<p class="no-results">لم يتم العثور على حلقات مطابقة للبحث.</p>';
        return;
    }

    filteredData.forEach(episode => {
        const episodeCard = createEpisodeCard(episode);
        episodesContainer.appendChild(episodeCard);
    });

    // Add animation to cards
    const cards = episodesContainer.querySelectorAll('.episode-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Create episode card element
function createEpisodeCard(episode) {
    const card = document.createElement('div');
    card.className = 'episode-card';
    
    const backgroundImage = episode.image || 'images/pilot.jpg';
    
    card.innerHTML = `
        <div class="episode-header" style="background-image: url('${backgroundImage}')">
            <div class="episode-number">S${episode.season}E${episode.episode}</div>
            <h3 class="episode-title">${episode.title}</h3>
            <div class="episode-rating">
                <i class="fas fa-star"></i>
                ${episode.rating}
            </div>
        </div>
        <div class="episode-content">
            <p class="episode-summary">${episode.summary}</p>
            <div class="episode-meta">
                <div class="episode-date">
                    <i class="fas fa-calendar"></i>
                    ${episode.date}
                </div>
                <div class="episode-viewers">
                    <i class="fas fa-eye"></i>
                    ${episode.viewers}M
                </div>
            </div>
        </div>
    `;
    return card;
}

// Load and display characters
function loadCharacters() {
    charactersContainer.innerHTML = '';
    
    charactersData.forEach(character => {
        const characterCard = createCharacterCard(character);
        charactersContainer.appendChild(characterCard);
    });
}

// Create character card element
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
        <div class="character-image">
            <img src="${character.image}" alt="${character.name}">
        </div>
        <div class="character-info">
            <h3 class="character-name">${character.name}</h3>
            <p class="character-role">${character.role}</p>
            <p class="character-description">${character.description}</p>
            <div class="character-stats">
                <div class="character-stat">
                    <span class="character-stat-number">${character.kills}</span>
                    <span class="character-stat-label">قتلى</span>
                </div>
                <div class="character-stat">
                    <span class="character-stat-number">${character.wealth}</span>
                    <span class="character-stat-label">ثروة</span>
                </div>
                <div class="character-stat">
                    <span class="character-stat-number">${character.episodes}</span>
                    <span class="character-stat-label">حلقات</span>
                </div>
            </div>
        </div>
    `;
    return card;
}

// Filter episodes by season
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const season = this.getAttribute('data-season');
        let filteredEpisodes;
        
        if (season === 'all') {
            filteredEpisodes = episodesData;
        } else {
            filteredEpisodes = episodesData.filter(episode => episode.season == season);
        }
        
        loadEpisodes(filteredEpisodes);
    });
});

// Search episodes
episodeSearch.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredEpisodes = episodesData.filter(episode => 
        episode.title.toLowerCase().includes(searchTerm) ||
        episode.summary.toLowerCase().includes(searchTerm)
    );
    loadEpisodes(filteredEpisodes);
});

// Initialize charts
function initializeCharts() {
    // Ratings chart
    const ratingsCtx = document.getElementById('ratingsChart');
    if (ratingsCtx) {
        const seasonRatings = calculateSeasonRatings();
        new Chart(ratingsCtx, {
            type: 'line',
            data: {
                labels: ['الموسم 1', 'الموسم 2', 'الموسم 3', 'الموسم 4', 'الموسم 5', 'الموسم 6'],
                datasets: [{
                    label: 'متوسط التقييم',
                    data: seasonRatings,
                    borderColor: '#DAA520',
                    backgroundColor: 'rgba(218, 165, 32, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 7.5,
                        max: 10,
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
    }

    // Viewers chart
    const viewersCtx = document.getElementById('viewersChart');
    if (viewersCtx) {
        const seasonViewers = calculateSeasonViewers();
        new Chart(viewersCtx, {
            type: 'bar',
            data: {
                labels: ['الموسم 1', 'الموسم 2', 'الموسم 3', 'الموسم 4', 'الموسم 5', 'الموسم 6'],
                datasets: [{
                    label: 'متوسط المشاهدين (مليون)',
                    data: seasonViewers,
                    backgroundColor: 'rgba(139, 0, 0, 0.8)',
                    borderColor: '#8B0000',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
    }
}

// Calculate average ratings by season
function calculateSeasonRatings() {
    const seasonRatings = [];
    for (let season = 1; season <= 6; season++) {
        const seasonEpisodes = episodesData.filter(ep => ep.season === season);
        const avgRating = seasonEpisodes.reduce((sum, ep) => sum + ep.rating, 0) / seasonEpisodes.length;
        seasonRatings.push(parseFloat(avgRating.toFixed(1)));
    }
    return seasonRatings;
}

// Calculate average viewers by season
function calculateSeasonViewers() {
    const seasonViewers = [];
    for (let season = 1; season <= 6; season++) {
        const seasonEpisodes = episodesData.filter(ep => ep.season === season);
        const avgViewers = seasonEpisodes.reduce((sum, ep) => sum + ep.viewers, 0) / seasonEpisodes.length;
        seasonViewers.push(parseFloat(avgViewers.toFixed(1)));
    }
    return seasonViewers;
}

// Initialize scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Utility function to scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Update statistics with animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counter animations when statistics section is visible
const statsSection = document.querySelector('.statistics-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const deathsCounter = document.getElementById('deaths-count');
                if (deathsCounter && !deathsCounter.classList.contains('animated')) {
                    animateCounter(deathsCounter, 68);
                    deathsCounter.classList.add('animated');
                }
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add loading states
function showLoading(container) {
    container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
}

// Error handling for missing elements
function handleMissingElement(elementId) {
    console.warn(`Element with ID '${elementId}' not found`);
}

// Responsive navigation handling
function handleResponsiveNav() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Initialize responsive navigation
handleResponsiveNav();

