const eyes = extend(Weapon, {
  firstShotDelay: 10,
  shootSound: Sounds.laserbig,
  x: 0,
  reload: 180,
  shootStatus: StatusEffects.overclock,
  shootStatusDuration: 180,
  continuous: true
});
const eyegun = extend(ContinuousLaserBulletType, {
  length: 400,
  width: 20,
  lifetime: 180,
  damage: 2599,
  lightningColor: Pal.remove,
  colors: [ Pal.remove, Color.white ],
  shootEffect: Fx.shootBigSmoke2,
  shake: 2,
  hitEffect: Fx.hitMeltHeal,
  healPercent: 5
});

const eyes2 = extend(Weapon, {
  reload: 4,
  mirror: true,
  x: -3,
  y: 0,
  rotate: true,
  shootSound: Sounds.laser
});

const eyegun2 = extend(SapBulletType, {
sapStrength: 0.9,
length: 200,
damage: 150,
shootEffect: Fx.shootSmall,
hitColor: Color.valueOf("e55454"),
color: Color.valueOf("e55454"),
despawnEffect: Fx.none,
width: 0.1,
lifetime:12,
knockback: 0.9
});
eyes.bullet = eyegun;
eyes2.bullet = eyegun2;
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
  rotateSpeed: 3,
  itemCapacity: 90,
  commandLimit: 8
});

anuken.constructor = () => extend(UnitEntity, {});

anuken.weapons.add(eyes,eyes2);

anuken.defaultController = () => new GroundAI();