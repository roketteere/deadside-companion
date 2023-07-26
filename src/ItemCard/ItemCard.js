import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import AssaultRifleModal from "../AssaultRifleModal/AssaultRifleModal";
import Image from "react-bootstrap/Image";
import "./style/item-card.css";

export default function ItemCard(item) {
  let count = 0;
  const images = item.images;
  const Name = item.name;
  const Description = item.description;
  const RPM = item.rpm;
  const Damage = item.damage;
  const Ammo = item.ammo;
  const Magazine = item.magazine;
  const TTK = item.ttk;
  const FullReload = item.fullReload;
  const TacticalReload = item.tacticalReload;
  const Durability = item.durability;
  const SZTrader = item.szTrader;
  const Buy = item.buy;
  const Sell = item.sell;
  const Modifications = item.modifications;
  const MagazineMod = item.magazineMod;

  const [title, setTitle] = useState(null);
  const [clickedImage, setClickedImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [rpm, setRpm] = useState(null);
  const [damage, setDamage] = useState(null);
  const [ammo, setAmmo] = useState(null);
  const [magazine, setMagazine] = useState(null);
  const [ttk, setTtk] = useState(null);
  const [fullReload, setFullReload] = useState(null);
  const [tacticalReload, setTacticalReload] = useState(null);
  const [durability, setDurability] = useState(null);
  const [szTrader, setSzTrader] = useState(null);
  const [buy, setBuy] = useState(null);
  const [sell, setSell] = useState(null);
  const [modifications, setModifications] = useState(null);
  const [scope, setScope] = useState(null);
  const [muzzle, setMuzzle] = useState(null);
  const [magazineMod, setMagazineMod] = useState(null);
  const [flashlight, setFlashlight] = useState(null);
  const [show, setShow] = useState(false);
  const closeHandler = () => {
    setTitle(null);
    setClickedImage(null);
    setDescription(null);
    setRpm(null);
    setDamage(null);
    setAmmo(null);
    setMagazine(null);
    setTtk(null);
    setFullReload(null);
    setTacticalReload(null);
    setDurability(null);
    setSzTrader(null);
    setBuy(null);
    setSell(null);
    setModifications(null);
    setShow(false);
  };

  function openHandler(index, image) {
    setClickedImage(image);
    setTitle(Name[index]);
    setDescription(Description[index]);
    setRpm(RPM[index]);
    setDamage(Damage[index]);
    setAmmo(Ammo[index]);
    setMagazine(Magazine[index]);
    setTtk(TTK[index]);
    setFullReload(FullReload[index]);
    setTacticalReload(TacticalReload[index]);
    setDurability(Durability[index]);
    setSzTrader(SZTrader[index]);
    setBuy(Buy[index]);
    setSell(Sell[index]);
    setModifications(Modifications[index]);
    setScope(Modifications[index].scope);
    setMuzzle(Modifications[index].muzzle);
    setMagazineMod(Modifications[index].magazineMod);
    setFlashlight(Modifications[index].flashlight);
    setShow(true);
  }
  return (
    <div className="item-container">
      <h2 className="title ms-3">{item.containerTitle}</h2>
      <div className="item-card">
        {images.map((image, index) => {
          return (
            <Image
              className="btn btn-secondary p-1 m-2  item-cover"
              src={image}
              key={index}
              style={{ width: 300 }}
              onClick={() => {
                openHandler(index, image);
              }}
            />
          );
        })}

        <AssaultRifleModal
          show={show}
          onHide={closeHandler}
          title={title}
          image={clickedImage}
          rpm={rpm}
          damage={damage}
          ammo={ammo}
          magazine={magazine}
          ttk={ttk}
          fullReload={fullReload}
          tacticalReload={tacticalReload}
          durability={durability}
          szTrader={szTrader}
          buy={buy}
          sell={sell}
          scope={scope}
          muzzle={muzzle}
          magazineMod={magazineMod}
          flashlight={flashlight}
          description={description}
        />
      </div>
    </div>
  );
}
