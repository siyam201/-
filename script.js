
// script.js
    // 100 ধাঁধার প্রশ্ন এবং তাদের সঠিক উত্তর
    const riddles =[
        { question: "কোন জিনিস যা ছোট, গোলাকার এবং লাল রঙের?", answer: "টমেটো" },
        { question: "কোন জিনিস অনেক হাঁটে কিন্তু কখনো এক জায়গা থেকে চলে না?", answer: "ঘড়ি" },
        { question: "যে জিনিসে অনেক পাতা থাকে, কিন্তু তা কখনো গাছ হয় না?", answer: "বই" },
        { question: "যে জিনিসটি আপনি যদি তা ভুলে যান, তবে সব কিছু ভুলে যাবেন?", answer: "মেমরি" },
        { question: "কোন পাখি আকাশে উড়লেও একটাও পাখনা নেই?", answer: "ঘড়ি" },
        { question: "কোনো শব্দ ছাড়া সবাই শুনতে পারে, কিন্তু কেউ বলতে পারে না?", answer: "চোখের পানি" },
        { question: "যে জিনিস খাওয়ার পর কিছুই বাঁচে না?", answer: "চামচ" },
        { question: "এটা কি, যা আপনার পকেটে থাকে, কিন্তু কোন সময়ই আপনি দেখতে পান না?", answer: "জীবন" },
        { question: "এটি কখনো থামে না, কিন্তু ঘূর্ণায়মান থাকে?", answer: "ঘড়ি" },
        { question: "কোন জিনিস যে যত বড় হয় তত ছোট হয়?", answer: "গর্ত" },
        { question: "কোনো জিনিস যদি আপনি তা পান, আপনি কখনো হারান না?", answer: "নাম" },
        { question: "কোন জিনিস নষ্ট হয়ে যায় যখন আপনি সেটা ঠিক করেন?", answer: "ডোর" },
        { question: "কোনো জিনিস যা গন্ধ নেই কিন্তু সব সময় কাঁদায়?", answer: "অন্ধকার" },
        { question: "কোন জিনিস যদি আপনি কেটে ফেলেন তবে তা আরো বড় হয়?", answer: "রাস্তায় গাছ" },
        { question: "কোন জিনিস সবসময় পড়াশোনা করতে সাহায্য করে?", answer: "বই" },
        { question: "যে জিনিসকে এক হাত দিয়ে ধরে রাখা যায় কিন্তু ব্যবহার করতে দুই হাতে লাগে?", answer: "চশমা" },
        { question: "কোনো জিনিস যে কখনো হারানো যায় না কিন্তু এটি যদি জব্দ করা হয়, তা অমূল্য হয়ে যায়?", answer: "সময়সীমা" },
        { question: "যে বস্তু ঘরের বাইরে নিয়ে গেলেও সেটি কখনোই বাইরে যাবে না?", answer: "ছায়া" },
        { question: "যে জিনিস আসলেই আপনার হাতে থাকে, কিন্তু আপনি যদি তা না দেখেন, আপনি হারাবেন?", answer: "সময়" },
        { question: "কোনো জিনিস যে আকাশে উড়তে পারে তবে তা কখনোই ভারী হয়ে থাকে না?", answer: "বদল" },
        { question: "কোনও নির্দিষ্ট কিছু যেটি দেখে আপনি কখনই ধারণা করতে পারবেন না?", answer: "চিন্তা" },
        { question: "এটি হলো সঠিক উত্তর যখন কিছু হারিয়ে যায়, কিন্তু সব সময় পাওয়ার জন্য কঠিন হয়?", answer: "ভালোবাসা" },
        { question: "আপনি যদি একটি শূন্য পাত্রে কিছু রাখেন, কিন্তু সেটা সব সময় খালি থাকে?", answer: "তল" },
        { question: "যে বস্তু কখনোই টানা টানা যায়, তা যেকোনো স্থানে চলে যায়?", answer: "বাতাস" },
        { question: "কোনো বস্তু যা আগে কখনো ছিল না, কিন্তু বর্তমানে দেখা যায়?", answer: "অবশ্যই সময়" },
        { question: "কোন বস্তু যেটি যখন শেষ হয়, সেটি পৃথিবীও শেষ হয়?", answer: "আলো" },
        { question: "তিনটি স্বর্ণপত্র যখন পানিতে ফেলে দেওয়া হয়, তবে যেখানেই পানির গভীরতা বৃদ্ধি হয়, ওই দুটি কী ঘটে?", answer: "তলেতে অবলুপ্ত হয়ে যায়" },
        { question: "কোনো বস্তু যা জন্ম নেয়, কিন্তু মরে না?", answer: "উজ্জ্বলতা" },
        { question: "যে জিনিস ঘুরতে থাকে কিন্তু কখনো চলতে থাকে না?", answer: "চাকা" },
        { question: "আপনি যদি আপনার পকেটের মধ্যে এটি রাখেন, আপনি জানেন না এটি কখনো তা কিনা?", answer: "অচেনা মুদ্রা" },
        { question: "এটা কিভাবে ঘটবে, যদি জানো আপনি যখন খেলা থামান?", answer: "গেমিং" },
        { question: "এটা কখনো আসবে, কিন্তু আপনি যদি বুঝতে না পারেন তবে তা কখনোই সেটি যায় না?", answer: "সময়" },
        { question: "অবশেষে এটা আসবে, কিন্তু কিছুই কি মসৃণ হবে?", answer: "যুদ্ধ" },
        { question: "মাটিতে কী আছে, কিন্তু আকাশে কি নেই?", answer: "অক্ষাংশ" },
        { question: "কোনো ব্যক্তি, পৃথিবী চলা দেখতে পারেন, তবে তা কখনো জানবেন না?", answer: "অন্ধ" },
        { question: "একটি পতাকা কেনো সব সময় একটি রূপান্তর হতে সক্ষম?", answer: "গণতন্ত্র" },
        { question: "এটা মাখানো, কিন্তু খেতে মিষ্টি?", answer: "খেজুর" },
        { question: "যে বস্তু কখনো অদৃশ্য হয়ে যাবে?", answer: "অন্ধকার" },
        { question: "এটি কি সময়ে আসে, যখন সময় চলে যায়?", answer: "ঐতিহাসিক চিন্তা" },
        { question: "একটি আকাশ এবং একটি নদী আছে যা শেষ হয় না?", answer: "ঘর" },
        { question: "এটা কী বস্তু যা বেশি জানায়, কিন্তু খুব কমই ব্যবহার করা হয়?", answer: "গাড়ি" },
        { question: "একটি মন্ত্রণা এবং কোনো পোশাক ছাড়া, কোন জিনিসকে তো আপনি তার থেকে ধরি না?", answer: "গোলাপ" },
        { question: "গাছটি টানা যায়, কিন্তু শেষ হলে কি হাওয়াটি বৃদ্ধি পায়?", answer: "কয়েকটি বনভূমি" },
        { question: "এর ভিতরে কিছু নেই তবে তল ঘরটি কম্পিত থাকে?", answer: "ঝিনুক" },
        { question: "যে বিশেষ বস্তু যা ছড়িয়ে পরে না, কিন্তু আঘাতের প্রভাবে ফেরত আসে?", answer: "ধৈর্য" },
        { question: "এটা কি, গাছের শাখার অন্তর্ভুক্ত?", answer: "গাছের সারা" },
        { question: "এটা কি, যে দানকারী কখনোই সহজে ছেড়ে যেতে পারে?", answer: "হ্যাঁ" },
        { question: "একটি ডিভাইস যার মধ্যে আলো থাকে এবং স্ট্যাটাস বেড়ে থাকে?", answer: "ফ্ল্যাশ লাইট" },
        { question: "একটি বার্ধক্য যাকে তোমরা মান্য করি?", answer: "প্রাচীন জীবন" },
        { question: "এটা কি, কেউ জানবে না, কিন্তু সবাই পরিসীমা নিশ্চয়ই জানবেন?", answer: "যাত্রা" },
        { question: "একটি ফেলে দেয়া অক্ষরের তুলনা?", answer: "সংঘাত" },
        { question: "এই পথগুলিতে যদি জমাটি হয়?", answer: "ভুল জায়গা" },
        { question: "এটা কি আসলেই, নির্দিষ্ট তথ্য দিয়ে কিছু পাওয়া?", answer: "আবশ্যকতা" },
        { question: "এটি জানার পরও আপনার কাছে কিছু নেই?", answer: "পৃথিবী" },
        { question: "এটি জানবে কেন, একে কিছু ভুলে যেতে হবে?", answer: "আধুনিক যুগ" },
        { question: "এটা কি, পৃথিবী শান্তভাবে পৃষ্ঠতল তৈরি করতে?", answer: "অস্থিরতার হার" },
        { question: "একটি পতাকা কে সোজা থাকতে চান", answer: "হিল্টি" },
        { question: "একটি স্বপ্ন যা খুলে দেয় আলো?" , answer: "দৃশ্যীকরণ" },
        { question: "একটি বস্তু যাকী শুধু লোকেদের জন্য?" , answer: "গান" },
        { question: "একটি প্রভাব যাকে দেখা সম্ভব?", answer: "বৈজ্ঞানিক জ্ঞান" },
        { question: "এটি কি পরিবর্তনের জন্য দায়ী?", answer: "বিশ্বদর্শন" },
        { question: "এটা আকাশের মেঘ নয়, তবে যা বিস্তার ঘটাতে সহায়ক?", answer: "বিজ্ঞান" },
        { question: "কোনো এক পৃষ্ঠীকে পরাস্ত করার জন্য বিশেষত্ব?", answer: "দৃশ্য নির্বাচন" },
       
    
     { question: "এটা কি গুরুত্বপূর্ণ?", answer: "জ্ঞান" },
        { question: "এটি কি শুরুতে চলার পথে সঠিক?", answer: "উত্তরণ" },
        { question: "এই প্রথম ঘটানো হবে?",
          answer: "জ্ঞান প্রতিষ্ঠা" },
        { question: "যে কোনো ক্ষমতা অর্জিত জানালায় দক্ষ?", answer: "অভ্যন্তরীণ" },
        { question: "কিন্তু ঐ অযোগ্যতা সম্পর্কে?", answer: "কেন সূচনা?" },
            { question: "এটি প্রশংসা শেষ কোন বিষয়ে", answer: "ক্ষমতা" }
        ];
