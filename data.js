function makeChapters(items) {
  return items.map((item, index) => ({
    id: `chapter-${index + 1}`,
    title: item[0],
    englishTitle: item[1],
    notes: [
      `इस अध्याय का नाम: ${item[0]}।`,
      `इस विषय में मुख्य परिभाषाएँ, नियम, सूत्र और परीक्षा में पूछे जाने वाले प्रश्न पढ़ें।`,
      "अभ्यास करते समय उदाहरण हल करें और महत्वपूर्ण बिंदुओं को अपनी नोटबुक में लिखें।",
      "नोट: इस अध्याय के विस्तृत notes और quiz questions आगे जोड़े जाएंगे।"
    ],
    questions: []
  }));
}

function sampleChapter(title, englishTitle, notes, questions) {
  return {
    title,
    englishTitle,
    notes,
    questions
  };
}

const STUDY_DATA = [
  {
    id: "maths",
    name: "गणित",
    englishName: "Mathematics",
    icon: "🔢",
    chapters: [
      sampleChapter("प्रतिशत", "Percentage", [
        "प्रतिशत का अर्थ है प्रति 100।",
        "प्रतिशत = (भाग / कुल भाग) × 100",
        "किसी संख्या का x% = संख्या × x / 100",
        "प्रतिशत वृद्धि = (वृद्धि / मूल मान) × 100"
      ], [
        {
          question: "200 का 25% कितना है?",
          options: ["25", "40", "50", "75"],
          answer: 2,
          explanation: "200 × 25 / 100 = 50।"
        },
        {
          question: "किसी संख्या का 20% = 40 है। संख्या क्या है?",
          options: ["100", "150", "200", "250"],
          answer: 2,
          explanation: "संख्या = 40 × 100 / 20 = 200।"
        }
      ]),
      sampleChapter("औसत", "Average", [
        "औसत = सभी मानों का योग / मानों की संख्या।",
        "कुल योग = औसत × मानों की संख्या।",
        "यदि किसी समूह में एक नया मान जुड़ता है तो कुल योग और संख्या दोनों बदलते हैं।"
      ], [
        {
          question: "10, 20 और 30 का औसत क्या है?",
          options: ["15", "20", "25", "30"],
          answer: 1,
          explanation: "(10 + 20 + 30) / 3 = 20।"
        }
      ]),
      ...makeChapters([
        ["संख्या पद्धति", "Number System"],
        ["सरलीकरण", "Simplification"],
        ["HCF और LCM", "HCF and LCM"],
        ["अनुपात और समानुपात", "Ratio and Proportion"],
        ["लाभ और हानि", "Profit and Loss"],
        ["छूट", "Discount"],
        ["साधारण ब्याज", "Simple Interest"],
        ["चक्रवृद्धि ब्याज", "Compound Interest"],
        ["साझेदारी", "Partnership"],
        ["समय और कार्य", "Time and Work"],
        ["पाइप और टंकी", "Pipes and Cisterns"],
        ["चाल, समय और दूरी", "Speed Time and Distance"],
        ["नाव और धारा", "Boats and Streams"],
        ["रेलगाड़ी", "Trains"],
        ["आयु संबंधी प्रश्न", "Problems on Ages"],
        ["मिश्रण", "Mixture and Alligation"],
        ["बीजगणित", "Algebra"],
        ["रेखाएँ और कोण", "Lines and Angles"],
        ["त्रिभुज", "Triangles"],
        ["चतुर्भुज", "Quadrilaterals"],
        ["वृत्त", "Circles"],
        ["क्षेत्रमिति", "Mensuration"],
        ["त्रिकोणमिति", "Trigonometry"],
        ["डेटा इंटरप्रिटेशन", "Data Interpretation"],
        ["लघुत्तम और महत्तम मान", "Minimum and Maximum Values"]
      ])
    ]
  },
  {
    id: "reasoning",
    name: "रीजनिंग",
    englishName: "Reasoning",
    icon: "🧠",
    chapters: [
      sampleChapter("संख्या श्रृंखला", "Number Series", [
        "संख्या श्रृंखला में संख्याओं के बीच का नियम पहचानना होता है।",
        "अंतर, गुणा, भाग, वर्ग, घन और बारी-बारी से चलने वाले नियम जाँचें।"
      ], [
        {
          question: "2, 4, 6, 8, अगली संख्या क्या है?",
          options: ["9", "10", "11", "12"],
          answer: 1,
          explanation: "हर बार 2 जोड़ा जा रहा है, इसलिए अगली संख्या 10 है।"
        }
      ]),
      sampleChapter("दिशा ज्ञान", "Direction Sense", [
        "मुख्य दिशाएँ उत्तर, दक्षिण, पूर्व और पश्चिम हैं।",
        "दिशा वाले प्रश्नों में प्रत्येक मोड़ के बाद व्यक्ति की नई दिशा पहचानें।",
        "चित्र बनाकर दूरी और अंतिम दिशा निकालना आसान होता है।"
      ], [
        {
          question: "एक व्यक्ति उत्तर की ओर देख रहा है। वह दाएँ मुड़ता है। अब किस दिशा में है?",
          options: ["पश्चिम", "दक्षिण", "पूर्व", "उत्तर"],
          answer: 2,
          explanation: "उत्तर की ओर से दाएँ मुड़ने पर दिशा पूर्व होती है।"
        }
      ]),
      ...makeChapters([
        ["अक्षर श्रृंखला", "Alphabet Series"],
        ["समानता", "Analogy"],
        ["वर्गीकरण", "Classification"],
        ["Coding-Decoding", "Coding-Decoding"],
        ["रक्त संबंध", "Blood Relations"],
        ["क्रम और रैंकिंग", "Order and Ranking"],
        ["वर्णमाला परीक्षण", "Alphabet Test"],
        ["लुप्त संख्या", "Missing Number"],
        ["गणितीय संक्रियाएँ", "Mathematical Operations"],
        ["कैलेंडर", "Calendar"],
        ["घड़ी", "Clock"],
        ["Venn Diagram", "Venn Diagram"],
        ["न्यायवाक्य", "Syllogism"],
        ["कथन और निष्कर्ष", "Statement and Conclusion"],
        ["कथन और मान्यता", "Statement and Assumption"],
        ["बैठने की व्यवस्था", "Seating Arrangement"],
        ["तार्किक पहेलियाँ", "Logical Puzzles"],
        ["पासा", "Dice"],
        ["घन और पासा", "Cubes and Dice"],
        ["दर्पण प्रतिबिंब", "Mirror Image"],
        ["जल प्रतिबिंब", "Water Image"],
        ["कागज मोड़ना", "Paper Folding"],
        ["आकृति पूर्ण करना", "Figure Completion"],
        ["छिपी हुई आकृति", "Embedded Figures"],
        ["Non-verbal Reasoning", "Non-verbal Reasoning"]
      ])
    ]
  },
  {
    id: "computer",
    name: "कंप्यूटर",
    englishName: "Computer",
    icon: "💻",
    chapters: [
      sampleChapter("कंप्यूटर का परिचय", "Introduction to Computer", [
        "कंप्यूटर एक इलेक्ट्रॉनिक मशीन है जो डेटा को प्रोसेस करके परिणाम देती है।",
        "मुख्य चरण: Input → Processing → Output।",
        "हार्डवेयर कंप्यूटर के भौतिक भाग हैं; सॉफ्टवेयर निर्देशों और प्रोग्रामों का समूह है।"
      ], [
        {
          question: "कंप्यूटर में डेटा प्रोसेस करने वाला मुख्य भाग कौन-सा है?",
          options: ["माउस", "CPU", "मॉनिटर", "कीबोर्ड"],
          answer: 1,
          explanation: "CPU निर्देशों को प्रोसेस करता है।"
        }
      ]),
      sampleChapter("RAM और ROM", "RAM and ROM", [
        "RAM अस्थायी मेमोरी है; बिजली बंद होने पर इसमें मौजूद डेटा सामान्यतः मिट जाता है।",
        "ROM गैर-वाष्पशील मेमोरी है, जिसमें डेटा बिजली बंद होने पर भी बना रहता है।",
        "RAM का उपयोग चल रहे प्रोग्रामों और डेटा के लिए होता है।"
      ], [
        {
          question: "कौन-सी मेमोरी अस्थायी होती है?",
          options: ["ROM", "RAM", "DVD", "Hard Disk"],
          answer: 1,
          explanation: "RAM volatile memory है।"
        }
      ]),
      ...makeChapters([
        ["कंप्यूटर की पीढ़ियाँ", "Generations of Computers"],
        ["कंप्यूटर के प्रकार", "Types of Computers"],
        ["Input Devices", "Input Devices"],
        ["Output Devices", "Output Devices"],
        ["CPU और उसके भाग", "CPU and Its Components"],
        ["मेमोरी और स्टोरेज", "Memory and Storage"],
        ["Number System", "Number System"],
        ["Hardware और Software", "Hardware and Software"],
        ["Operating System", "Operating System"],
        ["Windows की मूल बातें", "Windows Basics"],
        ["फाइल और फोल्डर प्रबंधन", "Files and Folders"],
        ["MS Word", "Microsoft Word"],
        ["MS Excel", "Microsoft Excel"],
        ["MS PowerPoint", "Microsoft PowerPoint"],
        ["कीबोर्ड शॉर्टकट", "Keyboard Shortcuts"],
        ["Internet की मूल बातें", "Internet Basics"],
        ["वेब ब्राउज़र और सर्च इंजन", "Browsers and Search Engines"],
        ["Email", "Email"],
        ["Computer Networks", "Computer Networks"],
        ["LAN, MAN और WAN", "LAN, MAN and WAN"],
        ["TCP/IP और Protocols", "TCP/IP and Protocols"],
        ["IP और MAC Address", "IP and MAC Address"],
        ["Network Ports", "Network Ports"],
        ["Cyber Security", "Cyber Security"],
        ["Virus और Malware", "Viruses and Malware"],
        ["डेटा बैकअप", "Data Backup"]
      ])
    ]
  },
  {
    id: "hindi",
    name: "हिंदी",
    englishName: "Hindi",
    icon: "📚",
    chapters: [
      sampleChapter("संज्ञा", "Noun", [
        "संज्ञा किसी व्यक्ति, वस्तु, स्थान, गुण या भाव के नाम को कहते हैं।",
        "मुख्य भेद: व्यक्तिवाचक, जातिवाचक, भाववाचक, समूहवाचक और द्रव्यवाचक।"
      ], [
        {
          question: "'जयपुर' कौन-सी संज्ञा है?",
          options: ["भाववाचक", "व्यक्तिवाचक", "समूहवाचक", "द्रव्यवाचक"],
          answer: 1,
          explanation: "जयपुर एक विशेष स्थान का नाम है, इसलिए व्यक्तिवाचक संज्ञा है।"
        }
      ]),
      sampleChapter("पर्यायवाची शब्द", "Synonyms", [
        "समान या लगभग समान अर्थ वाले शब्द पर्यायवाची कहलाते हैं।",
        "उदाहरण: सूर्य—रवि, भानु, दिनकर; पृथ्वी—धरा, धरती, वसुंधरा।"
      ], [
        {
          question: "'सूर्य' का पर्यायवाची कौन-सा है?",
          options: ["निशा", "रवि", "पवन", "नीर"],
          answer: 1,
          explanation: "रवि सूर्य का पर्यायवाची शब्द है।"
        }
      ]),
      ...makeChapters([
        ["वर्णमाला", "Alphabet"],
        ["स्वर और व्यंजन", "Vowels and Consonants"],
        ["सर्वनाम", "Pronoun"],
        ["विशेषण", "Adjective"],
        ["क्रिया", "Verb"],
        ["क्रिया विशेषण", "Adverb"],
        ["लिंग", "Gender"],
        ["वचन", "Number"],
        ["कारक", "Case"],
        ["काल", "Tense"],
        ["वाच्य", "Voice"],
        ["अव्यय", "Indeclinables"],
        ["संधि", "Sandhi"],
        ["समास", "Samas"],
        ["उपसर्ग", "Prefixes"],
        ["प्रत्यय", "Suffixes"],
        ["विलोम शब्द", "Antonyms"],
        ["अनेकार्थी शब्द", "Multiple Meaning Words"],
        ["समश्रुत भिन्नार्थक शब्द", "Similar Sounding Words"],
        ["मुहावरे", "Idioms"],
        ["लोकोक्तियाँ", "Proverbs"],
        ["वाक्य शुद्धि", "Sentence Correction"],
        ["वर्तनी शुद्धि", "Spelling Correction"],
        ["रस", "Rasa"],
        ["अलंकार", "Figures of Speech"],
        ["छंद", "Poetic Metre"],
        ["तत्सम और तद्भव", "Tatsam and Tadbhav"],
        ["वाक्य के भेद", "Types of Sentences"]
      ])
    ]
  },
  {
    id: "english",
    name: "अंग्रेज़ी",
    englishName: "English",
    icon: "🔤",
    chapters: [
      sampleChapter("Parts of Speech", "Parts of Speech", [
        "The eight traditional parts of speech are noun, pronoun, verb, adjective, adverb, preposition, conjunction and interjection.",
        "A noun names a person, place, thing or idea.",
        "A verb expresses an action or state."
      ], [
        {
          question: "Which word is a noun in 'Ravi plays cricket'?",
          options: ["plays", "cricket", "Ravi", "Both Ravi and cricket"],
          answer: 3,
          explanation: "Ravi is a person's name and cricket is a thing/sport; both function as nouns."
        }
      ]),
      sampleChapter("Articles", "Articles", [
        "A and an are indefinite articles; the is the definite article.",
        "Use 'a' before a consonant sound and 'an' before a vowel sound.",
        "Example: a book, an apple, the Sun."
      ], [
        {
          question: "Choose the correct phrase.",
          options: ["a apple", "an apple", "the apple an", "an book"],
          answer: 1,
          explanation: "Apple begins with a vowel sound, so 'an apple' is correct."
        }
      ]),
      ...makeChapters([
        ["Noun", "Noun"],
        ["Pronoun", "Pronoun"],
        ["Verb", "Verb"],
        ["Adjective", "Adjective"],
        ["Adverb", "Adverb"],
        ["Preposition", "Preposition"],
        ["Conjunction", "Conjunction"],
        ["Interjection", "Interjection"],
        ["Tenses", "Tenses"],
        ["Subject-Verb Agreement", "Subject-Verb Agreement"],
        ["Singular and Plural", "Singular and Plural"],
        ["Gender", "Gender"],
        ["Modals", "Modals"],
        ["Active and Passive Voice", "Active and Passive Voice"],
        ["Direct and Indirect Speech", "Direct and Indirect Speech"],
        ["Error Spotting", "Error Spotting"],
        ["Sentence Improvement", "Sentence Improvement"],
        ["Fill in the Blanks", "Fill in the Blanks"],
        ["Synonyms", "Synonyms"],
        ["Antonyms", "Antonyms"],
        ["One Word Substitution", "One Word Substitution"],
        ["Idioms and Phrases", "Idioms and Phrases"],
        ["Correct Spelling", "Correct Spelling"],
        ["Cloze Test", "Cloze Test"],
        ["Reading Comprehension", "Reading Comprehension"],
        ["Sentence Rearrangement", "Sentence Rearrangement"]
      ])
    ]
  },
  {
    id: "gk",
    name: "सामान्य ज्ञान",
    englishName: "General Knowledge",
    icon: "🌍",
    chapters: [
      sampleChapter("भारत का संविधान", "Constitution of India", [
        "भारतीय संविधान 26 नवंबर 1949 को अंगीकृत किया गया।",
        "यह 26 जनवरी 1950 को लागू हुआ।",
        "संविधान देश की शासन व्यवस्था, नागरिकों के अधिकारों और सरकार की शक्तियों का आधार है।"
      ], [
        {
          question: "भारत का संविधान कब लागू हुआ?",
          options: ["15 अगस्त 1947", "26 नवंबर 1949", "26 जनवरी 1950", "2 अक्टूबर 1950"],
          answer: 2,
          explanation: "भारतीय संविधान 26 जनवरी 1950 को लागू हुआ।"
        }
      ]),
      sampleChapter("भारत के राज्य और राजधानियाँ", "Indian States and Capitals", [
        "भारत में 28 राज्य और 8 केंद्र शासित प्रदेश हैं।",
        "राजस्थान की राजधानी जयपुर है।",
        "राज्यों और राजधानियों के साथ केंद्र शासित प्रदेशों को भी याद करें।"
      ], [
        {
          question: "राजस्थान की राजधानी क्या है?",
          options: ["जोधपुर", "जयपुर", "उदयपुर", "कोटा"],
          answer: 1,
          explanation: "जयपुर राजस्थान की राजधानी है।"
        }
      ]),
      ...makeChapters([
        ["प्राचीन भारतीय इतिहास", "Ancient Indian History"],
        ["मध्यकालीन भारतीय इतिहास", "Medieval Indian History"],
        ["आधुनिक भारतीय इतिहास", "Modern Indian History"],
        ["भारतीय स्वतंत्रता आंदोलन", "Indian Freedom Movement"],
        ["विश्व इतिहास की मूल बातें", "World History Basics"],
        ["भारत का भूगोल", "Indian Geography"],
        ["विश्व भूगोल", "World Geography"],
        ["नदियाँ और बाँध", "Rivers and Dams"],
        ["पर्वत और पठार", "Mountains and Plateaus"],
        ["भारतीय संविधान की विशेषताएँ", "Features of Indian Constitution"],
        ["मौलिक अधिकार और कर्तव्य", "Fundamental Rights and Duties"],
        ["राज्य के नीति निदेशक तत्व", "Directive Principles"],
        ["संसद", "Parliament"],
        ["राष्ट्रपति और उपराष्ट्रपति", "President and Vice President"],
        ["प्रधानमंत्री और मंत्रिपरिषद", "Prime Minister and Council of Ministers"],
        ["सर्वोच्च न्यायालय", "Supreme Court"],
        ["चुनाव आयोग", "Election Commission"],
        ["भारतीय अर्थव्यवस्था", "Indian Economy"],
        ["बैंकिंग की मूल बातें", "Banking Basics"],
        ["भौतिक विज्ञान", "Physics"],
        ["रसायन विज्ञान", "Chemistry"],
        ["जीव विज्ञान", "Biology"],
        ["मानव शरीर", "Human Body"],
        ["पर्यावरण और पारिस्थितिकी", "Environment and Ecology"],
        ["राष्ट्रीय उद्यान और अभयारण्य", "National Parks and Sanctuaries"],
        ["खेल और खिलाड़ी", "Sports and Players"],
        ["पुरस्कार और सम्मान", "Awards and Honours"],
        ["महत्वपूर्ण दिवस", "Important Days"],
        ["पुस्तकें और लेखक", "Books and Authors"],
        ["कला और संस्कृति", "Art and Culture"],
        ["राजस्थान का इतिहास", "History of Rajasthan"],
        ["राजस्थान का भूगोल", "Geography of Rajasthan"],
        ["राजस्थान की कला और संस्कृति", "Art and Culture of Rajasthan"],
        ["राजस्थान की नदियाँ और झीलें", "Rivers and Lakes of Rajasthan"],
        ["राजस्थान के लोकदेवता और मेले", "Folk Deities and Fairs of Rajasthan"],
        ["समसामयिक घटनाएँ", "Current Affairs"]
      ])
    ]
  }
];
/* 4nizz Study Hub: Maths Notes and MCQs Upgrade */

