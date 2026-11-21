// All robot copy lives here (Roman Urdu). Facts come only from the site itself.
// Step schema: { id, route, selector, pose, title, text }

export const UI = {
  label: 'Assistant ko jagayein',
  labelAwake: 'NayaDaur Assistant. Band karne ke liye Escape dabayein',
  start: 'Tour shuru karein',
  later: 'Baad mein',
  prev: 'Pichla',
  next: 'Agla',
  stop: 'Tour band karein',
  again: 'Dobara tour',
  wa: 'WhatsApp par baat karein',
  back: 'Wapas tour par aayein',
  mute: 'Awaaz band karein',
  unmute: 'Awaaz chalayein',
  step: (i, n) => `Qadam ${i} / ${n}`,
}

export const HINT = 'Mujhe jagayein'

export const INTRO = {
  title: 'NayaDaur Digital',
  text: 'Assalam o Alaikum! Main NayaDaur Digital ka Assistant hoon. Chaliye, ek minute mein poori website ki sair karwata hoon.',
}

export const CLOSING = {
  id: 'closing',
  pose: 'thanks',
  title: 'Sair mukammal!',
  text: 'Shukriya, aap ne poori sair ki. Baat karni ho to WhatsApp par likh dein. Hum seedhi aur saaf baat karte hain.',
}

export const BYE = 'Allah Hafiz! Jab dil chahe, mujhe dobara jaga dijiyega.'

// Funny lines shown when the visitor taps the robot, each with the look that fits it.
// Every sprite except 'sleep' is used here. Lines are shuffled and none repeats until all were shown.
export const FUNNY = [
  { pose: 'idle_talk', text: 'Aap ne mujhe jaga diya, ab chai ka bill aap ka!' },
  { pose: 'laugh', text: 'Hahaha! Mujhe apna hi mazaq sun kar hansi aa gayi!' },
  { pose: 'thumbs_up', text: 'Aap ka click? Bilkul top class, double thumbs up!' },
  { pose: 'surprised', text: 'Arey wah! Phir click kar diya? Main to hairaan reh gaya!' },
  { pose: 'idle_blink', text: 'Main robot hoon, magar gudgudi mujhe bhi hoti hai!' },
  { pose: 'wink', text: 'Chupke se bata doon, main aap ka sab se bada fan hoon.' },
  { pose: 'call', text: 'Hello? Haan ji, abhi busy hoon, thori der baad call karta hoon.' },
  { pose: 'confused', text: 'Hmm... mujhe samajh nahi aaya, ya shayad battery low hai.' },
  { pose: 'idle_blink_half', text: 'Ji hazoor? Main sun raha hoon, bas batti jala kar.' },
  { pose: 'sorry', text: 'Sorry! Mujhe laga aap ne kisi aur ko click kiya tha.' },
  { pose: 'email', text: 'Email bhej di hai... bas aap ke inbox ka pata nahi mil raha.' },
  { pose: 'celebrate', text: 'Jashan shuru! Chai aap ki taraf se, samosay bhi aap ki taraf se.' },
  { pose: 'listen', text: 'Ji? Bolein bolein, mere kaan... matlab speaker khule hain.' },
  { pose: 'think', text: 'Soch raha hoon... nahi nahi, processor thora garam ho gaya.' },
  { pose: 'happy', text: 'Aaj ka mood: 100% charged aur 0% tension!' },
  { pose: 'wave2', text: 'Salaam dobara! Main to bas haath hilane ki practice kar raha tha.' },
  { pose: 'idea', text: 'Ek zabardast idea aaya hai! ...Bhool gaya, dobara click karein.' },
  { pose: 'shield', text: 'Fikar na karein, aap ka brand meri hifazat mein hai!' },
  { pose: 'price', text: 'Meri qeemat? Anmol! Lekin aap ke liye packages sasti hain.' },
  { pose: 'working', text: 'Kaam kar raha hoon! Haan, tab bhi jab aap nahi dekh rahe.' },
  { pose: 'tablet', text: 'Ye dekhein, graph upar ja raha hai! Mera mood bhi.' },
  { pose: 'point', text: 'Udhar dekhein! ...Kuch nahi, bas dekhna tha ke aap dekhte ho ya nahi.' },
  { pose: 'present', text: 'Aur ab dhol bajaiye... tashreef la rahi hai hamari website!' },
  { pose: 'whatsapp', text: 'WhatsApp par likhein, main seen kar ke ghaib nahi hota!' },
  { pose: 'greet', text: 'Assalam o Alaikum! Main roz subah ye 100 baar kehta hoon.' },
  { pose: 'blink_closed', text: 'Zara aankh jhapki thi... aap ne mujhe pakar liya!' },
  { pose: 'blink_half', text: 'Neend aa rahi hai... chai ka waqt ho gaya kya?' },
  { pose: 'salaam', text: 'Assalam o Alaikum phir se! Meri sab se purani aadat hai.' },
  { pose: 'thanks', text: 'Shukriya! Itna pyar to meri battery bhi nahi sambhal sakti.' },
  { pose: 'idle_talk', text: 'Battery full hai, josh bhi full hai!' },
  { pose: 'idle', text: 'Mera favourite kaam? Aap ko sahi jagah tak pohanchana.' },
  { pose: 'idle_talk', text: 'Chai banana abhi seekh raha hoon, website dikhana pehle se aata hai.' },
]

