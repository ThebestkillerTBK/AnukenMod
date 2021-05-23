const codegun = extend(Weapon, {
  name: "anukenisgod-code",
  shootSound: Sounds.plasmadrop,
  x: -3,
  y: 7,
  reload: 15,
  recoil: 2,
  rotate: true,
  mirror: true,
  rotateSpeed: 20,
  ejectEffect: Fx.casing4
});

const code = extend(BasicBulletType, {
  speed: 4.7,
  splashDamageRadius: 80,
  splashDamage: 40,
  width: 25,
  height: 25,
  homingPower: 0.2,
  homingRange: 150,
  lifetime: 140,
  damage: 256,
  targetAir: true,
  shake: 1,
  hitEffect: Fx.blastExplosion,
  collidesTeam:true,
  healPercent: 2,
  knockback: 0.8,
  statusDuration: 60,
  status: StatusEffects.blasted,
  backColor: Color.valueOf("#005500"),
  frontColor: Color.valueOf("#007700"),
});

const lasereye = extend(Weapon, {
  inaccuracy: 360,
  shootSound: Sounds.laserblast,
  reload: 300,
  shots: 18,
});

const lasereyebullet = extend(LaserBulletType, {
damage: 500,
length: 400,
width: 60,
height: 8,
lifetime: 120,
lightningSpacing: 50,
lightningLength: 15,
lightningDelay: 0.7,
lightningLengthRand: 10,
lightningDamage: 128,
lightningAngleRand: 30,
pierce: true,
color: Color.valueOf("207740"),
reflectable: false,
statusDuration: 120,
status: StatusEffects.disarmed
});

const eyesx = extend(Weapon, {
  firstShotDelay: 10,
  shootSound: Sounds.laserbig,
  reload: 250,
  continuous: true
});

const eyegunx = extend(ContinuousLaserBulletType, {
  length: 300,
  width: 13,
  lifetime: 160,
  damage: 30,
  colors: [Color.valueOf("#005500"), Color.valueOf("#007700")],
  shootEffect: Fx.shootBigSmoke2,
  shake: 3,
  hitEffect: Fx.hitMeltHeal,
  statusDuration: 80,
  status: StatusEffects.sapped,
  collidesTeam:true,
  healPercent: 1
});
        
lasereye.bullet = lasereyebullet;
codegun.bullet = code;
eyesx.bullet = eyegunx;

const coderAnuken = extendContent(UnitType, "coder-anuken", {
  alwaysUnlocked: true,
  speed: 3.5,
  flying: true,
  health: 32768,
  hitSize: 10,
  description: "[crimson]The true Anuken, the programmer Anuken. \n[forest]However, he is lazy.",
  buildSpeed: 9999,
  rotateSpeed: 10,
  itemCapacity: 256,
  commandLimit: 10,
});

coderAnuken.constructor = () => extend(UnitEntity, {});

coderAnuken.weapons.add(codegun, lasereye, eyesx);

coderAnuken.defaultController = () => new FlyingAI();

const lightning1 = new MoveLightningAbility(32, 40, 0.8, 0, 2, 4, Color.valueOf("#90aa90"))
coderAnuken.abilities.add(lightning1);

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
    coderAnuken.spawn(this.team, this.x, this.y);
  }});

anuken.weapons.add(eyes,eyes2);

anuken.defaultController = () => new GroundAI();

const lightning = new MoveLightningAbility(10, 40, 0.9, 0, 1, 1.25, Pal.remove)
anuken.abilities.add(lightning);