const MATHS_UPGRADE = {
  "प्रतिशत": {
    notes: [
      "प्रतिशत का अर्थ है प्रति 100।",
      "सूत्र: प्रतिशत = (भाग / कुल भाग) × 100",
      "सूत्र: किसी संख्या का x% = संख्या × x / 100",
      "उदाहरण: 400 का 15% = 400 × 15 / 100 = 60।",
      "उदाहरण: 80 से 100 होने पर वृद्धि = 20/80 × 100 = 25%।",
      "ध्यान दें: प्रतिशत परिवर्तन में मूल मान को denominator में लेते हैं।"
    ],
    questions: [
      {
        question: "480 का 25% कितना है?",
        options: ["100", "110", "120", "125"],
        answer: 2,
        explanation: "480 × 25 / 100 = 120।"
      },
      {
        question: "किसी संख्या का 20% = 60 है। संख्या क्या है?",
        options: ["200", "250", "300", "350"],
        answer: 2,
        explanation: "संख्या = 60 × 100 / 20 = 300।"
      },
      {
        question: "एक वस्तु की कीमत 200 से बढ़कर 250 हो गई। वृद्धि प्रतिशत कितना है?",
        options: ["20%", "25%", "30%", "50%"],
        answer: 1,
        explanation: "वृद्धि = 50। प्रतिशत = 50/200 × 100 = 25%।"
      }
    ]
  },

  "औसत": {
    notes: [
      "औसत = सभी मानों का योग / कुल मानों की संख्या।",
      "कुल योग = औसत × कुल मानों की संख्या।",
      "उदाहरण: 10, 20, 30 का औसत = 60/3 = 20।",
      "यदि n संख्याओं का औसत A है, तो उनका योग n × A होगा।",
      "किसी एक संख्या को बदलने पर कुल योग में जितना अंतर आएगा, उसी से नया औसत निकाला जा सकता है।"
    ],
    questions: [
      {
        question: "12, 18, 24 और 30 का औसत क्या है?",
        options: ["18", "20", "21", "24"],
        answer: 2,
        explanation: "योग 84 है। औसत = 84/4 = 21।"
      },
      {
        question: "5 संख्याओं का औसत 16 है। उनका कुल योग कितना है?",
        options: ["64", "70", "80", "85"],
        answer: 2,
        explanation: "कुल योग = 5 × 16 = 80।"
      },
      {
        question: "तीन संख्याओं का औसत 20 है। चौथी संख्या 28 जोड़ने पर नया औसत क्या होगा?",
        options: ["20", "21", "22", "23"],
        answer: 1,
        explanation: "पहली तीन का योग 60 है। नया औसत = (60 + 28)/4 = 22।"
      }
    ]
  },

  "HCF और LCM": {
    notes: [
      "HCF वह सबसे बड़ी संख्या है जो दी गई सभी संख्याओं को पूरा विभाजित करती है।",
      "LCM वह सबसे छोटी धनात्मक संख्या है जो सभी संख्याओं से विभाजित होती है।",
      "दो धनात्मक पूर्णांकों के लिए: HCF × LCM = दोनों संख्याओं का गुणनफल।",
      "उदाहरण: 12 और 18 का HCF = 6 तथा LCM = 36।",
      "अभाज्य गुणनखंड विधि से HCF और LCM आसानी से निकाले जा सकते हैं।"
    ],
    questions: [
      {
        question: "12 और 18 का HCF क्या है?",
        options: ["2", "3", "6", "9"],
        answer: 2,
        explanation: "12 और 18 दोनों को 6 विभाजित करता है, और इससे बड़ा कोई सामान्य भाजक नहीं है।"
      },
      {
        question: "4 और 6 का LCM क्या है?",
        options: ["8", "10", "12", "24"],
        answer: 2,
        explanation: "4 और 6 का सबसे छोटा सामान्य गुणज 12 है।"
      }
    ]
  },

  "अनुपात और समानुपात": {
    notes: [
      "अनुपात दो समान प्रकार की राशियों की तुलना है।",
      "a:b = a/b, जहाँ b शून्य नहीं है।",
      "यदि a:b = c:d, तो a × d = b × c।",
      "उदाहरण: 2:3 में कुल भाग 5 हैं। 100 को इस अनुपात में बाँटने पर 40 और 60 मिलेंगे।",
      "अनुपात की तुलना करने से पहले इकाइयाँ समान करें।"
    ],
    questions: [
      {
        question: "60 को 2:3 के अनुपात में बाँटें। छोटा भाग क्या है?",
        options: ["20", "24", "30", "36"],
        answer: 1,
        explanation: "कुल भाग 5 हैं। छोटा भाग = 60 × 2/5 = 24।"
      },
      {
        question: "यदि x:12 = 2:3, तो x कितना है?",
        options: ["6", "8", "9", "10"],
        answer: 1,
        explanation: "x/12 = 2/3, इसलिए x = 8।"
      }
    ]
  },

  "लाभ और हानि": {
    notes: [
      "क्रय मूल्य (CP): जिस कीमत पर वस्तु खरीदी जाती है।",
      "विक्रय मूल्य (SP): जिस कीमत पर वस्तु बेची जाती है।",
      "लाभ = SP − CP, जब SP > CP।",
      "हानि = CP − SP, जब CP > SP।",
      "लाभ प्रतिशत = लाभ/CP × 100।",
      "हानि प्रतिशत = हानि/CP × 100।",
      "लाभ या हानि प्रतिशत सामान्यतः क्रय मूल्य पर निकाला जाता है।"
    ],
    questions: [
      {
        question: "एक वस्तु 500 रुपये में खरीदी और 600 रुपये में बेची। लाभ प्रतिशत कितना है?",
        options: ["10%", "15%", "20%", "25%"],
        answer: 2,
        explanation: "लाभ = 100। लाभ प्रतिशत = 100/500 × 100 = 20%।"
      },
      {
        question: "800 रुपये की वस्तु 720 रुपये में बेची गई। हानि प्रतिशत कितना है?",
        options: ["8%", "10%", "12%", "15%"],
        answer: 1,
        explanation: "हानि = 80। हानि प्रतिशत = 80/800 × 100 = 10%।"
      }
    ]
  },

  "छूट": {
    notes: [
      "अंकित मूल्य (MP) वह मूल्य है जो वस्तु पर लिखा होता है।",
      "छूट = अंकित मूल्य − विक्रय मूल्य।",
      "छूट प्रतिशत = छूट/अंकित मूल्य × 100।",
      "उदाहरण: 1,000 रुपये पर 10% छूट = 100 रुपये।",
      "छूट के बाद कीमत = अंकित मूल्य × (100 − छूट प्रतिशत)/100।"
    ],
    questions: [
      {
        question: "1,500 रुपये पर 20% छूट कितनी होगी?",
        options: ["200", "250", "300", "350"],
        answer: 2,
        explanation: "छूट = 1500 × 20/100 = 300 रुपये।"
      },
      {
        question: "2,000 रुपये की वस्तु पर 10% छूट के बाद कीमत क्या होगी?",
        options: ["1,600", "1,700", "1,800", "1,900"],
        answer: 2,
        explanation: "छूट 200 रुपये है। कीमत = 2000 − 200 = 1800 रुपये।"
      }
    ]
  },

  "साधारण ब्याज": {
    notes: [
      "साधारण ब्याज (SI) मूलधन पर निश्चित दर से लगाया जाता है।",
      "सूत्र: SI = (P × R × T)/100।",
      "P = मूलधन, R = वार्षिक ब्याज दर प्रतिशत में, T = समय वर्षों में।",
      "कुल राशि = मूलधन + साधारण ब्याज।",
      "उदाहरण: 1,000 रुपये पर 5% वार्षिक दर से 2 साल का ब्याज = 100 रुपये।"
    ],
    questions: [
      {
        question: "2,000 रुपये पर 5% वार्षिक दर से 3 साल का साधारण ब्याज कितना है?",
        options: ["200", "250", "300", "350"],
        answer: 2,
        explanation: "SI = 2000 × 5 × 3 / 100 = 300 रुपये।"
      },
      {
        question: "1,000 रुपये पर 10% वार्षिक दर से 2 साल बाद कुल राशि कितनी होगी?",
        options: ["1,100", "1,150", "1,200", "1,250"],
        answer: 2,
        explanation: "ब्याज = 200 रुपये। कुल राशि = 1000 + 200 = 1200 रुपये।"
      }
    ]
  },

  "चक्रवृद्धि ब्याज": {
    notes: [
      "चक्रवृद्धि ब्याज में ब्याज मूलधन के साथ पिछली अवधि के ब्याज पर भी मिलता है।",
      "वार्षिक चक्रवृद्धि राशि: A = P(1 + R/100)^T।",
      "चक्रवृद्धि ब्याज = A − P।",
      "उदाहरण: 1,000 रुपये पर 10% वार्षिक दर से 2 साल बाद राशि = 1,000 × 1.1 × 1.1 = 1,210 रुपये।",
      "उसी उदाहरण में चक्रवृद्धि ब्याज 210 रुपये है।"
    ],
    questions: [
      {
        question: "1,000 रुपये पर 10% वार्षिक दर से 2 साल का चक्रवृद्धि ब्याज कितना है?",
        options: ["100", "200", "210", "220"],
        answer: 2,
        explanation: "राशि = 1000 × (1.1)^2 = 1210। ब्याज = 210 रुपये।"
      },
      {
        question: "चक्रवृद्धि ब्याज में दूसरे वर्ष का ब्याज किस पर लगता है?",
        options: ["केवल मूलधन पर", "मूलधन और पहले के ब्याज सहित राशि पर", "केवल पहले वर्ष के ब्याज पर", "किसी पर नहीं"],
        answer: 1,
        explanation: "चक्रवृद्धि ब्याज में पिछली अवधि का ब्याज भी राशि में जुड़ जाता है।"
      }
    ]
  },

  "साझेदारी": {
    notes: [
      "साझेदारी में लाभ का बँटवारा सामान्यतः पूँजी × समय के अनुपात में होता है।",
      "यदि सभी साझेदार समान समय के लिए निवेश करें, तो लाभ पूँजी के अनुपात में बाँटा जाता है।",
      "उदाहरण: A ने 1,000 रुपये और B ने 2,000 रुपये समान समय के लिए लगाए। लाभ का अनुपात 1:2 होगा।",
      "निवेश की अवधि अलग हो तो प्रत्येक की पूँजी को महीनों से गुणा करें।"
    ],
    questions: [
      {
        question: "A ने 1,000 और B ने 2,000 रुपये समान अवधि के लिए लगाए। 300 रुपये लाभ में A का हिस्सा कितना होगा?",
        options: ["50", "100", "150", "200"],
        answer: 1,
        explanation: "अनुपात 1:2 है। A का हिस्सा = 300 × 1/3 = 100 रुपये।"
      },
      {
        question: "A ने 2,000 रुपये 12 महीने और B ने 3,000 रुपये 4 महीने लगाए। लाभ का अनुपात क्या है?",
        options: ["1:1", "2:1", "3:2", "4:3"],
        answer: 1,
        explanation: "A का पूँजी-समय = 24000 और B का = 12000। अनुपात 2:1 है।"
      }
    ]
  },

  "समय और कार्य": {
    notes: [
      "यदि कोई व्यक्ति किसी काम को x दिनों में करता है, तो एक दिन का काम 1/x होगा।",
      "दो व्यक्तियों की संयुक्त कार्य-दर = उनकी अलग-अलग कार्य-दरों का योग।",
      "उदाहरण: A काम 10 दिन में और B 15 दिन में करता है। संयुक्त दर = 1/10 + 1/15 = 1/6।",
      "इसलिए दोनों मिलकर काम 6 दिनों में पूरा करेंगे।",
      "कुल काम को सुविधानुसार 1 या LCM इकाइयाँ मान सकते हैं।"
    ],
    questions: [
      {
        question: "A एक काम 10 दिनों में और B 15 दिनों में करता है। दोनों मिलकर कितने दिन में करेंगे?",
        options: ["5", "6", "8", "12"],
        answer: 1,
        explanation: "संयुक्त दर = 1/10 + 1/15 = 1/6। समय 6 दिन है।"
      },
      {
        question: "यदि कोई व्यक्ति काम 20 दिनों में करता है, तो 5 दिनों में कितना काम करेगा?",
        options: ["1/2", "1/3", "1/4", "1/5"],
        answer: 2,
        explanation: "5 दिनों का काम = 5/20 = 1/4।"
      }
    ]
  },

  "चाल, समय और दूरी": {
    notes: [
      "चाल = दूरी / समय।",
      "दूरी = चाल × समय।",
      "समय = दूरी / चाल।",
      "km/h से m/s में बदलने के लिए 5/18 से गुणा करें।",
      "m/s से km/h में बदलने के लिए 18/5 से गुणा करें।",
      "उदाहरण: 60 km/h = 60 × 5/18 = 16.67 m/s लगभग।"
    ],
    questions: [
      {
        question: "60 km/h की चाल से 2 घंटे में कितनी दूरी तय होगी?",
        options: ["100 km", "110 km", "120 km", "140 km"],
        answer: 2,
        explanation: "दूरी = 60 × 2 = 120 km।"
      },
      {
        question: "36 km/h को m/s में बदलें।",
        options: ["5", "10", "15", "20"],
        answer: 1,
        explanation: "36 × 5/18 = 10 m/s।"
      }
    ]
  }
};