// 13 steps in the order a visitor meets them. Each text is 35 words or fewer.
export const STEPS = [
  {
    id: 'hero', route: '/', selector: '.hero2', pose: 'present',
    title: 'Digital soch, behtar karobar',
    text: 'Yeh hai NayaDaur Digital ka digital ghar. Website, logo, Google Business Profile, Google Ads aur business software, Okara aur poore Pakistan ke karobar ke liye. Baqi sair aage hai!',
  },
  {
    id: 'offer', route: '/', selector: '#startup-offer', pose: 'happy',
    title: 'Startup offer: muft hosting',
    text: 'Naya karobar ya startup? Naye website project ke saath official Hostinger par hosting hum muft set karte hain, HTTPS (SSL) samet. Domain alag hai, aur hosting ki muddat quote mein likhi hoti hai.',
  },
  {
    id: 'about', route: '/', selector: '#about', pose: 'salaam',
    title: 'Hum kaun hain',
    text: 'Hum Okara ki local digital team hain. Logo, website, Google listing, ads aur software ek hi jagah milte hain, to paanch freelancers ke peeche bhaagna nahi parta. Kaam se pehle likhi hui quote milti hai.',
  },
  {
    id: 'services', route: '/', selector: '#services', pose: 'point',
    title: 'Hamari services',
    text: 'Dukaan ho, brand ho ya startup, yahan aap ke liye services hain. Ek se shuru karein, aur jab dil chahe aur jodte jayein. Chaliye, pehle teen mukhya services dekhte hain.',
  },
  {
    id: 'services-web', route: '/', selector: '#services .grid', pose: 'working',
    title: 'Website, logo aur Google Maps',
    text: 'Website jo visitors ko WhatsApp enquiries mein badle, Urdu lettering ke saath logo aur brand kit, aur Google Maps par durust listing aur asli reviews. Teeno mil kar pehchan banate hain.',
  },
  {
    id: 'services-more', route: '/', selector: '#services .svc:nth-child(4)', pose: 'present',
    title: 'Ads, social media aur software',
    text: 'Google Ads, Facebook aur Instagram ads ka management, WhatsApp Business setup, aur dukaan ke liye Urdu aur English mein invoice aur udhaar software. Sab kuch ek hi team se.',
  },
  {
    id: 'legal', route: '/', selector: '#legal', pose: 'shield',
    title: 'Qanooni tahaffuz',
    text: 'Shine Legal Associates ke zariye trademark registration, copyright protection aur nakal karne walon ke khilaf karwai. Apna naam aur logo mehfooz karwana ho to yahan se shuru karein.',
  },
  {
    id: 'portfolio', route: '/', selector: '#portfolio', pose: 'point',
    title: 'Concept samples',
    text: 'Yeh hamare style ke concept samples hain, asli client projects nahi. Asli kaam client ki ijazat se baad mein shamil hoga. Hum seedhi baat karte hain, banawat nahi.',
  },
  {
    id: 'process', route: '/', selector: '#process', pose: 'idea',
    title: 'Kaam kaise hota hai',
    text: 'Pehle aap ka maqsad samajhte hain, phir scope aur timeline likh kar tay karte hain. Design par aap tabdeeli bata sakte hain, real devices par test hota hai, aur launch par handover milta hai.',
  },
  {
    id: 'packages', route: '/', selector: '#packages', pose: 'price',
    title: 'Packages',
    text: 'Shuruaat 1500, Pehchan 2000, Taraqqi 5000 aur Kamyabi 10000 rupay se shuru hote hain. Aakhri qeemat hamesha likhi hui quote mein hoti hai. Ad budget aur domain fees alag hain.',
  },
  {
    id: 'future', route: '/services/future-services/', selector: '#all', pose: 'idea',
    title: 'Agla qadam: 2027',
    text: '2027 ke liye 12 nayi services tayyar ho rahi hain, jaise AI automation, chatbots, custom software, Android apps aur AR/3D. Abhi order nahi ho sakte, magar aap dilchaspi bata sakte hain.',
  },
  {
    id: 'join', route: '/join-our-team/', selector: '#tracks', pose: 'celebrate',
    title: 'Hamari team ka hissa banein',
    text: 'Muft 1 saal ki internship, joining fee koi nahi, aur saal ke baad salary. Graphic Designer, Digital Network and Marketing Specialist aur AI Application Engineer ke roles khule hain.',
  },
  {
    id: 'contact', route: '/contact/', selector: '#contact', pose: 'whatsapp',
    title: 'Rabta karein',
    text: 'WhatsApp, phone ya email, jo aap ko asaan lage. Pehle message, phir chhoti si baat, aur phir likhi hui quote. Seedha aur saaf tareeqa, bina kisi dabao ke.',
  },
]
