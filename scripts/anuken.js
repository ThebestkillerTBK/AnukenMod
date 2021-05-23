const anuken1 = require("coder-anuken");
const eyes = extend(Weapon, {
  firstShotDelay: 10,
  shootSound: Sounds.laserbig,
  x: 0,
  reload: 250,
  shootStatus: StatusEffects.unmoving,
  shootStatusDuration: 120,
  continuous: true
});
const eyegun = extend(ContinuousLaserBulletType, {
  length: 400,
  width: 15,
  lifetime: 140,
  damage: 32,
  lightningColor: Pal.remove,
  colors: [ Pal.remove, Color.white ],
  shootEffect: Fx.shootBigSmoke2,
  shake: 3,
  hitEffect: Fx.hitMeltHeal,
  collidesTeam:true,
  healPercent: 2
});

const eyes2 = extend(Weapon, {
  reload: 2,
  mirror: true,
  x: -3,
  y: 0,
  rotate: true,
  shootSound: Sounds.laser
});

const eyegun2 = extend(SapBulletType, {
sapStrength: 0.9,
length: 240,
damage: 100,
shootEffect: Fx.shootSmall,
hitColor: Color.valueOf("e55454"),
color: Color.valueOf("e55454"),
despawnEffect: Fx.none,
width: 0.4,
lifetime:12,
knockback: 0.5
});
eyes.bullet = eyegun;
eyes2.bullet = eyegun2;
const anuken = extendContent(UnitType, "anuken", {
  alwaysUnlocked: true,
  speed: 1.25,
  health: 16384,
  hitSize: 10,
  hovering: true,
  description: "The [red]GOD []of [red]M[#eebb00]i[yellow]n[green]d[cyan]u[blue]s[purple]t[pink]r[white]y",
  mechStepParticles: true,
  mechFrontSway: 0.25,
  canBoost: true,
  boostMultiplier: 5,
  buildSpeed: 32768,
  mechSideSway: 0,
  rotateSpeed: 3,
  itemCapacity: 90,
  commandLimit: 8,
  init(){
     this.super$init()
     print("A wild anuken appeared.");

    },
});

anuken.constructor = () => extend(MechUnit, {
  killed(){
    this.super$killed();
    print("THE CODER ANUKEN USE THE CODE TO ATTACK YOU");
    anuken1.coderAnuken.spawn(this.team, this.x, this.y);
  }});

anuken.weapons.add(eyes,eyes2);

anuken.defaultController = () => new GroundAI();

const lightning = new MoveLightningAbility(10, 40, 0.9, 0, 1, 1.25, Pal.remove)
anuken.abilities.add(lightning);