const mathsSubject = STUDY_DATA.find(subject => subject.id === "maths");

if (mathsSubject) {
  mathsSubject.chapters.forEach(chapter => {
    const upgrade = MATHS_UPGRADE[chapter.title];

    if (upgrade) {
      chapter.notes = upgrade.notes;
      chapter.questions = upgrade.questions;
    }
  });
}
/* 4nizz Study Hub - More Maths Chapters */

const MATHS_UPGRADE_MORE = {
  "संख्या पद्धति": {
    notes: [
      "प्राकृतिक संख्याएँ: 1, 2, 3, 4, ...",
      "पूर्ण संख्याओं में 0 और सभी प्राकृतिक संख्याएँ शामिल हैं।",
      "पूर्णांक में ऋणात्मक संख्याएँ, शून्य और धनात्मक संख्याएँ आती हैं।",
      "सम संख्या 2 से पूरी विभाजित होती है। विषम संख्या 2 से पूरी विभाजित नहीं होती।",
      "विभाज्यता: 2 के लिए अंतिम अंक सम हो; 5 के लिए अंतिम अंक 0 या 5 हो; 10 के लिए अंतिम अंक 0 हो।",
      "3 और 9 की विभाज्यता जाँचने के लिए अंकों का योग क्रमशः 3 या 9 से विभाजित होना चाहिए।"
    ],
    questions: [
      {
        question: "इनमें से कौन-सी संख्या 3 से विभाजित होती है?",
        options: ["124", "125", "123", "127"],
        answer: 2,
        explanation: "1 + 2 + 3 = 6, और 6, 3 से विभाजित होता है।"
      },
      {
        question: "सबसे छोटी अभाज्य संख्या कौन-सी है?",
        options: ["1", "2", "3", "0"],
        answer: 1,
        explanation: "2 सबसे छोटी अभाज्य संख्या है और एकमात्र सम अभाज्य संख्या है।"
      }
    ]
  },

  "सरलीकरण": {
    notes: [
      "BODMAS क्रम: Brackets, Orders, Division, Multiplication, Addition, Subtraction।",
      "एक ही स्तर की Division और Multiplication में बाएँ से दाएँ हल करें।",
      "एक ही स्तर की Addition और Subtraction में भी बाएँ से दाएँ हल करें।",
      "भिन्न जोड़ने या घटाने के लिए हर समान करें।",
      "उदाहरण: 12 + 4 × 3 = 12 + 12 = 24।"
    ],
    questions: [
      {
        question: "18 + 6 × 2 का मान क्या है?",
        options: ["48", "30", "36", "24"],
        answer: 1,
        explanation: "पहले गुणा: 6 × 2 = 12। फिर 18 + 12 = 30।"
      },
      {
        question: "(20 − 8) ÷ 3 का मान क्या है?",
        options: ["3", "4", "6", "8"],
        answer: 1,
        explanation: "पहले कोष्ठक: 20 − 8 = 12। फिर 12 ÷ 3 = 4।"
      }
    ]
  },

  "नाव और धारा": {
    notes: [
      "अनुकूल धारा में नाव की चाल = शांत जल में नाव की चाल + धारा की चाल।",
      "प्रतिकूल धारा में नाव की चाल = शांत जल में नाव की चाल − धारा की चाल।",
      "शांत जल में नाव की चाल = (अनुकूल चाल + प्रतिकूल चाल) / 2।",
      "धारा की चाल = (अनुकूल चाल − प्रतिकूल चाल) / 2।",
      "समय = दूरी / चाल।"
    ],
    questions: [
      {
        question: "नाव की शांत जल में चाल 10 km/h और धारा की चाल 2 km/h है। अनुकूल चाल कितनी होगी?",
        options: ["8 km/h", "10 km/h", "12 km/h", "14 km/h"],
        answer: 2,
        explanation: "अनुकूल चाल = 10 + 2 = 12 km/h।"
      },
      {
        question: "अनुकूल चाल 15 km/h और प्रतिकूल चाल 9 km/h है। धारा की चाल कितनी है?",
        options: ["2 km/h", "3 km/h", "4 km/h", "6 km/h"],
        answer: 1,
        explanation: "(15 − 9) / 2 = 3 km/h।"
      }
    ]
  },

  "रेलगाड़ी": {
    notes: [
      "दूरी, समय और चाल के सामान्य सूत्र यहाँ भी लागू होते हैं।",
      "किसी खंभे को पार करते समय ट्रेन की दूरी = ट्रेन की लंबाई।",
      "प्लेटफॉर्म को पार करते समय दूरी = ट्रेन की लंबाई + प्लेटफॉर्म की लंबाई।",
      "दो ट्रेनें विपरीत दिशाओं में चलें तो सापेक्ष चाल = दोनों चालों का योग।",
      "एक ही दिशा में चलने पर सापेक्ष चाल = तेज चाल − धीमी चाल।",
      "km/h को m/s में बदलने के लिए 5/18 से गुणा करें।"
    ],
    questions: [
      {
        question: "100 मीटर लंबी ट्रेन 10 m/s की चाल से खंभा कितने सेकंड में पार करेगी?",
        options: ["5", "10", "15", "20"],
        answer: 1,
        explanation: "समय = 100 / 10 = 10 सेकंड।"
      },
      {
        question: "150 मीटर ट्रेन 250 मीटर प्लेटफॉर्म को 20 m/s से पार करती है। समय कितना होगा?",
        options: ["10 सेकंड", "15 सेकंड", "20 सेकंड", "25 सेकंड"],
        answer: 2,
        explanation: "कुल दूरी = 150 + 250 = 400 मीटर। समय = 400/20 = 20 सेकंड।"
      }
    ]
  },

  "आयु संबंधी प्रश्न": {
    notes: [
      "वर्तमान आयु को x या किसी अन्य चर से दर्शाएँ।",
      "n वर्ष बाद की आयु = वर्तमान आयु + n।",
      "n वर्ष पहले की आयु = वर्तमान आयु − n।",
      "यदि पिता की आयु पुत्र की आयु से 3 गुना है, तो पिता की आयु = 3x और पुत्र की आयु = x मान सकते हैं।",
      "प्रश्न में दी गई शर्तों से समीकरण बनाकर हल करें।"
    ],
    questions: [
      {
        question: "रवि की आयु 20 वर्ष है। 5 वर्ष बाद उसकी आयु कितनी होगी?",
        options: ["20 वर्ष", "23 वर्ष", "25 वर्ष", "30 वर्ष"],
        answer: 2,
        explanation: "20 + 5 = 25 वर्ष।"
      },
      {
        question: "पिता की आयु 40 वर्ष और पुत्र की आयु 10 वर्ष है। पिता की आयु पुत्र की आयु से कितनी गुना है?",
        options: ["2 गुना", "3 गुना", "4 गुना", "5 गुना"],
        answer: 2,
        explanation: "40 ÷ 10 = 4 गुना।"
      }
    ]
  },

  "मिश्रण": {
    notes: [
      "मिश्रण में दो या अधिक पदार्थों को मिलाया जाता है।",
      "मिश्रण के प्रश्नों में कुल मात्रा और प्रत्येक पदार्थ की मात्रा पर ध्यान दें।",
      "औसत कीमत = कुल लागत / कुल मात्रा।",
      "उदाहरण: 2 kg चावल 40 रुपये/kg और 3 kg चावल 60 रुपये/kg पर खरीदे। औसत कीमत = (80 + 180)/5 = 52 रुपये/kg।",
      "Alligation विधि का उपयोग अलग-अलग कीमत या सांद्रता वाले मिश्रणों में किया जा सकता है।"
    ],
    questions: [
      {
        question: "2 kg वस्तु 40 रुपये/kg और 2 kg वस्तु 60 रुपये/kg में मिलाई गई। औसत कीमत क्या होगी?",
        options: ["40 रुपये/kg", "45 रुपये/kg", "50 रुपये/kg", "55 रुपये/kg"],
        answer: 2,
        explanation: "कुल लागत = 80 + 120 = 200। कुल मात्रा 4 kg; औसत 50 रुपये/kg।"
      },
      {
        question: "10 लीटर मिश्रण में 2 लीटर पानी और 8 लीटर दूध है। दूध का प्रतिशत कितना है?",
        options: ["20%", "40%", "60%", "80%"],
        answer: 3,
        explanation: "दूध का प्रतिशत = 8/10 × 100 = 80%।"
      }
    ]
  },

  "बीजगणित": {
    notes: [
      "बीजगणित में अक्षरों का उपयोग अज्ञात संख्याओं को दर्शाने के लिए होता है।",
      "समान पदों को जोड़ा या घटाया जा सकता है: 3x + 2x = 5x।",
      "पहचान: (a + b)² = a² + 2ab + b²।",
      "पहचान: (a − b)² = a² − 2ab + b²।",
      "पहचान: a² − b² = (a − b)(a + b)।",
      "समीकरण हल करते समय दोनों पक्षों पर समान संक्रिया करें।"
    ],
    questions: [
      {
        question: "यदि x + 7 = 15, तो x कितना है?",
        options: ["6", "7", "8", "9"],
        answer: 2,
        explanation: "x = 15 − 7 = 8।"
      },
      {
        question: "(a + b)² का सही विस्तार कौन-सा है?",
        options: ["a² + b²", "a² − 2ab + b²", "a² + 2ab + b²", "a² − b²"],
        answer: 2,
        explanation: "(a + b)² = a² + 2ab + b²।"
      }
    ]
  },

  "रेखाएँ और कोण": {
    notes: [
      "एक सीधी रेखा पर बने कोणों का योग 180° होता है।",
      "एक बिंदु के चारों ओर सभी कोणों का योग 360° होता है।",
      "शीर्षाभिमुख कोण बराबर होते हैं।",
      "पूरक कोणों का योग 90° होता है।",
      "संपूरक कोणों का योग 180° होता है।",
      "समांतर रेखाओं को एक तिर्यक रेखा काटे तो संगत कोण बराबर होते हैं।"
    ],
    questions: [
      {
        question: "एक सीधी रेखा पर एक कोण 65° है। दूसरा कोण कितना होगा?",
        options: ["25°", "65°", "115°", "125°"],
        answer: 2,
        explanation: "दूसरा कोण = 180° − 65° = 115°।"
      },
      {
        question: "एक बिंदु के चारों ओर कोणों का कुल योग कितना होता है?",
        options: ["90°", "180°", "270°", "360°"],
        answer: 3,
        explanation: "एक बिंदु के चारों ओर कोणों का योग 360° है।"
      }
    ]
  },

  "त्रिभुज": {
    notes: [
      "त्रिभुज के तीनों आंतरिक कोणों का योग 180° होता है।",
      "समबाहु त्रिभुज की तीनों भुजाएँ और तीनों कोण बराबर होते हैं।",
      "समकोण त्रिभुज में एक कोण 90° होता है।",
      "पाइथागोरस प्रमेय: कर्ण² = आधार² + लंब²।",
      "त्रिभुज का क्षेत्रफल = 1/2 × आधार × ऊँचाई।",
      "त्रिभुज की किसी भी दो भुजाओं का योग तीसरी भुजा से अधिक होता है।"
    ],
    questions: [
      {
        question: "त्रिभुज के दो कोण 50° और 60° हैं। तीसरा कोण क्या होगा?",
        options: ["60°", "70°", "80°", "90°"],
        answer: 1,
        explanation: "तीसरा कोण = 180° − 50° − 60° = 70°।"
      },
      {
        question: "समकोण त्रिभुज की दो छोटी भुजाएँ 3 cm और 4 cm हैं। कर्ण कितना है?",
        options: ["5 cm", "6 cm", "7 cm", "8 cm"],
        answer: 0,
        explanation: "कर्ण = √(3² + 4²) = √25 = 5 cm।"
      }
    ]
  },

  "चतुर्भुज": {
    notes: [
      "किसी चतुर्भुज के आंतरिक कोणों का योग 360° होता है।",
      "आयत का क्षेत्रफल = लंबाई × चौड़ाई।",
      "आयत का परिमाप = 2 × (लंबाई + चौड़ाई)।",
      "वर्ग का क्षेत्रफल = भुजा²।",
      "वर्ग का परिमाप = 4 × भुजा।",
      "समांतर चतुर्भुज का क्षेत्रफल = आधार × ऊँचाई।"
    ],
    questions: [
      {
        question: "एक वर्ग की भुजा 6 cm है। उसका क्षेत्रफल कितना है?",
        options: ["12 cm²", "24 cm²", "36 cm²", "48 cm²"],
        answer: 2,
        explanation: "क्षेत्रफल = 6 × 6 = 36 cm²।"
      },
      {
        question: "एक आयत की लंबाई 8 cm और चौड़ाई 5 cm है। परिमाप कितना है?",
        options: ["13 cm", "26 cm", "40 cm", "80 cm"],
        answer: 1,
        explanation: "परिमाप = 2 × (8 + 5) = 26 cm।"
      }
    ]
  },

  "वृत्त": {
    notes: [
      "वृत्त के केंद्र से परिधि तक की दूरी त्रिज्या कहलाती है।",
      "व्यास = 2 × त्रिज्या।",
      "परिधि = 2πr या πd।",
      "क्षेत्रफल = πr²।",
      "π का लगभग मान 22/7 या 3.14 लिया जाता है, प्रश्न के अनुसार।"
    ],
    questions: [
      {
        question: "वृत्त की त्रिज्या 7 cm है। π = 22/7 लेने पर परिधि कितनी होगी?",
        options: ["22 cm", "44 cm", "49 cm", "154 cm"],
        answer: 1,
        explanation: "परिधि = 2 × 22/7 × 7 = 44 cm।"
      },
      {
        question: "वृत्त की त्रिज्या 7 cm है। π = 22/7 लेने पर क्षेत्रफल कितना होगा?",
        options: ["44 cm²", "77 cm²", "154 cm²", "308 cm²"],
        answer: 2,
        explanation: "क्षेत्रफल = 22/7 × 7 × 7 = 154 cm²।"
      }
    ]
  },

  "क्षेत्रमिति": {
    notes: [
      "आयत का क्षेत्रफल = लंबाई × चौड़ाई।",
      "त्रिभुज का क्षेत्रफल = 1/2 × आधार × ऊँचाई।",
      "वर्ग का क्षेत्रफल = भुजा²।",
      "घन का आयतन = भुजा³।",
      "घनाभ का आयतन = लंबाई × चौड़ाई × ऊँचाई।",
      "बेलन का आयतन = πr²h।",
      "क्षेत्रफल वर्ग इकाइयों में और आयतन घन इकाइयों में व्यक्त होता है।"
    ],
    questions: [
      {
        question: "लंबाई 10 m और चौड़ाई 4 m वाले आयत का क्षेत्रफल कितना है?",
        options: ["14 m²", "28 m²", "40 m²", "80 m²"],
        answer: 2,
        explanation: "क्षेत्रफल = 10 × 4 = 40 m²।"
      },
      {
        question: "3 cm भुजा वाले घन का आयतन कितना है?",
        options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
        answer: 2,
        explanation: "आयतन = 3³ = 27 cm³।"
      }
    ]
  },

  "त्रिकोणमिति": {
    notes: [
      "समकोण त्रिभुज में sin θ = लंब/कर्ण।",
      "cos θ = आधार/कर्ण।",
      "tan θ = लंब/आधार।",
      "tan θ = sin θ / cos θ, जब cos θ शून्य न हो।",
      "sin 30° = 1/2।",
      "cos 60° = 1/2।",
      "tan 45° = 1।"
    ],
    questions: [
      {
        question: "sin 30° का मान क्या है?",
        options: ["0", "1/2", "√3/2", "1"],
        answer: 1,
        explanation: "sin 30° = 1/2।"
      },
      {
        question: "tan 45° का मान क्या है?",
        options: ["0", "1/2", "1", "√3"],
        answer: 2,
        explanation: "tan 45° = 1।"
      }
    ]
  },

  "डेटा इंटरप्रिटेशन": {
    notes: [
      "डेटा इंटरप्रिटेशन में तालिका, बार ग्राफ, पाई चार्ट और रेखा ग्राफ से जानकारी निकालते हैं।",
      "प्रतिशत परिवर्तन = (नया मान − पुराना मान)/पुराना मान × 100।",
      "औसत = सभी मानों का योग / मानों की संख्या।",
      "पाई चार्ट में कुल कोण 360° होता है।",
      "प्रश्न हल करने से पहले शीर्षक, इकाइयाँ और समय अवधि ध्यान से पढ़ें।"
    ],
    questions: [
      {
        question: "चार दिनों की बिक्री 10, 20, 30 और 40 इकाई है। औसत बिक्री कितनी है?",
        options: ["20", "25", "30", "35"],
        answer: 1,
        explanation: "औसत = (10 + 20 + 30 + 40)/4 = 25।"
      },
      {
        question: "बिक्री 80 से बढ़कर 100 हो गई। वृद्धि प्रतिशत कितना है?",
        options: ["20%", "25%", "30%", "40%"],
        answer: 1,
        explanation: "वृद्धि = 20। प्रतिशत = 20/80 × 100 = 25%।"
      }
    ]
  }
};

