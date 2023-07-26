import akmod from "./akmod.png";
import aksm2 from "./aksm2.png";
import aksu from "./aksu.png";
import ar4 from "./ar4.png";
import fasam from "./fasam.png";
import grom from "./grom.png";
import skar from "./skar.png";
import uag from "./uag.png";

const AssaultRifles = {
  name: ["AK-MOD", "AK-SM2", "AK-SU", "AR-4", "FASAM", "GROM", "SKAR", "UAG"],
  image: [akmod, aksm2, aksu, ar4, fasam, grom, skar, uag],
  description: [
    `The AK-mod is an excellent mid tier Assault Rifle, that can be commonly found on Military AI and in other Military locations in Deadside. It has easy to control recoil in short bursts, and decent damage output. While it will get outclassed by other Assault Rifles in cyclic rate and accuracy, this weapon makes up for it in availability. It also has a very fast reload, and ammunition is everywhere around the world. This makes it a good choice for both PvE and PvP, especially for players looking to get higher level gear. This weapons biggest shortcoming its is accuracy, past ~250M, this weapon will often not land on target. 

The AK-mod is based off the real life AKM, which shouldn't be a surprise to most as it is the most common firearm in the world. There is a date on the in game weapon model, that says 1975. This could explain why the AK-mod in game is so inaccurate, as its very possible that the barrel is around 50 years old.

This weapon is repaired with a Tier 1 Assault Rifle Repair Kit`,
    `The AK-SM is very similar to the AK-SU, except that the SM can mount optics, and it has less recoil. You can find this weapon in the world being used by Military Bots, and often used by Heli Guards. Unless you happen to prefer the recoil of the AK-SM, the AK-mod is almost always the better choice, however the AK-SM is much more affordable. Their recoil is incredibly similar to begin with, however good muzzle brakes are easier to find for the AK-SM, which could lead to a player using this weapon over an AK-mod. 

The AK-SM is based off the real life AKS-74U, except this version has an aftermarket handguard, pistol grip, and stock added on.

This weapon is repaired with a Tier 1 Assault Rifle Repair Kit

`,
    `The AK-SU is a medium tier short Assault Rifle, that can be found on both Bandit and Military AI. It is one of two weapons in game to fire the 5.45x39 round. It has very similar characteristics to the AK-mod, except it does less damage to the body. It does do the same damage to the head as the AK-mod, giving this weapon good potential in the right hands. This weapon is the cheapest in the Assault Rifle category, and spawns a lot in the world, however it does lack the ability to mount any sort of optic, severely limiting its range. This weapon is outclassed by any other Assault Rifle, and is typically dropped the moment a player finds one. Still, this weapon can be very effective for the price.

The AK-SU is based off the real life AKS-74U, except this version is missing the “Warsaw Pact” optics mounting rail.

This weapon is repaired with a Tier 1 Assault Rifle Repair Kit`,
    `The AR4 is an incredible high tier Assault Rifle, with an extremely high damage output, fast reloads, and decent recoil, making the AR4 one of the most feared weapons in all of Deadside. At close ranges, its hard to find any weapon that can contend with the AR4, it has the 2nd fastest time to kill out of any automatic weapon, combined with very easy to control recoil. While it may get out damaged by something like a Fasam or M99, the AR4 is an excellent combination of damage, and mid-range consistency. Its accuracy is also quite good, although not perfect. There are definitely better options out there for long range combat, although its very possible to land consistent hits at almost any range. The only downside to this weapon, if you can call it that, is its recoil at longer ranges. This is simply a side effect of the high cyclic rate, which can make it difficult to spray down targets at longer ranges. Because of how good this weapon is, it's rare and very expensive. 

The AR4 is based off the real life M4A1, with an aftermarket magazineMod and B5 SOPMOD stock.

This weapon is repaired with a Tier 2 Assault Rifle Repair Kit`,
    `The Fasam is a rare high tier weapon, with some very unique characteristics. It has the fastest time to kill of any automatic weapon in the game, with a very high cyclic rate of 850RPM. So up close, this weapon can melt people extremely quickly, even faster than the AR4. However, its recoil is more difficult to control compared to other assault rifles, becoming much more inconsistent faster compared to other spray patterns. The Fasam is the only Assault Rifle in Deadside currently that has a 3 round burst function, although most players don't use it, because its really not all that useful. Outside of those features, its pretty similar to the UAG. They both share similar handling, and their recoil patterns are similar as well. The Fasams recoil does have a very consistent first few rounds, just like the UAG, making it useful at longer ranges, however the Fasams recoil quickly becomes much higher and inconsistent, making it harder to do longer sprays. Just like the UAG, the Fasam is a great choice for an all in one weapon that can engage in both close and long ranges with good effect. 

The Fasam is based of the real life FA-MAS G2, however the Fasam in Deadside has a much slower cyclic rate than its real life counterpart, which sits around 900- 1150RPM.

This weapon is repaired with a Tier 2 Assault Rifle Repair Kit`,
    `The Grom is a rare high tier Assault Rifle that boats a high rate of fire, with a short overall length. It is decently cheap compared to the rest of the high tier ARs, which makes it an affordable choice. Its recoil is simple to control, but you cannot mount muzzle devices, and the sights have some serious height over bore problems. Any optic you put on the Grom will be mounted very high above the barrel, since the optic is put on top of the carry handle. This can make it awkward to use in CQB if you aren't used to it. However the Grom does very well in close quarters fights, its barrel is extremely short, the shortest out of all the high tier ARs. It also has a very fast rate of fire, with the 3rd fastest TTK of any automatic weapon, making it very deadly. However it does suffer at longer ranges, it has the same internal barrel length as the AK-mod, with the same accuracy characteristics. Shots past 250M start to become inaccurate. Despite this the Grom has a lot going for it, and is a great choice for close range spray downs. 

The Grom is based off the real life OTs-14-1A, and is basically a bullpup AKM.

This weapon is repaired with a Tier 2 Assault Rifle Repair Kit`,
    `The Skar is a very effective high tier Assault Rifle, that is known for its excellent handling. Its damage output is relatively low compared to other weapons in its tier, being the exact same as a simple AK-mod. However, the recoil on the Skar is simple to control, being almost all vertical recoil. This can be cut down with a muzzle brake for great results. It also has a very quick reload, the fastest of any weapon in game. It has a decently long barrel, which can make it harder to move around cover, but, the weapon does have good accuracy over range because of this long barrel. 

The Skar is based off the real life SCAR-L, however the in game model is a SCAR-H, which shoots 7.62x51 (.308).

This weapon is repaired with a Tier 2 Assault Rifle Repair Kit`,
    `The UAG is a rare high tier Assault Rifle, that does very well in medium range outdoor combat. It has a good rate of fire, and very good accuracy. Its vertical recoil is average, however its horizontal recoil is a bit high later in the pattern, making longer sprays challenging. Because of this recoil, some players don't like to use the UAG in close range engagements. However, because of its good rate of fire, it still can do very well in that role, out damaging lower tier Assault Rifles. This weapon is similar to the Fasam, both are good at medium ranges, with a magnified optic, however the UAG lacks the extremely fast TTK of the Fasam. One of the strengths of the UAG, is that its first few shots have extremely consistent recoil, so fast semi-auto taps at longer ranges are easy and effective. This makes it a good option for both close and long range engagements, without using two weapons.

The UAG is based off the real life AUG A2. Although, its very possible the top picatinny rail is based off an airsoft reproduction, or some rare aftermarket part.

This weapon is repaired with a Tier 2 Assault Rifle Repair Kit`,
  ],
  rpm: ["600", "600", "600", "800", "850", "775", "600", "700"],
  damage: ["40", "35", "35", "40", "40", "40", "40", "40"],
  ammo: [
    "7.62x39",
    "5.45x39",
    "5.45x39",
    "5.56x45",
    "5.56x45",
    "7.62x39",
    "5.56x45",
    "5.56x45",
  ],
  magazine: ["30", "30", "30", "30", "30", "30", "30", "30"],
  ttk: [
    "0.20 - 0.50s",
    "0.20 - 0.50s",
    "0.20 - 0.50s",
    "0.15 - 0.37s",
    "0.14 - 0.35s",
    "0.15 - 0.38s",
    "0.20 - 0.50s",
    "0.17 - 0.42s",
  ],
  fullReload: [
    "2.65s",
    "3.55s",
    "3.55s",
    "3.35s",
    "3.65s",
    "3.55s",
    "3.35s",
    "3.55s",
  ],
  tacticalReload: [
    "2.65s",
    "2.75s",
    "2.75s",
    "2.85s",
    "2.85s",
    "2.75s",
    "2.50s",
    "2.85s",
  ],
  durability: ["1700", "1700", "1400", "1900", "1900", "1900", "1900", "1900"],
  szTrader: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  buy: [
    "$31,000",
    "$11,500",
    "$8,500",
    "$61,000",
    "$68,500",
    "$36,000",
    "$54,500",
    "$47,500",
  ],
  sell: [
    "$5,500",
    "$2,000",
    "$1,500",
    "$11,000",
    "$12,300",
    "$6,500",
    "$9,800",
    "$8,500",
  ],
  modifications: [
    {
      scope: [
        "OET",
        "D-point",
        "MSR",
        "Tricon",
        "Halosun",
        "Hunting Scope",
        "POS-1",
        "COD",
        "HMR",
        "ELCN",
      ],
      muzzle: ["7.62x39 MZB M1", "7.62x39 MZB M2", "7.62x39 MZB M3"],
      magazineMod: ["7.62x39 EXT MAG"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
    {
      scope: [
        "OET",
        "D-point",
        "MSR",
        "Tricon",
        "Halosun",
        "Hunting Scope",
        "POS-1",
        "COD",
        "HMR",
        "ELCN",
      ],
      muzzle: ["5.45x39 MZB M1", "5.45x39 MZB M2"],
      magazineMod: ["5.45x39 EXT MAG"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
    {
      scope: null,
      muzzle: ["5.45x39 MZB M1", "5.45x39 MZB M2"],
      magazineMod: ["5.45x39 EXT MAG"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
    {
      scope: [
        "OET",
        "D-point",
        "MSR",
        "Tricon",
        "Halosun",
        "Hunting Scope",
        "POS-1",
        "COD",
        "HMR",
        "ELCN",
      ],
      muzzle: ["5.56x45 MZB M1", "5.56x45 MZB M2", "5.56x45 MZB M3"],
      magazineMod: ["5.56x45 EXT MAG"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
    {
      scope: [
        "OET",
        "D-point",
        "MSR",
        "Tricon",
        "Halosun",
        "Hunting Scope",
        "POS-1",
        "COD",
        "HMR",
        "ELCN",
      ],
      muzzle: ["5.56x45 MZB M1", "5.56x45 MZB M2", "5.56x45 MZB M3"],
      magazineMod: ["5.56x45 EXT MAG"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
    {
      scope: [
        "OET",
        "D-point",
        "MSR",
        "Tricon",
        "Halosun",
        "Hunting Scope",
        "POS-1",
        "COD",
        "HMR",
        "ELCN",
      ],
      muzzle: null,
      magazineMod: ["7.62x39 EXT MAG"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
    {
      scope: [
        "OET",
        "D-point",
        "MSR",
        "Tricon",
        "Halosun",
        "Hunting Scope",
        "POS-1",
        "COD",
        "HMR",
        "ELCN",
      ],
      muzzle: ["5.56x45 MZB M1", "5.56x45 MZB M2", "5.56x45 MZB M3"],
      magazineMod: ["5.56x45 EXT MAG"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
    {
      scope: [
        "OET",
        "D-point",
        "MSR",
        "Tricon",
        "Halosun",
        "Hunting Scope",
        "POS-1",
        "COD",
        "HMR",
        "ELCN",
      ],
      muzzle: ["5.56x45 MZB M1", "5.56x45 MZB M2", "5.56x45 MZB M3"],
      magazineMod: ["5.56x45 EXT MAG"],
      flashlight: ["Small Weapon Flashlight", "Large Weapon Flashlight"],
    },
  ],
};

export default AssaultRifles;
