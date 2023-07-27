// Components
import ItemButton from "../ItemButton/ItemButton";
import ItemCard from "../ItemCard/ItemCard";

// Images
import weaponIcon from "../images/icons/png/001-assault-rifle.png";
import pistolIcon from "../images/icons/png/002-gun.png";
import shotgunIcon from "../images/icons/png/003-shotgun.png";
import sniperIcon from "../images/icons/png/004-sniper-rifle.png";
import smgIcon from "../images/icons/png/005-submachine-gun.png";
import lmgIcon from "../images/icons/png/006-machine-gun.png";
import rocketlauncherIcon from "../images/icons/png/007-rocket-launch.png";
import meleeIcon from "../images/icons/png/008-fist.png";
import grenadeIcon from "../images/icons/png/009-grenade.png";

// Data
import AssaultRifles from "../images/assault_rifles/AssaultRifles";
import Pistols from "../images/pistol_images/Pistols";

export default function Home() {
  return (
    <>
      <ItemButton
        title="Assault Rifles"
        icon={weaponIcon}
        component={
          <ItemCard
            containerTitle="Assault Rifles"
            name={AssaultRifles.name}
            images={AssaultRifles.image}
            rpm={AssaultRifles.rpm}
            damage={AssaultRifles.damage}
            ammo={AssaultRifles.ammo}
            magazine={AssaultRifles.magazine}
            ttk={AssaultRifles.ttk}
            fullReload={AssaultRifles.fullReload}
            tacticalReload={AssaultRifles.tacticalReload}
            durability={AssaultRifles.durability}
            szTrader={AssaultRifles.szTrader}
            buy={AssaultRifles.buy}
            sell={AssaultRifles.sell}
            modifications={AssaultRifles.modifications}
            description={AssaultRifles.description}
          />
        }
      />
      <ItemButton
        title="Pistols"
        icon={pistolIcon}
        component={
          <ItemCard
            containerTitle="Pistols"
            name={Pistols.name}
            images={Pistols.image}
            rpm={Pistols.rpm}
            damage={Pistols.damage}
            ammo={Pistols.ammo}
            magazine={Pistols.magazine}
            ttk={Pistols.ttk}
            fullReload={Pistols.fullReload}
            tacticalReload={Pistols.tacticalReload}
            durability={Pistols.durability}
            szTrader={Pistols.szTrader}
            buy={Pistols.buy}
            sell={Pistols.sell}
            modifications={Pistols.modifications}
            description={Pistols.description}
          />
        }
      />
      <ItemButton title="Shotguns" icon={shotgunIcon} component={ItemCard} />
      <ItemButton
        title="Sniper Rifles"
        icon={sniperIcon}
        component={ItemCard}
      />
      <ItemButton title="SMGs" icon={smgIcon} component={ItemCard} />
      <ItemButton title="LMGs" icon={lmgIcon} component={ItemCard} />
      <ItemButton
        title="Rocket Launchers"
        icon={rocketlauncherIcon}
        component={ItemCard}
      />
      <ItemButton title="Grenades" icon={grenadeIcon} component={ItemCard} />
      <ItemButton title="Melee" icon={meleeIcon} component={ItemCard} />
    </>
  );
}