const mathsSubjectMore = STUDY_DATA.find(subject => subject.id === "maths");

if (mathsSubjectMore) {
  mathsSubjectMore.chapters.forEach(chapter => {
    const upgrade = MATHS_UPGRADE_MORE[chapter.title];

    if (upgrade) {
      chapter.notes = upgrade.notes;
      chapter.questions = upgrade.questions;
    }
  });
}
/* 4nizz Study Hub - Reasoning Upgrade */

const REASONING_UPGRADE_1 = {
  "संख्या श्रृंखला": {
    notes: [
      "संख्या श्रृंखला में संख्याओं के बीच का नियम पहचानना होता है।",
      "पहले लगातार संख्याओं का अंतर निकालो।",
      "यदि अंतर समान हो, तो जोड़ या घटाव का नियम हो सकता है।",
      "यदि अंतर बदल रहा हो, तो अंतर के बीच का अंतर या गुणा-भाग जाँचो।",
      "उदाहरण: 3, 6, 9, 12, ? उत्तर 15 है क्योंकि हर बार 3 जुड़ता है।"
    ],
    questions: [
      {
        question: "2, 5, 8, 11, ?",
        options: ["12", "13", "14", "15"],
        answer: 2,
        explanation: "हर बार 3 जुड़ रहा है। अगली संख्या 11 + 3 = 14।"
      },
      {
        question: "1, 4, 9, 16, ?",
        options: ["20", "24", "25", "36"],
        answer: 2,
        explanation: "ये क्रमशः 1², 2², 3², 4² हैं। अगली संख्या 5² = 25।"
      }
    ]
  },

  "दिशा ज्ञान": {
    notes: [
      "उत्तर, दक्षिण, पूर्व और पश्चिम चार मुख्य दिशाएँ हैं।",
      "उत्तर की ओर मुँह होने पर दायाँ हाथ पूर्व और बायाँ हाथ पश्चिम की ओर होता है।",
      "दक्षिण की ओर मुँह होने पर दायाँ हाथ पश्चिम और बायाँ हाथ पूर्व की ओर होता है।",
      "बाएँ या दाएँ मुड़ने के लिए पहले वर्तमान दिशा पहचानो।",
      "कुल दूरी और शुरुआती बिंदु से सीधी दूरी अलग-अलग हो सकती हैं।"
    ],
    questions: [
      {
        question: "मोहन उत्तर की ओर जा रहा है। वह दाएँ मुड़ता है। अब वह किस दिशा में है?",
        options: ["पश्चिम", "पूर्व", "दक्षिण", "उत्तर"],
        answer: 1,
        explanation: "उत्तर की ओर से दाएँ मुड़ने पर दिशा पूर्व होती है।"
      },
      {
        question: "एक व्यक्ति पूर्व की ओर देख रहा है। वह बाएँ मुड़ता है। अब किस दिशा में देख रहा है?",
        options: ["उत्तर", "दक्षिण", "पश्चिम", "पूर्व"],
        answer: 0,
        explanation: "पूर्व से बाएँ मुड़ने पर उत्तर दिशा आती है।"
      }
    ]
  },

  "अक्षर श्रृंखला": {
    notes: [
      "अंग्रेजी वर्णमाला में A = 1, B = 2, C = 3 ... Z = 26 माना जाता है।",
      "श्रृंखला में अक्षरों के आगे या पीछे जाने का नियम खोजो।",
      "कुछ प्रश्नों में एक अक्षर छोड़कर अगला अक्षर लिया जाता है।",
      "अक्षरों की संख्या-स्थिति लिखने से कठिन श्रृंखलाएँ आसान होती हैं।"
    ],
    questions: [
      {
        question: "A, C, E, G, ?",
        options: ["H", "I", "J", "K"],
        answer: 1,
        explanation: "हर बार एक अक्षर छोड़कर अगला लिया गया है। अगला अक्षर I है।"
      },
      {
        question: "B, E, H, K, ?",
        options: ["L", "M", "N", "O"],
        answer: 2,
        explanation: "अक्षरों की स्थिति 2, 5, 8, 11 है। हर बार 3 जुड़ता है, इसलिए अगला N = 14।"
      }
    ]
  },

  "समानता": {
    notes: [
      "समानता के प्रश्न में दो वस्तुओं के बीच संबंध पहचानकर वैसा ही संबंध दूसरी जोड़ी में लगाना होता है।",
      "संबंध उपयोग, गुण, भाग, वर्ग, स्थान या विपरीत अर्थ का हो सकता है।",
      "पहली जोड़ी का संबंध स्पष्ट शब्दों में सोचो, फिर विकल्प चुनो।"
    ],
    questions: [
      {
        question: "पुस्तक : पढ़ना :: भोजन : ?",
        options: ["लिखना", "खाना", "दौड़ना", "सोना"],
        answer: 1,
        explanation: "पुस्तक पढ़ी जाती है और भोजन खाया जाता है।"
      },
      {
        question: "डॉक्टर : अस्पताल :: शिक्षक : ?",
        options: ["बैंक", "विद्यालय", "अदालत", "खेत"],
        answer: 1,
        explanation: "डॉक्टर सामान्यतः अस्पताल में और शिक्षक विद्यालय में कार्य करता है।"
      }
    ]
  },

  "वर्गीकरण": {
    notes: [
      "वर्गीकरण में चार या अधिक विकल्पों में से अलग गुण वाला विकल्प पहचानना होता है।",
      "संख्याओं में सम-विषम, अभाज्य-संयुक्त या वर्ग-संख्या का अंतर जाँचो।",
      "शब्दों में श्रेणी, उपयोग, अर्थ या सामान्य गुण की तुलना करो।"
    ],
    questions: [
      {
        question: "अलग संख्या चुनो।",
        options: ["4", "9", "16", "20"],
        answer: 3,
        explanation: "4, 9 और 16 पूर्ण वर्ग हैं; 20 पूर्ण वर्ग नहीं है।"
      },
      {
        question: "अलग शब्द चुनो।",
        options: ["गुलाब", "कमल", "आम", "चमेली"],
        answer: 2,
        explanation: "गुलाब, कमल और चमेली फूल हैं; आम फल है।"
      }
    ]
  },

  "Coding-Decoding": {
    notes: [
      "Coding-Decoding में अक्षर या शब्द किसी निश्चित नियम से बदले जाते हैं।",
      "हर अक्षर की वर्णमाला में स्थिति लिखकर नियम पहचान सकते हैं।",
      "यदि हर अक्षर में 1 जोड़ा जाए, तो A का कोड B, B का C होगा।",
      "कुछ प्रश्नों में अक्षर उल्टे क्रम, स्थान बदलने या अलग-अलग संख्याओं के आधार पर कोड होते हैं।"
    ],
    questions: [
      {
        question: "यदि CAT को DBU लिखा जाए, तो DOG को कैसे लिखेंगे?",
        options: ["EPH", "EOG", "DPH", "FPH"],
        answer: 0,
        explanation: "हर अक्षर के बाद वाला अक्षर लिया गया है: D→E, O→P, G→H।"
      },
      {
        question: "यदि A = 1, B = 2, C = 3 हो, तो BAD का मान क्या होगा?",
        options: ["6", "7", "8", "9"],
        answer: 1,
        explanation: "B = 2, A = 1, D = 4। योग 2 + 1 + 4 = 7।"
      }
    ]
  },

  "रक्त संबंध": {
    notes: [
      "रक्त संबंध के प्रश्न में परिवार के सदस्यों के बीच संबंध पहचानना होता है।",
      "पहले पुरुष और महिला सदस्यों को अलग-अलग चिन्हित करो।",
      "वाक्य को छोटे हिस्सों में बाँटकर परिवार का चार्ट बनाओ।",
      "केवल दी गई जानकारी से निष्कर्ष निकालो; अतिरिक्त जानकारी न मानो।"
    ],
    questions: [
      {
        question: "रीना, मोहन की बहन है। मोहन, अमित का बेटा है। रीना का अमित से क्या संबंध है?",
        options: ["बहन", "बेटी", "माँ", "पत्नी"],
        answer: 1,
        explanation: "मोहन अमित का बेटा है और रीना उसकी बहन है, इसलिए रीना अमित की बेटी है।"
      },
      {
        question: "A, B का पिता है और B, C की माँ है। A का C से क्या संबंध है?",
        options: ["पिता", "नाना", "दादा", "भाई"],
        answer: 1,
        explanation: "B, C की माँ है और A, B का पिता है। इसलिए A, C का नाना है।"
      }
    ]
  },

  "क्रम और रैंकिंग": {
    notes: [
      "किसी व्यक्ति की बाएँ या दाएँ से रैंक दी हो, तो कुल संख्या निकालने का सूत्र है: बाएँ से रैंक + दाएँ से रैंक − 1।",
      "यदि कुल लोगों की संख्या और एक तरफ की रैंक दी हो, तो दूसरी तरफ की रैंक = कुल − पहली रैंक + 1।",
      "ऊपर और नीचे की रैंक में भी यही सिद्धांत लागू होता है।"
    ],
    questions: [
      {
        question: "एक पंक्ति में रवि बाएँ से 7वें और दाएँ से 9वें स्थान पर है। कुल कितने व्यक्ति हैं?",
        options: ["14", "15", "16", "17"],
        answer: 1,
        explanation: "कुल = 7 + 9 − 1 = 15।"
      },
      {
        question: "कक्षा में 30 विद्यार्थी हैं। अमित ऊपर से 8वें स्थान पर है। नीचे से उसका स्थान क्या है?",
        options: ["22वाँ", "23वाँ", "24वाँ", "25वाँ"],
        answer: 2,
        explanation: "नीचे से स्थान = 30 − 8 + 1 = 23। सही विकल्प 23वाँ होना चाहिए।"
      }
    ]
  },

  "लुप्त संख्या": {
    notes: [
      "लुप्त संख्या में खाली स्थान पर आने वाली संख्या का नियम पहचानना होता है।",
      "पंक्तियों और स्तंभों में जोड़, घटाव, गुणा, भाग या वर्ग का संबंध जाँचो।",
      "कभी-कभी एक ही नियम सभी पंक्तियों पर लागू होता है।"
    ],
    questions: [
      {
        question: "5, 10, 15, ?, 25",
        options: ["18", "20", "22", "30"],
        answer: 1,
        explanation: "हर बार 5 जुड़ रहा है। लुप्त संख्या 20 है।"
      },
      {
        question: "2, 4, 8, 16, ?",
        options: ["20", "24", "30", "32"],
        answer: 3,
        explanation: "हर संख्या पिछली संख्या की दोगुनी है। 16 × 2 = 32।"
      }
    ]
  },

  "न्यायवाक्य": {
    notes: [
      "न्यायवाक्य (Syllogism) में दिए गए कथनों के आधार पर निष्कर्ष जाँचे जाते हैं।",
      "केवल कथनों से निश्चित रूप से निकलने वाला निष्कर्ष स्वीकार करो।",
      "सभी, कुछ और कोई नहीं जैसे शब्दों पर विशेष ध्यान दो।",
      "Venn diagram बनाने से कथनों का संबंध समझना आसान होता है।"
    ],
    questions: [
      {
        question: "कथन: सभी आम फल हैं। सभी फल खाद्य पदार्थ हैं। निष्कर्ष: सभी आम खाद्य पदार्थ हैं।",
        options: [
          "निष्कर्ष सही है",
          "निष्कर्ष गलत है",
          "निश्चित नहीं",
          "कथन आपस में विरोधी हैं"
        ],
        answer: 0,
        explanation: "यदि सभी आम फल हैं और सभी फल खाद्य पदार्थ हैं, तो सभी आम खाद्य पदार्थ होंगे।"
      },
      {
        question: "कथन: कुछ विद्यार्थी खिलाड़ी हैं। निष्कर्ष: सभी विद्यार्थी खिलाड़ी हैं।",
        options: [
          "निष्कर्ष निश्चित रूप से सही है",
          "निष्कर्ष निश्चित रूप से गलत है",
          "निष्कर्ष नहीं निकलता",
          "सभी खिलाड़ी विद्यार्थी हैं"
        ],
        answer: 2,
        explanation: "कुछ विद्यार्थियों के खिलाड़ी होने से यह सिद्ध नहीं होता कि सभी विद्यार्थी खिलाड़ी हैं।"
      }
    ]
  }
};

