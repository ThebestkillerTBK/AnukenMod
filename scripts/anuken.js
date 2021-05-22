const eyes = extend(Weapon, {
  firstShotDelay: 10,
  shootSound: Sounds.laserbig,
  x: 0,
  reload: 240,
  shootStatus: StatusEffects.overclock,
  shootStatusDuration: 180,
  continuous: true
});
const eyegun = extend(ContinuousLaserBulletType, {
  length: 400,
  width: 20,
  lifetime: 180,
  damage: 25991,
  lightningColor: Pal.remove,
  colors: [ Pal.remove, Color.white ],
  shootEffect: Fx.shootBigSmoke2,
  shake: 2,
  hitEffect: Fx.hitMeltHeal
});

eyes.bullet = eyegun;

const anuken = extendContent(UnitType, "anuken", {
  alwaysUnlocked: true,
  speed: 1.25,
  health: 6778724,
  hitSize: 10,
  hovering: true,
  description: "The [red]GOD []of [red]M[#eebb00]i[yellow]n[green]d[cyan]u[blue]s[purple]t[pink]r[white]y",
  mechStepParticles: true,
  mechFrontSway: 0.25,
  canBoost: true,
  boostMultiplier: 5,
  buildSpeed: 9888,
  mechSideSway: 0,
  rotateSpeed: 4,
  itemCapacity: 90,
  commandLimit: 8
});

anuken.constructor = () => extend(UnitEntity, {});

anuken.weapons.add(eyes);

anuken.defaultController = () => new GroundAI();