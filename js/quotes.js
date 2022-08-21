const quotes = [
  {
    quote: " No great man ever complains of want of opportunity.",
    korean: "위대한 사람은 기회가 없다고 원망하지 않는다.",
  },
  {
    quote: "Do not accustom yourself to use big words for little matters.",
    korean: "작은 일에 거창한 말을 사용하는 습관을 피해라.",
  },
  {
    quote: "A day without laughter is a day wasted.",
    korean: "웃음 없는 하루는 낭비한 하루다.",
  },
  {
    quote:
      "Patterning your life around other's opinions is nothing more than slavery.",
    korean: "다른 사람의 생각에 인생을 맞춰가는 것은 노예나 다름없다.",
  },
  {
    quote: "love what you have.",
    korean: "당신이 가진 것을 사랑하라.",
  },
  {
    quote: "It ain't over till it's over.",
    korean: "끝날 때까지는 끝난 게 아니다.",
  },
  {
    quote: "Life is not fair, get used to it.",
    korean: "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.",
  },
  {
    quote: "Only I can change my life, No one can do it for me.",
    korean: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 줄 수 없다.",
  },
  {
    quote:
      "Life is a tragedy when seen in close-up, but a comedy in long shot.",
    korean: "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다.",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    korean: "더 좋은 것을 쫓기 위해 좋은 것을 버리는 것을 두려워하지 마라.",
  },
  {
    quote: "No pain no gain.",
    korean: "고통없이는 얻는 것도 없다.",
  },
  {
    quote: "Habit is second nature.",
    korean: "습관은 제 2의 천성이다.",
  },
  {
    quote: "We can give advice, but we cannot give conduct.",
    korean: "충고는 해 줄 수 있으나, 행동하게 할 수는 없다.",
  },
  {
    quote: "Success doesn't come overnight.",
    korean: "성공은 하룻밤 사이에 오지 않는다.",
  },
  {
    quote: "Better late than never.",
    korean: "아예 안하는 것보단 늦게라도 하는 게 낫다.",
  },
  {
    quote: "Who dares, wins.",
    korean: "도전하는 자가 승리한다.",
  },
  {
    quote: "Slow and steady win the race.",
    korean: "천천히 그리고 꾸준히 하면 경주에서 승리한다.",
  },
];

const quote = document.querySelector("#quote span:first-child");
const korean = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
korean.innerHTML = todaysQuote.korean;