const reasoningSubjectUpgrade1 = STUDY_DATA.find(
  subject => subject.id === "reasoning"
);

if (reasoningSubjectUpgrade1) {
  reasoningSubjectUpgrade1.chapters.forEach(chapter => {
    const upgrade = REASONING_UPGRADE_1[chapter.title];

    if (upgrade) {
      chapter.notes = upgrade.notes;
      chapter.questions = upgrade.questions;
    }
  });
}
const rankingChapterFix = STUDY_DATA
  .find(subject => subject.id === "reasoning")
  ?.chapters.find(chapter => chapter.title === "क्रम और रैंकिंग");

if (rankingChapterFix && rankingChapterFix.questions[1]) {
  rankingChapterFix.questions[1].answer = 1;
}
/* 4nizz Study Hub - Computer Upgrade 1 */

const COMPUTER_UPGRADE_1 = {
  "कंप्यूटर का परिचय": {
    notes: [
      "Computer एक electronic device है, जो data को process करके information देता है।",
      "IPO Cycle: Input → Process → Output।",
      "Data कच्चे तथ्य हैं, जबकि Information processed और उपयोगी data है।",
      "Hardware कंप्यूटर के वे भाग हैं जिन्हें छू सकते हैं, जैसे Keyboard, Monitor और CPU।",
      "Software निर्देशों और programs का समूह है।",
      "कंप्यूटर सामान्यतः बहुत तेज और सटीक गणना करता है, लेकिन परिणाम input और instructions पर निर्भर करते हैं।"
    ],
    questions: [
      {
        question: "कंप्यूटर का IPO Cycle क्या है?",
        options: [
          "Input, Process, Output",
          "Internet, Program, Option",
          "Input, Print, Open",
          "Install, Process, Order"
        ],
        answer: 0,
        explanation: "कंप्यूटर में सामान्य प्रक्रिया Input → Process → Output होती है।"
      },
      {
        question: "कंप्यूटर में कच्चे तथ्यों को क्या कहते हैं?",
        options: ["Information", "Data", "Output", "Program"],
        answer: 1,
        explanation: "कच्चे तथ्यों को Data कहते हैं। Process होने पर उपयोगी Information मिल सकती है।"
      }
    ]
  },

  "कंप्यूटर की पीढ़ियाँ": {
    notes: [
      "पहली पीढ़ी: Vacuum Tubes का उपयोग।",
      "दूसरी पीढ़ी: Transistors का उपयोग।",
      "तीसरी पीढ़ी: Integrated Circuits (IC) का उपयोग।",
      "चौथी पीढ़ी: Microprocessors का उपयोग।",
      "पाँचवीं पीढ़ी को अक्सर Artificial Intelligence और उन्नत processing से जोड़ा जाता है।",
      "पीढ़ियों का वर्गीकरण मुख्य रूप से उपयोग की गई प्रमुख तकनीक के आधार पर पढ़ाया जाता है।"
    ],
    questions: [
      {
        question: "पहली पीढ़ी के कंप्यूटरों में किस तकनीक का उपयोग होता था?",
        options: ["Transistor", "Vacuum Tube", "Microprocessor", "IC"],
        answer: 1,
        explanation: "पहली पीढ़ी के कंप्यूटरों में Vacuum Tubes का उपयोग होता था।"
      },
      {
        question: "Microprocessor किस पीढ़ी की प्रमुख विशेषता है?",
        options: ["पहली", "दूसरी", "तीसरी", "चौथी"],
        answer: 3,
        explanation: "चौथी पीढ़ी के कंप्यूटर Microprocessor तकनीक से जुड़े हैं।"
      }
    ]
  },

  "RAM और ROM": {
    notes: [
      "RAM का पूरा नाम Random Access Memory है।",
      "RAM अस्थायी (volatile) memory है; बिजली बंद होने पर सामान्यतः इसका data मिट जाता है।",
      "ROM का पूरा नाम Read Only Memory है।",
      "ROM non-volatile memory है; बिजली बंद होने पर भी उसका data बना रहता है।",
      "RAM में चल रहे programs और उनका data रखा जा सकता है।",
      "ROM और अन्य firmware memory का उपयोग booting तथा device instructions के लिए हो सकता है।"
    ],
    questions: [
      {
        question: "किस memory का data बिजली बंद होने पर सामान्यतः मिट जाता है?",
        options: ["ROM", "RAM", "SSD", "DVD"],
        answer: 1,
        explanation: "RAM volatile memory है।"
      },
      {
        question: "RAM का पूरा नाम क्या है?",
        options: [
          "Read Access Memory",
          "Random Access Memory",
          "Rapid Action Memory",
          "Run Access Module"
        ],
        answer: 1,
        explanation: "RAM = Random Access Memory।"
      }
    ]
  },

  "CPU और उसके भाग": {
    notes: [
      "CPU का पूरा नाम Central Processing Unit है।",
      "CPU instructions को execute करता है और processing में मुख्य भूमिका निभाता है।",
      "ALU का पूरा नाम Arithmetic Logic Unit है; यह arithmetic और logical operations करता है।",
      "Control Unit निर्देशों के execution और अन्य components के coordination में मदद करती है।",
      "Registers CPU के अंदर बहुत तेज छोटी storage locations होती हैं।",
      "CPU को अक्सर कंप्यूटर का 'मस्तिष्क' कहा जाता है।"
    ],
    questions: [
      {
        question: "CPU का पूरा नाम क्या है?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Program Utility",
          "Control Processing User"
        ],
        answer: 0,
        explanation: "CPU = Central Processing Unit।"
      },
      {
        question: "Arithmetic और logical operations कौन करता है?",
        options: ["ALU", "Monitor", "Keyboard", "Printer"],
        answer: 0,
        explanation: "ALU arithmetic और logical operations करता है।"
      }
    ]
  },

  "Input Devices": {
    notes: [
      "Input devices कंप्यूटर को data या commands देने के लिए उपयोग होते हैं।",
      "Keyboard का उपयोग text और commands दर्ज करने के लिए होता है।",
      "Mouse एक pointing device है।",
      "Scanner कागज या तस्वीरों को digital form में बदल सकता है।",
      "Microphone आवाज input करता है।",
      "Barcode reader barcode को पढ़ता है।"
    ],
    questions: [
      {
        question: "इनमें से कौन-सा Input Device है?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        answer: 2,
        explanation: "Keyboard से कंप्यूटर में text और commands input करते हैं।"
      },
      {
        question: "कागज पर मौजूद तस्वीर को digital रूप में लाने के लिए क्या उपयोग करेंगे?",
        options: ["Scanner", "Speaker", "Projector", "Plotter"],
        answer: 0,
        explanation: "Scanner कागजी सामग्री को digital image में बदल सकता है।"
      }
    ]
  },

  "Output Devices": {
    notes: [
      "Output devices कंप्यूटर से प्राप्त परिणाम दिखाते या सुनाते हैं।",
      "Monitor जानकारी screen पर दिखाता है।",
      "Printer जानकारी को कागज पर print करता है।",
      "Speaker आवाज output करता है।",
      "Projector बड़ी screen या सतह पर image दिखाता है।",
      "Touchscreen input और output दोनों का काम कर सकती है।"
    ],
    questions: [
      {
        question: "कौन-सा device सामान्यतः soft copy दिखाता है?",
        options: ["Monitor", "Printer", "Scanner", "Keyboard"],
        answer: 0,
        explanation: "Monitor जानकारी को screen पर दिखाता है।"
      },
      {
        question: "कागज पर output देने वाला device कौन-सा है?",
        options: ["Mouse", "Printer", "Microphone", "Joystick"],
        answer: 1,
        explanation: "Printer कागज पर hard copy देता है।"
      }
    ]
  },

  "मेमोरी और स्टोरेज": {
    notes: [
      "Bit कंप्यूटर data की सबसे छोटी सामान्य इकाई है।",
      "8 bits = 1 byte।",
      "KB, MB, GB और TB storage की इकाइयाँ हैं।",
      "कई परीक्षा प्रश्नों में 1 KB = 1024 bytes माना जाता है; कुछ storage संदर्भों में decimal units भी उपयोग होती हैं।",
      "HDD और SSD secondary storage devices हैं।",
      "RAM मुख्य memory है और सामान्यतः volatile होती है; HDD/SSD data को बिजली बंद होने पर भी सुरक्षित रख सकते हैं।"
    ],
    questions: [
      {
        question: "एक Byte में कितने bits होते हैं?",
        options: ["2", "4", "8", "16"],
        answer: 2,
        explanation: "1 Byte = 8 bits।"
      },
      {
        question: "इनमें से कौन-सा secondary storage device है?",
        options: ["Register", "Cache", "RAM", "SSD"],
        answer: 3,
        explanation: "SSD data को लंबे समय तक store करने वाला secondary storage device है।"
      }
    ]
  },

  "Hardware और Software": {
    notes: [
      "Hardware कंप्यूटर के physical parts हैं।",
      "Software programs और instructions का समूह है।",
      "Operating System system software का उदाहरण है।",
      "Word processor और spreadsheet application software के उदाहरण हैं।",
      "Device drivers operating system और hardware के बीच communication में मदद करते हैं।",
      "Antivirus security software का उदाहरण है।"
    ],
    questions: [
      {
        question: "इनमें से कौन-सा System Software है?",
        options: ["MS Word document", "Operating System", "Photo", "Music file"],
        answer: 1,
        explanation: "Operating System system software है।"
      },
      {
        question: "इनमें से कौन-सा Hardware है?",
        options: ["Windows", "MS Excel", "Keyboard", "Antivirus program"],
        answer: 2,
        explanation: "Keyboard कंप्यूटर का physical component है।"
      }
    ]
  },

  "Operating System": {
    notes: [
      "Operating System (OS) hardware और software resources को manage करता है।",
      "OS process, memory, files और devices का management करता है।",
      "Windows, Linux, macOS और Android operating systems के उदाहरण हैं।",
      "GUI का पूरा नाम Graphical User Interface है।",
      "Multitasking में एक से अधिक tasks को manage किया जाता है।",
      "Application programs सामान्यतः OS की सेवाओं का उपयोग करते हैं।"
    ],
    questions: [
      {
        question: "इनमें से कौन-सा Operating System है?",
        options: ["Windows", "MS Word", "Google Chrome", "PowerPoint file"],
        answer: 0,
        explanation: "Windows एक Operating System है।"
      },
      {
        question: "GUI का पूरा नाम क्या है?",
        options: [
          "General User Internet",
          "Graphical User Interface",
          "Global Utility Input",
          "Graphic Universal Installation"
        ],
        answer: 1,
        explanation: "GUI = Graphical User Interface।"
      }
    ]
  },

  "Windows की मूल बातें": {
    notes: [
      "Desktop Windows का मुख्य workspace है।",
      "Taskbar में खुले applications और pinned icons दिखाई दे सकते हैं।",
      "File Explorer से files और folders को manage किया जाता है।",
      "Recycle Bin में हटाई गई कई files अस्थायी रूप से रखी जाती हैं, जब तक उन्हें permanently delete न किया जाए।",
      "Ctrl + C = Copy, Ctrl + X = Cut, Ctrl + V = Paste।",
      "Alt + Tab से खुले applications के बीच switch कर सकते हैं।"
    ],
    questions: [
      {
        question: "Windows में Copy की shortcut key कौन-सी है?",
        options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + Z"],
        answer: 2,
        explanation: "Ctrl + C चयनित item को copy करता है।"
      },
      {
        question: "Files और folders देखने के लिए Windows में कौन-सा tool उपयोग होता है?",
        options: ["File Explorer", "Calculator", "Paint only", "Taskbar"],
        answer: 0,
        explanation: "File Explorer files और folders को browse तथा manage करता है।"
      }
    ]
  },

  "MS Word": {
    notes: [
      "MS Word एक word processing application है।",
      "इसका उपयोग letters, reports और documents बनाने के लिए होता है।",
      "Ctrl + B = Bold, Ctrl + I = Italic, Ctrl + U = Underline।",
      "Ctrl + S = Save और Ctrl + P = Print।",
      "Spelling और grammar tools लिखे हुए text की जाँच में मदद करते हैं।",
      "Page layout में margins, orientation और paper size जैसी settings होती हैं।"
    ],
    questions: [
      {
        question: "MS Word में Bold की shortcut key क्या है?",
        options: ["Ctrl + B", "Ctrl + D", "Ctrl + E", "Ctrl + M"],
        answer: 0,
        explanation: "Ctrl + B चयनित text को Bold करता है।"
      },
      {
        question: "Document Save करने की shortcut key क्या है?",
        options: ["Ctrl + P", "Ctrl + S", "Ctrl + A", "Ctrl + X"],
        answer: 1,
        explanation: "Ctrl + S document को save करने के लिए उपयोग होता है।"
      }
    ]
  },

  "MS Excel": {
    notes: [
      "MS Excel एक spreadsheet application है।",
      "Workbook में एक या अधिक worksheets हो सकती हैं।",
      "Row क्षैतिज और Column ऊर्ध्वाधर होते हैं।",
      "Cell, row और column के intersection पर होता है; उदाहरण: A1।",
      "Formula सामान्यतः = चिन्ह से शुरू होता है।",
      "SUM function संख्याओं का योग निकालता है: =SUM(A1:A5)।",
      "AVERAGE function औसत निकालता है: =AVERAGE(A1:A5)।",
      "Excel का उपयोग हिसाब, बिक्री रिकॉर्ड, बजट और data analysis में किया जा सकता है।"
    ],
    questions: [
      {
        question: "Excel में formula किस चिन्ह से शुरू होता है?",
        options: ["#", "=", "@", "&"],
        answer: 1,
        explanation: "Excel में formula सामान्यतः = से शुरू होता है।"
      },
      {
        question: "A1 से A5 तक संख्याओं का योग निकालने का सही formula कौन-सा है?",
        options: [
          "=ADD(A1:A5)",
          "=SUM(A1:A5)",
          "=TOTAL(A1-A5)",
          "=PLUS(A1:A5)"
        ],
        answer: 1,
        explanation: "=SUM(A1:A5) चुनी गई cells की संख्याओं का योग निकालता है।"
      }
    ]
  },

  "कीबोर्ड शॉर्टकट": {
    notes: [
      "Ctrl + A = सभी items या text चुनना।",
      "Ctrl + C = Copy।",
      "Ctrl + X = Cut।",
      "Ctrl + V = Paste।",
      "Ctrl + Z = Undo।",
      "Ctrl + Y = Redo, कई applications में।",
      "Alt + Tab = खुले applications के बीच switch।",
      "F2 का उपयोग Windows File Explorer में चयनित file या folder का नाम बदलने के लिए किया जा सकता है।"
    ],
    questions: [
      {
        question: "Undo करने की सामान्य shortcut key कौन-सी है?",
        options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + R"],
        answer: 1,
        explanation: "Ctrl + Z पिछली कार्रवाई को Undo करता है।"
      },
      {
        question: "सभी text या items चुनने की shortcut key कौन-सी है?",
        options: ["Ctrl + A", "Ctrl + S", "Ctrl + F", "Ctrl + P"],
        answer: 0,
        explanation: "Ctrl + A का उपयोग Select All के लिए होता है।"
      }
    ]
  },

  "Internet की मूल बातें": {
    notes: [
      "Internet दुनिया भर में जुड़े networks का विशाल network है।",
      "Web (WWW) Internet पर उपलब्ध सेवाओं में से एक है।",
      "Web browser websites खोलने के लिए उपयोग होता है।",
      "Search engine Internet पर जानकारी खोजने में मदद करता है।",
      "URL किसी web resource का address होता है।",
      "HTTP और HTTPS web communication के लिए उपयोग होने वाले protocols हैं; HTTPS encrypted connection देता है।",
      "Download में data अपने device पर प्राप्त करते हैं; Upload में data किसी दूसरे system या service पर भेजते हैं।"
    ],
    questions: [
      {
        question: "Website खोलने के लिए किसका उपयोग किया जाता है?",
        options: ["Web Browser", "Calculator", "Compiler only", "Speaker"],
        answer: 0,
        explanation: "Chrome, Firefox और Edge web browsers के उदाहरण हैं।"
      },
      {
        question: "HTTPS में S सामान्यतः किस बात को दर्शाता है?",
        options: ["System", "Secure", "Search", "Server"],
        answer: 1,
        explanation: "HTTPS, HTTP का secure रूप है जो TLS encryption का उपयोग करता है।"
      }
    ]
  },

  "Computer Networks": {
    notes: [
      "Computer Network में दो या अधिक devices data या resources साझा करने के लिए जुड़े होते हैं।",
      "LAN का उपयोग सीमित क्षेत्र, जैसे घर या कार्यालय, में किया जाता है।",
      "WAN बड़े भौगोलिक क्षेत्र में फैला network हो सकता है।",
      "Router अलग-अलग networks के बीच data भेजने में मदद करता है।",
      "Switch सामान्यतः LAN में devices को जोड़ता है।",
      "Network का उपयोग file sharing, communication और shared resources के लिए होता है।"
    ],
    questions: [
      {
        question: "घर या छोटे कार्यालय में उपयोग होने वाला स्थानीय network सामान्यतः क्या कहलाता है?",
        options: ["LAN", "WAN", "MAN", "PANIC"],
        answer: 0,
        explanation: "LAN का पूरा नाम Local Area Network है।"
      },
      {
        question: "अलग-अलग networks के बीच data route करने वाला device कौन-सा है?",
        options: ["Keyboard", "Router", "Scanner", "Printer"],
        answer: 1,
        explanation: "Router networks के बीच packets को forward करता है।"
      }
    ]
  },

  "LAN, MAN और WAN": {
    notes: [
      "LAN = Local Area Network; छोटा क्षेत्र।",
      "MAN = Metropolitan Area Network; सामान्यतः शहर या महानगरीय क्षेत्र।",
      "WAN = Wide Area Network; बड़ा भौगोलिक क्षेत्र।",
      "Internet को अक्सर WAN का सबसे बड़ा उदाहरण बताया जाता है।",
      "Network के वास्तविक आकार और design के आधार पर सीमाएँ बदल सकती हैं।"
    ],
    questions: [
      {
        question: "MAN का पूरा नाम क्या है?",
        options: [
          "Main Access Network",
          "Metropolitan Area Network",
          "Machine Area Node",
          "Multiple Access Number"
        ],
        answer: 1,
        explanation: "MAN = Metropolitan Area Network।"
      },
      {
        question: "इनमें से किसका भौगोलिक विस्तार सामान्यतः सबसे बड़ा होता है?",
        options: ["LAN", "PAN", "WAN", "केवल एक computer"],
        answer: 2,
        explanation: "WAN बड़े भौगोलिक क्षेत्रों में फैला हो सकता है।"
      }
    ]
  },

  "TCP/IP और Protocols": {
    notes: [
      "Protocol devices के बीच communication के नियमों का समूह है।",
      "TCP = Transmission Control Protocol।",
      "IP = Internet Protocol।",
      "TCP data को भरोसेमंद तरीके से पहुँचाने के लिए connection और delivery mechanisms प्रदान करता है।",
      "IP addressing और packets को destination तक route करने से संबंधित है।",
      "HTTP/HTTPS web communication और SMTP email भेजने से संबंधित protocol के उदाहरण हैं।"
    ],
    questions: [
      {
        question: "TCP का पूरा नाम क्या है?",
        options: [
          "Transfer Computer Program",
          "Transmission Control Protocol",
          "Technical Connection Process",
          "Total Communication Port"
        ],
        answer: 1,
        explanation: "TCP = Transmission Control Protocol।"
      },
      {
        question: "IP मुख्य रूप से किससे संबंधित है?",
        options: [
          "केवल document formatting",
          "Addressing और packet routing",
          "Audio recording",
          "Image printing"
        ],
        answer: 1,
        explanation: "IP addressing और packets को networks में route करने से संबंधित है।"
      }
    ]
  },

  "IP और MAC Address": {
    notes: [
      "IP address network पर interface को address करने के लिए उपयोग होता है।",
      "IPv4 address 32-bit होता है; उदाहरण: 192.168.1.10।",
      "IPv6 address 128-bit होता है।",
      "MAC address सामान्यतः network interface से जुड़ा link-layer address होता है।",
      "IP address network configuration के अनुसार बदल सकता है; MAC address भी कुछ devices में बदला या spoof किया जा सकता है।",
      "IP और MAC address एक-दूसरे के समान नहीं हैं।"
    ],
    questions: [
      {
        question: "IPv4 address कितने bits का होता है?",
        options: ["16", "32", "64", "128"],
        answer: 1,
        explanation: "IPv4 address 32-bit होता है।"
      },
      {
        question: "IPv6 address कितने bits का होता है?",
        options: ["32", "48", "64", "128"],
        answer: 3,
        explanation: "IPv6 address 128-bit होता है।"
      }
    ]
  },

  "Cyber Security": {
    notes: [
      "Cyber Security systems, networks और data को digital threats से सुरक्षित रखने का अभ्यास है।",
      "मजबूत और अलग-अलग passwords का उपयोग करें।",
      "Two-factor authentication (2FA) account security बढ़ा सकता है।",
      "Phishing में धोखे से password या अन्य संवेदनशील जानकारी लेने की कोशिश की जाती है।",
      "Unknown links और attachments को सावधानी से खोलें।",
      "Software और operating system को update रखना महत्वपूर्ण है।",
      "महत्वपूर्ण files का backup रखें।"
    ],
    questions: [
      {
        question: "Phishing का मुख्य उद्देश्य सामान्यतः क्या होता है?",
        options: [
          "कंप्यूटर की screen साफ करना",
          "धोखे से जानकारी या credentials प्राप्त करना",
          "RAM बढ़ाना",
          "Printer install करना"
        ],
        answer: 1,
        explanation: "Phishing में नकली संदेश या websites से लोगों को धोखा देकर जानकारी लेने की कोशिश की जाती है।"
      },
      {
        question: "Account सुरक्षा बढ़ाने का अच्छा तरीका कौन-सा है?",
        options: [
          "हर जगह एक ही password",
          "Password सबको बताना",
          "2FA चालू करना",
          "Unknown attachments खोलना"
        ],
        answer: 2,
        explanation: "Two-factor authentication login के लिए अतिरिक्त verification जोड़ता है।"
      }
    ]
  },

  "Virus और Malware": {
    notes: [
      "Malware हानिकारक software के लिए सामान्य शब्द है।",
      "Computer virus किसी file या program से जुड़कर फैल सकता है।",
      "Worm स्वयं फैलने की क्षमता रखने वाला malware हो सकता है।",
      "Trojan उपयोगी software जैसा दिखकर धोखा दे सकता है।",
      "Ransomware data को lock या encrypt करके फिरौती माँग सकता है।",
      "संदिग्ध downloads से बचें और trusted security tools व updates का उपयोग करें।"
    ],
    questions: [
      {
        question: "Ransomware सामान्यतः क्या करने की कोशिश करता है?",
        options: [
          "Data को lock या encrypt करके फिरौती माँगना",
          "Screen brightness बढ़ाना","Keyboard साफ करना",
          "Monitor की resolution बदलना"
        ],
        answer: 0,
        explanation: "Ransomware files या systems को lock/encrypt करके फिरौती माँग सकता है।"
      },
      {
        question: "Malware से बचने का उचित तरीका कौन-सा है?",
        options: [
          "हर unknown file चलाना",
          "सभी security updates बंद करना",
          "संदिग्ध attachments खोलना",
          "Software update और सावधानी से download करना"
        ],
        answer: 3,
        explanation: "Updates और trusted sources से downloads सुरक्षा जोखिम कम करने में मदद करते हैं।"
      }
    ]}
};

