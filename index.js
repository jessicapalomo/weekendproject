let readlineSync = require("readline-sync");

let questions = 15;
let questionsLeft = " [" + questions + " questions left] ";
let noun1 = readlineSync.question(`Please type a noun ${questionsLeft} `);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let adjective1 = readlineSync.question(
  `Please type an adjective ${questionsLeft} `
);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let verb1 = readlineSync.question(`Please type a verb ${questionsLeft} `);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let adverb1 = readlineSync.question(`Please type an adverb ${questionsLeft} `);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let noun2 = readlineSync.question(`Please type a noun ${questionsLeft} `);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let adjective2 = readlineSync.question(
  `Please type a adjective ${questionsLeft} `
);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let pluralNoun1 = readlineSync.question(
  `Please type a plural noun ${questionsLeft} `
);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let pluralNoun2 = readlineSync.question(
  `Please type another plural noun ${questionsLeft} `
);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let pluralNoun3 = readlineSync.question(
  `Please type a third plural noun ${questionsLeft} `
);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let body1 = readlineSync.question(
  `Please type a part of the body ${questionsLeft} `
);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let noun3 = readlineSync.question(`Please type a noun ${questionsLeft} `);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let noun4 = readlineSync.question(`Please type another noun ${questionsLeft} `);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let noun5 = readlineSync.question(`Please type a third noun ${questionsLeft} `);

questions -= 1;
questionsLeft = " [" + questions + " questions left] ";
let noun6 = readlineSync.question(
  `Please type one more noun ${questionsLeft} `
);

questions -= 1;
questionsLeft = " [last question] ";
let body2 = readlineSync.question(
  `Please type another part of the body. ${questionsLeft}`
);

let alert = readlineSync.question(
  `~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  Ahoy! All done. Ready for the message? 🏴‍☠️
~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~`
);

let sentence = `Ye can always pretend to be a bloodthirsty ${noun1}\n`;
sentence += `threatening everyone by waving yer ${adjective1} sword\n`;
sentence += `in the air, but until ye learn to ${verb1} like a pirate,\n`;
sentence += `ye will never be ${adverb1} accepted as an authentic\n`;
sentence += `${noun2}. So here is what ye do: Cleverly work into yer daily\n`;
sentence += `conversations ${adjective2} pirate phrases such as\n`;
sentence += `Ahoy there ${pluralNoun1} and Avast, ye ${pluralNoun2}\n`;
sentence += `and Shiver me ${pluralNoun3}. Remember to drop all your gs\n`;
sentence += `when ye say such words as sailin, spittin, and fightin. This will\n`;
sentence += `give ye a/an ${body1} start to being recognized as a\n`;
sentence += `swashbucklin ${noun3}. Once ye have the lingo down pat,\n`;
sentence += `it helps to wear a three-cornered ${noun4} on yer\n`;
sentence += `head, stash a/an ${noun5} in yer pants, and keep a/an\n`;
sentence += `${noun6} perched atop yer ${body2}. Aye, now ye be a real pirate!\n`;

console.log(sentence);
