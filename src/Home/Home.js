import ItemButton from "../ItemButton/ItemButton";
import weaponIcon from "../images/icons/png/001-assault-rifle.png";
import ItemCard from "../ItemCard/ItemCard";
import AssaultRifle from "../AssaultRifle.js/AssaultRifle";
import AssaultRifles from "../images/assault_rifles/AssaultRifles";
import PistolModal from "../PistolModal/PistolModal";
import Pistols from "../images/pistol_images/Pistols";
import pistolIcon from "../images/icons/png/002-gun.png";

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
    </>
  );
}