[]
let currentRiddleIndex = 0;
let score = 0;

const riddleQuestionElement = document.getElementById("riddle-question");
const userAnswerInput = document.getElementById("user-answer");
const submitBtn = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function showRiddle() {
    const currentRiddle = riddles[currentRiddleIndex];
    riddleQuestionElement.textContent = currentRiddle.question;
    userAnswerInput.value = '';
    resultElement.textContent = '';
    nextBtn.style.display = 'none';
}

function checkAnswer() {
    const currentRiddle = riddles[currentRiddleIndex];
    const userAnswer = userAnswerInput.value.trim().toLowerCase();

    if (userAnswer === currentRiddle.answer.toLowerCase()) {
        score++;
        resultElement.textContent = "সঠিক উত্তর!";
    } else {
        resultElement.textContent = `ভুল উত্তর! সঠিক উত্তর ছিল: ${currentRiddle.answer}`;
    }

    scoreElement.textContent = `স্কোর: ${score}`;
    nextBtn.style.display = 'block';
    submitBtn.disabled = true;
}

function nextRiddle() {
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
        showRiddle();
        submitBtn.disabled = false;
    } else {
        resultElement.textContent = `আপনি সমস্ত ধাঁধার উত্তর দিয়েছেন! আপনার চূড়ান্ত স্কোর: ${score}`;
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'none';
    }
}

submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextRiddle);

// Initialize the game
showRiddle();
