import izh70 from "./izh70.png";
import ttk from "./ttk.png";
import berta from "./berta.png";
import c1911 from "./c1911.png";
import f57 from "./f57.png";

const Pistols = {
  name: ["IZH-70", "TTk", "Bereta M9", "C1911", "F-57"],
  image: [izh70, ttk, berta, c1911, f57],
  description: [
    `The IZH-70, or as its commonly called, the Makarov, is an extremely common pistol that you can find everywhere in Deadside. You will mostly find these in the hands of Bandit AI, and littered around the map. Compared to the other pistols, the IZH-70 has a small magazine, and doesn't do much damage. Its bullet is slow and drops quickly. Its probably the worst performing weapon in the game, but that doesn't mean its worthless. One shot to the face is all it takes to kill a player or bot, unless they are wearing a Heavy Assault Helmet, which has a face shield. Facing multiple enemies can also be a problem, due to it only having 8 bullets in the mag. But, you only need 6 of those bullets to kill a fully geared player. 

The IZH-70 is based on the real life PM pistol, an icon of the Cold War Era.

This weapon is repaired with a Tier 1 Pistol Repair Kit

This weapon has no attachments available in game.`,
    `The TTk is a common pistol in Deadside, often used by Bandit AI, and found around the map in towns. Its very similar to the IZH-70 in many ways, except for two differences. The TTk shoots slower, giving it a theoretical slower time to kill in close quarters situations. But, the bullet of the TTk is far superior to that of the IZH-70's. Its much faster than any other pistol bullet, and hardly drops at all, making it more similar to a rifle round than a pistol round. This is probably due to the BB-19 using the same round as the TTk, so in order to make the BB-19 better, the 7.62x25 cartridge performs very well. So, the TTk is more effective at range than any other pistol, able to hit shots past 100 meters with ease, as long as the shooter is up to the task. It also helps that the iron sights are quite good for shooting at longer ranges compared to most other pistols.

The TTk is based off the real life TT pistol, used by the Soviets during the Second World War.

This weapon is repaired with a Tier 1 Pistol Repair Kit

This weapon has no attachments available in game.

`,
    `The Berta M9 is a pistol that is mainly used by Military AI, but can also be found around in the world in many areas. This pistol has a large magazine capacity, making it ideal for fast firing. Its iron sights are the most blocky out of any pistols, so its not exactly a precision weapon. This is especially true with the suppressor added on, which completely obstructs the sights. Because of its large magazine capacity, this pistol is one of the best for dealing with multiple enemies at once, as it has the ammunition to deal with them.

The Berta M9 is based off the real like Beretta M9A1, hence the quite odd sounding “Berta” used for the in game name.

This weapon is repaired with a Tier 2 Pistol Repair Kit`,
    `The C1911 is a very high damaging pistol, that is commonly used by Military AI. Out of all the pistols, the C1911 has the fastest time to kill, and some of the best quality iron sights. However, it has the smallest magazine capacity. Unlike its contemporary the Berta M9, the C1911 is absolutely a precision weapon. If used correctly, a player can use this pistol to quickly drop a player in no more than 4 shots, even if they have the best armor available. Against unarmored targets, a player can drop targets in only 2 shots to the chest, which helps offset its low magazine count. The suppressor sits low on the pistol, making it easy to use the excellent iron sights to quietly drop any enemies. But, the pistol isn't without some serious drawbacks. As mentioned, the magazine only holds 7 rounds, which makes it easy for a player to run dry when they need ammo the most. The 45. ACP bullet itself is also quite slow, the slowest in the game if you don't count VG-25s. It also has the most bullet drop of any round in the game, which makes hitting moving targets at a distance extremely difficult. The C1911 is very accurate, so if a player learns to adjust to the cartridge's ballistic characteristics, its very possibly to hit shots at around 150 meters at most, however past that, the bullet drops well below what the sights can see.

The C1911 is based off the real life Colt M1911, an American icon of both World Wars.

This weapon is repaired with a Tier 2 Pistol Repair Kit`,
    `The F-57 is an expensive pistol that looks fancy, but in reality, its not really much different than most other pistols in Deadside. It has slightly slower damage output than the Berta M9, but it has 5 more bullets in the magazine, giving it the highest magazine capacity out of any pistol. So, if that's something you value a lot in your pistols, this one is for you, otherwise there are better, and much cheaper choices out there. The irons are most similar to the Berta, just some simple vertical posts. Unlike the Berta M9, this pistol can still use its sights effectively with a suppressor, making this a good suppressed option if you dislike the Berta's irons, and the C1911.

The F-57 is based off the real life FN Five-seveN, a pistol known for its ability to go through soft body armor.

This weapon can only be purchased from a Roaming Trader. They can spawn in a Heli Crash, Cargo Drop, Bunker Crate, or the reward in a Medium, Hard, or Epic Mission. 

This weapon is repaired with a Tier 2 Pistol Repair Kit`,
  ],
  rpm: ["400", "300", "400", "350", "350"],
  damage: ["35", "35", "35", "50", "35"],
  ammo: ["9x18", "7.62x25", "9x19", ".45 ACP", "5.7x28"],
  magazine: ["8", "8", "15", "7", "20"],
  ttk: ["0.30-0.90s", "0.34-1.20s", "0.30-0.90s", "0.34-0.80s", "0.34-1.00s"],
  fullReload: ["3.65s", "3.65s", "3.65s", "3.65s", "3.65s"],
  tacticalReload: ["2.70s", "2.70s", "2.70s", "3.20s", "2.75s"],
  durability: ["400", "400", "800", "360", "800"],
  szTrader: ["No", "No", "Yes", "Yes", "Yes"],
  buy: ["-", "-", "$5,000", "$5,000", "$11,500"],
  sell: ["$200", "$200", "$400", "$400", "$600"],
  modifications: [
    {
      muzzle: ["-"],
      flashlight: ["-"],
    },
    {
      muzzle: ["-"],
      flashlight: ["-"],
    },
    {
      muzzle: ["Berta M9 Suppressor"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
    {
      muzzle: ["C1911 Suppressor"],
      flashlight: ["-"],
    },
    {
      muzzle: ["F-57 Suppressor"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
  ],
};

export default Pistols;