const computerSubjectUpgrade1 = STUDY_DATA.find(
  subject => subject.id === "computer"
);

if (computerSubjectUpgrade1) {
  computerSubjectUpgrade1.chapters.forEach(chapter => {
    const upgrade = COMPUTER_UPGRADE_1[chapter.title];

    if (upgrade) {
      chapter.notes = upgrade.notes;
      chapter.questions = upgrade.questions;
    }
  });
}
/* 4nizz Study Hub - Missing Reasoning Chapters */

const REASONING_UPGRADE_2 = {
  "वर्णमाला परीक्षण": {
    notes: [
      "अंग्रेजी वर्णमाला में A = 1 से Z = 26 तक स्थान मान होते हैं।",
      "उल्टे क्रम में A = 26, B = 25 और Z = 1 माना जा सकता है।",
      "किसी अक्षर का स्थान निकालने के लिए उसके पहले और बाद के अक्षर गिनें।",
      "विपरीत अक्षरों के स्थानों का योग 27 होता है, जैसे A-Z और B-Y।"
    ],
    questions: [
      {
        question: "अंग्रेजी वर्णमाला में M का स्थान क्या है?",
        options: ["11", "12", "13", "14"],
        answer: 2,
        explanation: "M अंग्रेजी वर्णमाला का 13वाँ अक्षर है।"
      },
      {
        question: "अंग्रेजी वर्णमाला में C के विपरीत अक्षर कौन-सा है?",
        options: ["W", "X", "Y", "Z"],
        answer: 2,
        explanation: "C तीसरा अक्षर है। उल्टे क्रम में तीसरा अक्षर X नहीं, बल्कि X से गिनती समझना जरूरी है: Z=1, Y=2, X=3। इसलिए सही उत्तर X है।"
      }
    ]
  },

  "गणितीय संक्रियाएँ": {
    notes: [
      "इन प्रश्नों में +, −, × और ÷ जैसे चिह्नों के अर्थ बदले जा सकते हैं।",
      "पहले प्रश्न में दिए गए नए अर्थ पहचानें, फिर उसी नियम से गणना करें।",
      "जहाँ कोई बदलाव नहीं बताया गया है, सामान्य गणितीय नियम लागू होते हैं।"
    ],
    questions: [
      {
        question: "यदि + का अर्थ × और × का अर्थ + है, तो 3 + 4 × 2 का मान क्या होगा?",
        options: ["10", "12", "14", "20"],
        answer: 2,
        explanation: "+ का अर्थ × और × का अर्थ + है। इसलिए 3 × 4 + 2 = 14।"
      },
      {
        question: "यदि − का अर्थ + है, तो 12 − 5 का मान क्या होगा?",
        options: ["5", "7", "12", "17"],
        answer: 3,
        explanation: "− के स्थान पर + लगाने पर 12 + 5 = 17।"
      }
    ]
  },

  "कैलेंडर": {
    notes: [
      "सामान्य वर्ष में 365 दिन और लीप वर्ष में 366 दिन होते हैं।",
      "सामान्य वर्ष में 52 सप्ताह और 1 अतिरिक्त दिन होता है।",
      "लीप वर्ष में 52 सप्ताह और 2 अतिरिक्त दिन होते हैं।",
      "सामान्यतः 4 से विभाजित होने वाला वर्ष लीप वर्ष होता है।",
      "शताब्दी वर्ष लीप वर्ष तभी होता है जब वह 400 से विभाजित हो।",
      "किसी तारीख का वार निकालने के लिए दिनों का अंतर 7 से भाग देकर शेष देखें।"
    ],
    questions: [
      {
        question: "सामान्य वर्ष में कितने दिन होते हैं?",
        options: ["364", "365", "366", "367"],
        answer: 1,
        explanation: "सामान्य वर्ष में 365 दिन होते हैं।"
      },
      {
        question: "इनमें से कौन-सा वर्ष लीप वर्ष है?",
        options: ["1900", "2000", "2100", "2200"],
        answer: 1,
        explanation: "शताब्दी वर्ष को लीप वर्ष होने के लिए 400 से विभाजित होना चाहिए। 2000, 400 से विभाजित होता है।"
      }
    ]
  },

  "घड़ी": {
    notes: [
      "घड़ी के घंटे वाले और मिनट वाले काँटे की चाल अलग होती है।",
      "मिनट वाला काँटा 60 मिनट में 360° घूमता है, यानी 6° प्रति मिनट।",
      "घंटे वाला काँटा 60 मिनट में 30° घूमता है, यानी 0.5° प्रति मिनट।",
      "दोनों काँटों के बीच कोण निकालने का सूत्र: |30H − 5.5M|।",
      "यदि प्राप्त कोण 180° से बड़ा हो, तो छोटा कोण = 360° − प्राप्त कोण।"
    ],
    questions: [
      {
        question: "ठीक 3 बजे घड़ी के दोनों काँटों के बीच छोटा कोण कितना होगा?",
        options: ["45°", "60°", "90°", "180°"],
        answer: 2,
        explanation: "3 बजे मिनट का काँटा 12 पर और घंटे का काँटा 3 पर होता है। कोण 90° है।"
      },
      {
        question: "ठीक 6 बजे दोनों काँटों के बीच कोण कितना होगा?",
        options: ["90°", "120°", "180°", "360°"],
        answer: 2,
        explanation: "6 बजे काँटे विपरीत दिशाओं में होते हैं, इसलिए कोण 180° है।"
      }
    ]
  },

  "Venn Diagram": {
    notes: [
      "Venn Diagram समूहों और उनके आपसी संबंधों को वृत्तों के माध्यम से दिखाता है।",
      "एक समूह दूसरे का हिस्सा हो तो उसका वृत्त दूसरे वृत्त के अंदर दिखाया जा सकता है।",
      "कुछ सदस्य दो समूहों में हों तो वृत्त एक-दूसरे को काट सकते हैं।",
      "ऐसे प्रश्नों में सभी, कुछ और कोई नहीं जैसे शब्दों पर ध्यान दें।"
    ],
    questions: [
      {
        question: "गुलाब, फूल और पौधे के सही संबंध को कौन-सा विकल्प दर्शाता है?",
        options: [
          "सभी अलग-अलग समूह हैं",
          "गुलाब, फूल का हिस्सा हैं और फूल, पौधों का हिस्सा हैं",
          "सभी गुलाब पौधों से अलग हैं",
          "सभी पौधे गुलाब हैं"
        ],
        answer: 1,
        explanation: "गुलाब फूल हैं और फूल पौधों का एक समूह हैं।"
      },
      {
        question: "कुछ विद्यार्थी खिलाड़ी हैं। कौन-सा संबंध सही है?",
        options: [
          "विद्यार्थी और खिलाड़ी समूहों में कुछ समान सदस्य हो सकते हैं",
          "सभी विद्यार्थी खिलाड़ी हैं",
          "कोई विद्यार्थी खिलाड़ी नहीं है",
          "सभी खिलाड़ी शिक्षक हैं"
        ],
        answer: 0,
        explanation: "'कुछ' का अर्थ है कि दोनों समूहों में कुछ समान सदस्य हैं; सभी के बारे में निष्कर्ष नहीं निकलता।"
      }
    ]
  },

  "कथन और निष्कर्ष": {
    notes: [
      "निष्कर्ष केवल दिए गए कथनों के आधार पर निकालना चाहिए।",
      "अपनी सामान्य जानकारी को कथन के ऊपर लागू न करें।",
      "यदि निष्कर्ष कथनों से निश्चित रूप से निकलता है, तभी उसे सही मानें।",
      "कुछ, सभी और कोई नहीं जैसे शब्द निष्कर्ष बदल सकते हैं।"
    ],
    questions: [
      {
        question: "कथन: सभी पेन स्टेशनरी हैं। सभी स्टेशनरी उपयोगी वस्तुएँ हैं। निष्कर्ष: सभी पेन उपयोगी वस्तुएँ हैं।",
        options: [
          "निष्कर्ष निकलता है",
          "निष्कर्ष नहीं निकलता",
          "कथन गलत हैं",
          "निष्कर्ष कथन के विपरीत है"
        ],
        answer: 0,
        explanation: "सभी पेन स्टेशनरी हैं और सभी स्टेशनरी उपयोगी वस्तुएँ हैं, इसलिए सभी पेन उपयोगी वस्तुएँ हैं।"
      },
      {
        question: "कथन: कुछ किताबें नई हैं। निष्कर्ष: सभी किताबें नई हैं।",
        options: [
          "निष्कर्ष निश्चित रूप से सही है",
          "निष्कर्ष निश्चित रूप से गलत है",
          "निष्कर्ष नहीं निकलता",
          "सभी किताबें पुरानी हैं"
        ],
        answer: 2,
        explanation: "कुछ किताबों के नई होने से सभी किताबों के नई होने का निष्कर्ष नहीं निकलता।"
      }
    ]
  },

  "कथन और मान्यता": {
    notes: [
      "मान्यता वह बात है जिसे कथन के पीछे पहले से सत्य मानकर चला गया हो।",
      "कथन को ध्यान से पढ़कर देखें कि कौन-सी बात उसके अर्थ के लिए आवश्यक है।",
      "ऐसी बात को मान्यता न मानें जिसका कथन से कोई संबंध नहीं है।",
      "परीक्षा में विकल्पों के शब्दों को ध्यान से पढ़ना जरूरी है।"
    ],
    questions: [
      {
        question: "कथन: 'बस से यात्रा करें, समय बचाएँ।' इसमें कौन-सी मान्यता निहित है?",
        options: [
          "बस से यात्रा करने पर कुछ परिस्थितियों में समय बच सकता है",
          "सभी बसें हमेशा खाली रहती हैं",
          "हर व्यक्ति के पास बस है",
          "बस कभी देर से नहीं आती"
        ],
        answer: 0,
        explanation: "विज्ञापन यह मानकर चलता है कि बस से यात्रा करने पर समय बच सकता है। बाकी विकल्प अत्यधिक व्यापक दावे हैं।"
      },
      {
        question: "कथन: 'परीक्षा की तैयारी के लिए रोज अभ्यास करें।' इसमें कौन-सी मान्यता सबसे उपयुक्त है?",
        options: [
          "अभ्यास से तैयारी बेहतर हो सकती है",
          "कोई भी परीक्षा नहीं होती",
          "अभ्यास से हमेशा पूरे अंक मिलते हैं",
          "किताबें पढ़ना बेकार है"
        ],
        answer: 0,
        explanation: "सलाह का आधार यह है कि नियमित अभ्यास तैयारी में मदद कर सकता है।"
      }
    ]
  },

  "बैठने की व्यवस्था": {
    notes: [
      "सबसे पहले सभी व्यक्तियों और उनकी स्थितियों की सूची बनाओ।",
      "सीधी पंक्ति में सभी उत्तर की ओर देख रहे हों तो बायाँ और दायाँ सामान्य दिशा के अनुसार होगा।",
      "वृत्ताकार व्यवस्था में केंद्र की ओर मुँह होने पर बायाँ-दायाँ समझने के लिए व्यक्ति की दिशा ध्यान में रखें।",
      "निश्चित जानकारी पहले लगाएँ और फिर शेष स्थान भरें।",
      "यदि कई संभावनाएँ हों, तो हर शर्त से जाँच करें।"
    ],
    questions: [
      {
        question: "A, B के बाएँ बैठा है। दोनों उत्तर की ओर देख रहे हैं। B के ठीक बाएँ कौन बैठा है?",
        options: ["A", "B", "निर्धारित नहीं किया जा सकता", "दोनों"],
        answer: 0,
        explanation: "A, B के बाएँ बैठा है, इसलिए दिए गए संबंध के अनुसार B के ठीक बाएँ A है।"
      },
      {
        question: "चार व्यक्ति P, Q, R, S एक पंक्ति में हैं। Q, P के दाएँ है। केवल इस जानकारी से सबसे दाएँ व्यक्ति का पता चलता है?",
        options: ["P", "Q", "R", "निर्धारित नहीं किया जा सकता"],
        answer: 3,
        explanation: "बाकी व्यक्तियों की स्थितियाँ नहीं दी गई हैं, इसलिए सबसे दाएँ व्यक्ति को निश्चित नहीं किया जा सकता।"
      }
    ]
  },

  "तार्किक पहेलियाँ": {
    notes: [
      "पहेली में दी गई सभी शर्तें अलग-अलग लिखें।",
      "तालिका बनाकर व्यक्तियों, स्थानों या वस्तुओं के संबंध व्यवस्थित करें।",
      "एक समय में एक शर्त लागू करें और विरोधाभास वाले विकल्प हटा दें।",
      "जो जानकारी नहीं दी गई है, उसे अपने अनुमान से सत्य न मानें।"
    ],
    questions: [
      {
        question: "तीन डिब्बों में से एक में पुरस्कार है। लाल डिब्बे में पुरस्कार नहीं है। नीले डिब्बे में पुरस्कार है। पुरस्कार किस डिब्बे में है?",
        options: ["लाल", "नीला", "तीसरा डिब्बा", "निर्धारित नहीं"],
        answer: 1,
        explanation: "कथन स्पष्ट रूप से बताता है कि नीले डिब्बे में पुरस्कार है।"
      },
      {
        question: "A, B से लंबा है और B, C से लंबा है। सबसे छोटा कौन है?",
        options: ["A", "B", "C", "निर्धारित नहीं"],
        answer: 2,
        explanation: "A > B और B > C, इसलिए C सबसे छोटा है।"
      }
    ]
  },

  "पासा": {
    notes: [
      "पासे के प्रश्नों में दिखने वाले अंकों और उनकी स्थितियों का ध्यान रखें।",
      "सामान्य मानक पासे में विपरीत फलकों पर अंकों का योग 7 होता है, लेकिन हर प्रश्न में यह नियम मानना उचित नहीं जब तक मानक पासा बताया न गया हो।",
      "दो अलग-अलग स्थितियों में एक ही फलक के साथ दिखने वाले अन्य फलकों की तुलना करके संबंध निकाला जा सकता है।",
      "दिए गए चित्र या स्थिति में जो जानकारी उपलब्ध है, उसी का उपयोग करें।"
    ],
    questions: [
      {
        question: "एक मानक पासे में 2 के विपरीत कौन-सा अंक होगा?",
        options: ["3", "4", "5", "6"],
        answer: 2,
        explanation: "मानक पासे के विपरीत फलकों का योग 7 होता है। 7 − 2 = 5।"
      },
      {
        question: "एक मानक पासे में 1 के विपरीत कौन-सा अंक होगा?",
        options: ["2", "3", "5", "6"],
        answer: 3,
        explanation: "विपरीत फलकों का योग 7 है। 7 − 1 = 6।"
      }
    ]
  },

  "घन और पासा": {
    notes: [
      "घन में 6 फलक, 12 किनारे और 8 शीर्ष होते हैं।",
      "यदि बड़े घन के सभी बाहरी फलक रंगकर उसे बराबर छोटे घनों में काटा जाए, तो कोनों के छोटे घनों पर 3 फलक रंगे होते हैं।",
      "बड़े घन के किनारे के बीच वाले छोटे घनों पर 2 फलक रंगे हो सकते हैं।",
      "बड़े घन के फलक के बीच में स्थित छोटे घनों पर 1 फलक रंगा होता है।",
      "अंदर के छोटे घनों पर कोई फलक रंगा नहीं होता।"
    ],
    questions: [
      {
        question: "एक घन में कितने फलक होते हैं?",
        options: ["4", "6", "8", "12"],
        answer: 1,
        explanation: "घन में 6 फलक होते हैं।"
      },
      {
        question: "एक बड़े घन के सभी फलक रंगे गए और उसे 3 × 3 × 3 बराबर छोटे घनों में काटा गया। कितने छोटे घनों के 3 फलक रंगे होंगे?",
        options: ["4", "6", "8", "12"],
        answer: 2,
        explanation: "तीन रंगे फलक वाले छोटे घन बड़े घन के 8 कोनों पर होते हैं।"
      }
    ]
  },

  "दर्पण प्रतिबिंब": {
    notes: [
      "दर्पण प्रतिबिंब के सामान्य प्रश्नों में बाएँ और दाएँ का उलटाव देखा जाता है।",
      "ऊर्ध्वाधर दर्पण में आकृति का बायाँ भाग दाएँ और दायाँ भाग बाएँ दिखाई देता है।",
      "ऊपर और नीचे की दिशा सामान्यतः ऊर्ध्वाधर दर्पण में नहीं बदलती।",
      "अक्षरों और अंकों के प्रश्नों में उनकी आकृति तथा स्थान दोनों पर ध्यान दें।"
    ],
    questions: [
      {
        question: "ऊर्ध्वाधर दर्पण में सामान्यतः कौन-सा परिवर्तन होता है?",
        options: [
          "बाएँ-दाएँ का उलटाव",
          "ऊपर-नीचे का उलटाव",
          "रंग हमेशा बदल जाते हैं",
          "आकार हमेशा दोगुना हो जाता है"
        ],
        answer: 0,
        explanation: "ऊर्ध्वाधर दर्पण में पार्श्व उलटाव दिखाई देता है।"
      },
      {
        question: "यदि किसी आकृति में तीर बाईं ओर है, तो उसके ऊर्ध्वाधर दर्पण प्रतिबिंब में तीर किस ओर होगा?",
        options: ["बाईं ओर", "दाईं ओर", "ऊपर", "नीचे"],
        answer: 1,
        explanation: "ऊर्ध्वाधर दर्पण में बाएँ और दाएँ उलट जाते हैं।"
      }
    ]
  },

  "जल प्रतिबिंब": {
    notes: [
      "जल प्रतिबिंब के सामान्य प्रश्नों में आकृति का ऊपर-नीचे उलटाव देखा जाता है।",
      "क्षैतिज सतह पर प्रतिबिंब में ऊपर का भाग नीचे और नीचे का भाग ऊपर दिखाई देता है।",
      "बाएँ और दाएँ की दिशा सामान्यतः जल प्रतिबिंब में नहीं बदलती।",
      "आकृति के स्थान और अक्षरों की दिशा पर ध्यान दें।"
    ],
    questions: [
      {
        question: "जल प्रतिबिंब में सामान्यतः कौन-सा उलटाव होता है?",
        options: [
          "केवल बाएँ-दाएँ",
          "ऊपर-नीचे",
          "आकार हमेशा दोगुना",
          "रंग हमेशा बदलना"
        ],
        answer: 1,
        explanation: "जल प्रतिबिंब में ऊपर और नीचे की दिशा उलटती है।"
      },
      {
        question: "यदि किसी आकृति का ऊपरी भाग लाल और निचला भाग नीला है, तो जल प्रतिबिंब में कौन-सा भाग ऊपर दिखाई देगा?",
        options: ["लाल", "नीला", "दोनों गायब", "निर्धारित नहीं"],
        answer: 1,
        explanation: "ऊपर-नीचे उलटाव के कारण मूल आकृति का निचला नीला भाग प्रतिबिंब में ऊपर आएगा।"
      }
    ]
  },

  "कागज मोड़ना": {
    notes: [
      "कागज मोड़ने वाले प्रश्नों में मोड़ की दिशा और छेद या कट की स्थिति समझें।",
      "कागज खोलने पर मोड़ के आर-पार छेदों के प्रतिबिंब बन सकते हैं।",
      "हर मोड़ के बाद छेदों की संख्या और स्थिति पर ध्यान दें।",
      "यदि कागज दो बार मोड़ा गया है, तो खोलते समय दोनों मोड़ों का उलटा क्रम समझें।"
    ],
    questions: [
      {
        question: "कागज को एक बार बीच से मोड़कर एक छेद किया गया। कागज खोलने पर सामान्यतः कितने छेद दिखेंगे, यदि छेद मोड़ की रेखा पर नहीं है?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "एक बार मोड़े हुए कागज में एक छेद खोलने पर सामान्यतः दो सममित छेद दिखाई देंगे।"
      },
      {
        question: "कागज को दो बार आधा-आधा मोड़ा जाता है। एक छेद सभी परतों से गुजरता है। कागज खोलने पर सामान्यतः कितने छेद होंगे?",
        options: ["2", "3", "4", "8"],
        answer: 2,
        explanation: "दो बार आधा मोड़ने पर चार परतें बन सकती हैं। सभी परतों से छेद होने पर सामान्यतः चार छेद दिखाई देंगे।"
      }
    ]
  },

  "आकृति पूर्ण करना": {
    notes: [
      "अधूरी आकृति में रेखाओं, कोणों और पैटर्न को देखकर गायब हिस्सा पहचानें।",
      "देखें कि रेखाएँ कहाँ जुड़ती हैं और आकृति सममित है या नहीं।",
      "विकल्पों में ऐसा हिस्सा चुनें जो आकृति की दिशा और रेखाओं को सही तरह पूरा करे।",
      "चित्र-आधारित प्रश्न में आकृति का वास्तविक चित्र देखना आवश्यक होता है।"
    ],
    questions: [
      {
        question: "किसी सममित आकृति का बायाँ आधा भाग दिया है। उसे पूरा करने के लिए सामान्यतः क्या करना होगा?",
        options: [
          "दाएँ भाग में उसका दर्पण-समान हिस्सा बनाना",
          "बाएँ भाग मिटा देना",
          "सभी रेखाएँ हटाना",
          "आकृति को हमेशा घुमाना"
        ],
        answer: 0,
        explanation: "सममित आकृति को पूरा करने के लिए दूसरी ओर समान दर्पण-सदृश हिस्सा बनाया जाता है।"
      },
      {
        question: "आकृति पूर्ण करने के प्रश्न में सबसे पहले क्या देखना चाहिए?",
        options: [
          "रेखाओं और पैटर्न का संबंध",
          "विकल्प का रंग ही",
          "प्रश्न संख्या",
          "कागज का आकार"
        ],
        answer: 0,
        explanation: "रेखाओं और पैटर्न के संबंध से गायब हिस्से का पता लगाया जाता है।"
      }
    ]
  },

  "छिपी हुई आकृति": {
    notes: [
      "छिपी हुई आकृति के प्रश्नों में बड़ी या जटिल आकृति के अंदर दी गई छोटी आकृति खोजनी होती है।",
      "छोटी आकृति को घुमाया जा सकता है या उसकी दिशा बदली हो सकती है, प्रश्न के निर्देश देखें।",
      "आकृति की मूल रेखाओं, कोणों और उनके जुड़ाव को ध्यान से देखें।",
      "बाहरी रेखाओं से भ्रमित होने के बजाय छोटी आकृति की सभी आवश्यक भुजाएँ खोजें।"
    ],
    questions: [
      {
        question: "छिपी हुई आकृति के प्रश्न में सही विकल्प चुनने का सबसे अच्छा तरीका क्या है?",
        options: [
          "छोटी आकृति की सभी रेखाओं और कोणों को बड़ी आकृति में ढूँढ़ना",
          "केवल सबसे बड़ा विकल्प चुनना",
          "हमेशा पहला विकल्प चुनना",
          "केवल रंग देखना"
        ],
        answer: 0,
        explanation: "छोटी आकृति की रेखाओं और कोणों का मेल खोजने से सही विकल्प मिलता है।"
      },
      {
        question: "यदि छोटी आकृति बड़ी आकृति में घुमी हुई दिखाई दे, तो क्या करना चाहिए?",
        options: [
          "उसे केवल सीधी दिशा में ही खोजें",
          "निर्देशों के अनुसार अलग-अलग दिशाओं में भी जाँचें",
          "प्रश्न छोड़ दें",
          "हर विकल्प सही मानें"
        ],
        answer: 1,
        explanation: "ऐसे प्रश्नों में आकृति घुमी हुई हो सकती है, यदि प्रश्न के नियम इसकी अनुमति देते हों।"
      }
    ]
  },

  "Non-verbal Reasoning": {
    notes: [
      "Non-verbal Reasoning में चित्रों, आकृतियों और दृश्य पैटर्न के आधार पर तर्क किया जाता है।",
      "श्रृंखला में आकृति की दिशा, आकार, संख्या और स्थान का बदलाव देखें।",
      "चित्रों के बीच घुमाव, प्रतिबिंब या भागों की संख्या का नियम हो सकता है।",
      "प्रश्न में दिए गए चित्रों के क्रम को ध्यान से देखें और उसी नियम को आगे लागू करें।"
    ],
    questions: [
      {
        question: "चित्र-श्रृंखला में हर आकृति 90° clockwise घूम रही है। अगली आकृति के लिए क्या करना चाहिए?",
        options: [
          "90° clockwise घुमाना",
          "90° anticlockwise घुमाना",
          "हमेशा रंग बदलना",
          "आकृति मिटा देना"
        ],
        answer: 0,
        explanation: "दिए गए नियम के अनुसार अगली आकृति को 90° clockwise घुमाना होगा।"
      },
      {
        question: "चित्र-श्रृंखला में हर बार एक नया बिंदु जुड़ रहा है। पहली आकृति में 1 बिंदु और दूसरी में 2 बिंदु हैं। तीसरी में कितने बिंदु होने चाहिए?",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "हर बार एक बिंदु बढ़ रहा है, इसलिए तीसरी आकृति में 3 बिंदु होंगे।"
      }
    ]
  }
};

const reasoningSubjectUpgrade2 = STUDY_DATA.find(
  subject => subject.id === "reasoning"
);

if (reasoningSubjectUpgrade2) {
  reasoningSubjectUpgrade2.chapters.forEach(chapter => {
    const upgrade = REASONING_UPGRADE_2[chapter.title];

    if (upgrade) {
      chapter.notes = upgrade.notes;
      chapter.questions = upgrade.questions;
    }
  });
}const alphabetChapterFix = STUDY_DATA
  .find(subject => subject.id === "reasoning")
  ?.chapters.find(chapter => chapter.title === "वर्णमाला परीक्षण");

if (alphabetChapterFix && alphabetChapterFix.questions[1]) {
  alphabetChapterFix.questions[1].answer = 1;
}